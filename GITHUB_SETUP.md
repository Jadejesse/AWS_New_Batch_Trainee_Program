# 🚀 Quick Start: Push to GitHub & Deploy

## ⚡ Fast Track (3 Steps)

### 1️⃣ Create GitHub Repository
Go to: https://github.com/new
- Repository name: `aws-training-platform` (or your choice)
- Keep it **public**
- **DO NOT** check any initialization options
- Click "Create repository"

### 2️⃣ Update Your Configuration
Open these files and replace the placeholders:

**`package.json`** - Line 5:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

**`vite.config.ts`** - Line 5:
```typescript
base: '/YOUR_REPO_NAME/'
```

Example: If your username is `john` and repo is `aws-training-platform`:
- `"homepage": "https://john.github.io/aws-training-platform"`
- `base: '/aws-training-platform/'`

### 3️⃣ Run These Commands
```bash
# Add your GitHub repository (replace with YOUR URL from GitHub)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin master

# Deploy to GitHub Pages
npm run deploy
```

## 🎉 That's It!

After 2-3 minutes, visit:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 📝 Example Complete Workflow

If your GitHub username is `jade123` and you named the repo `aws-platform`:

1. **Update `package.json`:**
   ```json
   "homepage": "https://jade123.github.io/aws-platform"
   ```

2. **Update `vite.config.ts`:**
   ```typescript
   base: '/aws-platform/'
   ```

3. **Run commands:**
   ```bash
   git remote add origin https://github.com/jade123/aws-platform.git
   git push -u origin master
   npm run deploy
   ```

4. **Visit:** https://jade123.github.io/aws-platform/

## 🔄 Future Updates

Whenever you make changes:
```bash
git add .
git commit -m "Your changes description"
git push
npm run deploy
```

## ✅ Current Status
- ✓ Git repository initialized
- ✓ All files committed
- ✓ gh-pages package installed
- ✓ Deploy scripts configured
- ⏳ Waiting for: GitHub repository creation & remote setup

## 🆘 Need Help?
See `DEPLOYMENT.md` for detailed troubleshooting and full documentation.
