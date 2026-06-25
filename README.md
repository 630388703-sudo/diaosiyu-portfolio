# 刁思予个人作品集网站

一个使用 React + Vite + Tailwind CSS 制作的个人作品集首页与项目详情页，适合数字媒体艺术 / 交互设计方向。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端里显示的本地地址，通常是 `http://localhost:5173`。

## 打包

```bash
npm run build
```

打包结果会生成在 `dist` 文件夹。

## 预览打包结果

```bash
npm run serve
```

然后打开 `http://127.0.0.1:8018`。

## 部署到 Vercel

1. 把这个项目上传到 GitHub。
2. 打开 Vercel，选择 `Add New Project`。
3. 导入这个 GitHub 仓库。
4. Framework Preset 选择 `Vite`。
5. Build Command 使用 `npm run build`。
6. Output Directory 使用 `dist`。
7. 点击 Deploy。

## 内容修改位置

- 项目内容：`src/data/projects.js`
- 页面结构：`src/App.jsx`
- 视觉样式：`src/index.css`
