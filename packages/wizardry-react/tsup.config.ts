import { defineConfig } from 'tsup';

export default defineConfig({
  // 入口文件
  entry: ['src/wizardry-react.ts'],
  outDir: 'dist',
  // 打包输出的格式
  format: ['esm', 'cjs'],
  // 生成对应的类型声明文件
  dts: true,
  // 清除之前的打包结果
  clean: true,
  // 启用 sourcemap
  sourcemap: true,
  external: ['react','react-dom'], 
  // 开启 minify 压缩代码
  minify: true,
});