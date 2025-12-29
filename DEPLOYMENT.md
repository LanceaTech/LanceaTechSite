# 🚀 Quick Deployment Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)
- Netlify account (free tier works)

## Step-by-Step Deployment

### 1. Install Dependencies
```bash
cd lanceatech-app
npm install
```

### 2. Test Locally
```bash
npm run dev
```
Visit http://localhost:3000 to preview

### 3. Build for Production
```bash
npm run build
```
This creates an optimized `dist/` folder

### 4. Deploy to Netlify

#### Option A: Netlify CLI (Fastest)
```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Option B: GitHub + Netlify (Automatic)
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/lanceatech-website.git
git push -u origin main
```

Then on Netlify:
1. Click "New site from Git"
2. Choose GitHub
3. Select repository
4. Netlify auto-detects settings from `netlify.toml`
5. Click "Deploy"

#### Option C: Drag & Drop
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder
4. Site is live!

### 5. Custom Domain (Optional)
In Netlify dashboard:
1. Go to "Domain settings"
2. Add custom domain
3. Follow DNS configuration instructions

## 🎨 Customization Checklist

Before deployment, update:

- [ ] Company email in `src/pages/ContactPage.jsx`
- [ ] Phone number in `src/pages/ContactPage.jsx`
- [ ] Social media links in `src/components/Footer.jsx`
- [ ] Meta description in `index.html`
- [ ] Favicon (add to `/public` folder)
- [ ] Any placeholder content

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format, lazy loading
2. **Enable Compression**: Netlify does this automatically
3. **Add Analytics**: Google Analytics, Plausible, etc.
4. **Monitor Performance**: Use Lighthouse in Chrome DevTools

## 🔧 Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 18+)
- Clear cache: `rm -rf node_modules && npm install`

### Animations Laggy
- Reduce particle count in animation files
- Check GPU acceleration is enabled in browser

### Routing Issues
- Ensure `netlify.toml` has proper redirects
- Check that React Router is using `BrowserRouter`

## 📞 Need Help?

Check the main README.md for detailed documentation or contact info@lanceatech.com

---

Happy deploying! 🎉
