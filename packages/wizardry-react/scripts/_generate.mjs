import fs from 'fs';
import path, {dirname} from 'path';
import {parse} from 'svgson';
import _ from 'lodash';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const svgDirectory = path.join(__dirname, '../src/source');
const outputDirectory = path.join(__dirname, '../src/icons');
const outputJSONDirectory = path.join(__dirname, '../');


function convertFileNameToComponentName(fileName) {
    // 1. 删除 .svg 后缀
    const cleanedFileName = fileName.replace('.svg', '');

    // 2. 生成文件名名称 (保持原样)
    const name = cleanedFileName;

    // 3. 生成组件名称
    const parts = cleanedFileName.split('-');
    const componentName = parts
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

    return {
        name,
        componentName
    };
}


async function convertSvgToJsObject(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            parse(data).then(json => {
                const elements = json.children.map((element, index) => {
                    let attributes = Object.entries(element.attributes)
                        // remove unwanted attributes (just keep important ones)
                        .filter(([key]) => !['xmlns', 'xmlns:xlink', 'xml:space', 'stroke', 'fill', 'clip'].some(attr => key.startsWith(attr)))
                        .map(([key, value]) => `${key}: "${value}"`)
                        .join(', ');

                    // check if attributes has fill or stroke (add as current color)
                    if (element.attributes.fill) {
                        attributes += `, fill: "currentColor"`;
                    }

                    if (element.attributes.stroke) {
                        attributes += `, stroke: "currentColor"`;
                    }

                    // check if element has fill-rule attribute
                    if (element.attributes['fill-rule']) {
                        attributes += `, fillRule: "${element.attributes['fill-rule']}"`;
                    }

                    return `["${element.name}", { ${attributes}, key: "k${index}" }]`;
                });

                resolve(elements);
            });
        });
    });
}


async function processDirectory(directory) {
    const icons = {};
    const data = []
    // create output directory if not exists
    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory);
    }

    const filesDir = fs.readdirSync(directory);
    for (const dirName of filesDir) {
        const dirPath = path.join(directory, dirName);
        const isDirectory = fs.lstatSync(dirPath).isDirectory();
        if (!isDirectory) {
            console.warn(`Skipping file in root directory: ${dirName}`);
            continue;
        }

        const files = fs.readdirSync(dirPath);
        for (const file of files) {
            const {name, componentName} = convertFileNameToComponentName(file);

            if (icons[componentName]) {
                console.warn(`Skipping duplicate component: ${componentName}`);
                data.push({
                    componentName,
                    name,
                    category: dirName,
                });
                continue;
            }

            if (!icons[componentName]) {
                icons[componentName] = {};
            }

            const filePath = path.join(dirPath, file);
            icons[componentName] = await convertSvgToJsObject(filePath);
            data.push({
                componentName,
                name,
                category: dirName,
            })
        }

    }

    console.log(icons, 'icons')
    console.log(data, 'data')

    // Generate output files
    const indexArray = [];
    for (const [componentName, variants] of Object.entries(icons)) {
        let output = `import createComponent from '../lib/create-component';\n\n`;
        output += `/**
* @component @name ${componentName}
* @description Renders ${componentName} svg element
* @param {Object} props - props and any valid SVG attribute
* @returns {JSX.Element} JSX Element
*/

const ${componentName} = createComponent("${componentName}", [`;
        for (const elements of variants) {
            output += `\n    ${elements},`;
        }
        output += `\n]);\n\nexport default ${componentName};\n`;

        const fileName = _.snakeCase(componentName) + '.ts'; // Convert to kebab-case
        fs.writeFileSync(path.join(outputDirectory, fileName), output);
        console.log(`${fileName} has been saved.`);

        // Add to index file
        indexArray.push(`export { default as ${componentName} } from './${fileName.replace('.ts', '')}';`);
    }

    // Write index file
    fs.writeFileSync(path.join(outputDirectory, 'index.ts'), indexArray.join('\n'));
    fs.writeFileSync(
        path.join(outputJSONDirectory, 'data.json'),
        JSON.stringify(data, null, 2)
    );
}

processDirectory(svgDirectory);
