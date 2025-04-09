import path from 'path';
import { readFile, writeFile, getCurrentDirPath } from '@wizardry/helpers';

const currentDir = getCurrentDirPath(import.meta.url);

const DATA_PATH = path.resolve(currentDir, '../apps/web/data.json');
const OUTPUT_DIR = path.resolve(currentDir, '../apps/web');

// 读取并处理分类数据
const processCategories = async () => {
  try {
    const jsonData = await readFile(DATA_PATH);

    const icons = JSON.parse(jsonData);
    // 提取并去重分类
    const categories = [
      ...new Set(icons.flatMap(icon => icon.categories))
    ].sort();

    const formattedCategories = categories.map(category => {
      const normalized = category.toLowerCase();
      return {
        label: normalized.charAt(0).toUpperCase() + normalized.slice(1),
        value: normalized
      };
    });

    // 生成 TypeScript 文件内容
    const tsContent = `export const CATEGORIES = ${JSON.stringify(formattedCategories, null, 2)} as const;\n`;
    await writeFile(tsContent, 'categories.ts', OUTPUT_DIR);
    console.log('Categories generated successfully');
  } catch (error) {
    console.error('Error processing categories:', error);
  }
};

processCategories();
