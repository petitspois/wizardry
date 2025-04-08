import path from 'path';
import {
  getCurrentDirPath,
  readSvgDirectory,
  readFile, // 新增读取文件函数
  writeFile,
} from '@wizardry/helpers';

const currentDir = getCurrentDirPath(import.meta.url);
const ICONS_DIR = path.resolve(currentDir, '../icons');

const svgFiles = await readSvgDirectory(ICONS_DIR);

// 读取现有的 data.json 文件
const dataFilePath = path.resolve(currentDir, '../data.json');
let existingData = [];
try {
  const dataContent = await readFile(dataFilePath);
  console.log(dataContent);
  
  existingData = JSON.parse(dataContent);
} catch (error) {
  // 如果文件不存在或读取失败，使用空数组
  existingData = [];
}

// 生成符合 data.schema.json 结构的数据
const data = svgFiles.map((svgFile) => {
  const iconName = svgFile.split('.')[0];
  // 检查现有数据中是否存在该 name
  
  const existingItem = existingData.find(item => item.name === iconName);
  if (existingItem) {
    return existingItem;
  }
  return {
    name: iconName,
    categories: [],
    tags: [],
  };
});

// 将生成的数据写入 data.json 文件
const newDataContent = JSON.stringify(data, null, 2);
writeFile(newDataContent, 'data.json', path.resolve(currentDir, '..'));
