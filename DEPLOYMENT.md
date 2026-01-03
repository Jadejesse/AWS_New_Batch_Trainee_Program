# 🚀 AWS Training Platform - GitHub Pages Deployment Guide

## ✅ Prerequisites Completed
- ✓ Git repository initialized
- ✓ gh-pages package installed
- ✓ package.json configured with deploy scripts
- ✓ vite.config.ts prepared for GitHub Pages

## 📋 Step-by-Step Deployment Instructions

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "aws-training-platform")
3. **DO NOT** initialize with README, .gitignore, or license
4. Copy the repository URL

### Step 2: Update Configuration Files
Before pushing, update these placeholders in your files:

**In `package.json`:**
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```
Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your repository name.

**In `vite.config.ts`:**
```typescript
base: '/YOUR_REPO_NAME/'
```
Replace `YOUR_REPO_NAME` with your repository name.

### Step 3: Push to GitHub
Run these commands in your terminal:

```bash
# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin master
```

### Step 4: Deploy to GitHub Pages
After pushing to GitHub, deploy your site:

```bash
npm run deploy
```

This command will:
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: `gh-pages`
4. Click **Save**

### Step 6: Access Your Site
After 2-3 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 🔄 Updating Your Site
Whenever you make changes:

```bash
# Commit your changes
git add .
git commit -m "Your commit message"
git push

# Deploy to GitHub Pages
npm run deploy
```

## 🎯 Quick Reference Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🌟 Features Included
- ✨ Mouse particle effects
- 🎵 Lo-Fi music player
- 🌤️ Weather widget
- 📍 Location display
- 🎨 Cyberpunk loading animations
- 🎮 Konami code easter egg
- 🖼️ Avatar toggle functionality
- 📱 Responsive design

## 🐛 Troubleshooting

**Issue: Blank page after deployment**
- Check that `base` in `vite.config.ts` matches your repository name
- Ensure `homepage` in `package.json` is correct

**Issue: 404 errors for assets**
- Verify the `base` path includes leading and trailing slashes: `/repo-name/`

**Issue: Changes not showing**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub Pages to update

## 📞 Support
If you encounter issues, check:
- GitHub Actions tab for build errors
- Browser console for JavaScript errors
- GitHub Pages settings are correctly configured

## ✨ Done!
Your AWS Training Platform is now live on GitHub Pages!
