# 🪟 Windows Setup Guide

## Quick Start for Windows

### Step 1: Install Node.js
1. Download from https://nodejs.org/ (LTS version)
2. Run installer
3. Restart PowerShell/Command Prompt

### Step 2: Install Dependencies
```powershell
# In PowerShell or Command Prompt
cd E:\LANCEATECH\lanceatech-app
npm install
```

### Step 3: Start Development Server
```powershell
npm run dev
```

Open browser to: http://localhost:3000

### Step 4: Build for Production
```powershell
npm run build
```

The `dist/` folder is ready for deployment!

## Common Windows Issues

### Issue: "execution of scripts is disabled"
**Solution**: Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue: npm install fails
**Solution 1**: Clear cache
```powershell
npm cache clean --force
npm install
```

**Solution 2**: Delete and reinstall
```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

### Issue: Port 3000 already in use
**Solution**: Use different port
```powershell
# Edit package.json, change "dev" script to:
"dev": "vite --port 3001"
```

## Deployment from Windows

### Option 1: Netlify CLI
```powershell
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 2: Drag & Drop
```powershell
npm run build
# Upload dist\ folder to https://app.netlify.com/drop
```

### Option 3: GitHub Desktop
1. Download GitHub Desktop: https://desktop.github.com/
2. Create repository
3. Push code
4. Connect to Netlify

## File Paths (Windows)
- Use backslashes: `E:\LANCEATECH\lanceatech-app`
- Or forward slashes work too: `E:/LANCEATECH/lanceatech-app`

## Editor Setup (VS Code)
1. Install VS Code: https://code.visualstudio.com/
2. Install extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier

## Need Help?
Check README.md for full documentation!
