import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { toPascalCase } from '@wizardry/helpers';

function generateIconFiles({
  iconNodes,
  outputDirectory,
  template,
  showLog = true,
  iconFileExtension = '.js',
  separateIconFileExport = false,
  separateIconFileExportExtension,
  pretty = true,
}) {
  const icons = Object.keys(iconNodes);
  const iconsDistDirectory = path.join(outputDirectory, `icons`);

  if (!fs.existsSync(iconsDistDirectory)) {
    fs.mkdirSync(iconsDistDirectory);
  }

  const writeIconFiles = icons.map(async (iconName) => {
    const location = path.join(iconsDistDirectory, `${iconName}${iconFileExtension}`);
    const componentName = toPascalCase(iconName);

    let { children } = iconNodes[iconName];
    children = children.map(({ name, attributes }) => [name, attributes]);


    const elementTemplate = await template({
      componentName,
      iconName,
      children,
    });

    const output = pretty
      ? prettier.format(elementTemplate, {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 100,
          parser: 'babel',
        })
      : elementTemplate;

    await fs.promises.writeFile(location, output, 'utf-8');

    if (separateIconFileExport) {
      const output = `export { default } from "./${iconName}${iconFileExtension}";\n`;
      const location = path.join(
        iconsDistDirectory,
        `${iconName}${separateIconFileExportExtension ?? iconFileExtension}`,
      );

      await fs.promises.writeFile(location, output, 'utf-8');
    }
  });

  return Promise.all(writeIconFiles)
    .then(() => {
      if (showLog) {
        console.log('Successfully built', icons.length, 'icons.');
      }
    })
    .catch((error) => {
      throw new Error(`Something went wrong generating icon files,\n ${error}`);
    });
}

export default generateIconFiles;
