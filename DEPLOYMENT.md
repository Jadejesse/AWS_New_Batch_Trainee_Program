# 🚀 AWS Training Platform - GitHub Pages 部署指南

## 📦 部署到 GitHub Pages

### 1. 安装 gh-pages 包
```bash
npm install --save-dev gh-pages
```

### 2. 更新 package.json
在 `package.json` 中添加以下内容：

```json
{
  "homepage": "https://你的用户名.github.io/仓库名",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. 更新 vite.config.ts
确保 `base` 配置正确：

```typescript
export default defineConfig({
  base: '/仓库名/',  // 替换为你的仓库名
  plugins: [react()],
})
```

### 4. 部署命令
```bash
npm run deploy
```

## 🌐 访问网站
部署成功后，访问：
```
https://你的用户名.github.io/仓库名/
```

## 📝 注意事项
- 确保 GitHub 仓库设置中启用了 GitHub Pages
- 选择 `gh-pages` 分支作为源
- 首次部署可能需要几分钟才能生效

## 🔄 更新网站
每次修改代码后，运行：
```bash
npm run deploy
```

## ✨ 完成！
你的 AWS Training Platform 现在已经在线了！
