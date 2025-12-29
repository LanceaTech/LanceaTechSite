# LanceaTech Website

A modern, production-ready React website with advanced 3D animations built with Vite, Three.js, and Framer Motion.

## 🚀 Features

- **Advanced 3D Animations**: Three.js powered scenes for each service
- **Smooth Page Transitions**: Framer Motion for fluid animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Code splitting and lazy loading
- **SEO Ready**: Meta tags and semantic HTML
- **Production Ready**: Optimized build for Netlify deployment

## 📦 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + Three.js + React Three Fiber
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
lanceatech-app/
├── public/              # Static assets
├── src/
│   ├── animations/      # Three.js animation components
│   │   ├── SpearScene.jsx
│   │   ├── NeuralNetworkScene.jsx
│   │   ├── CircuitBoardScene.jsx
│   │   └── CodeMatrixScene.jsx
│   ├── components/      # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── MLAIPage.jsx
│   │   ├── FullStackPage.jsx
│   │   ├── FirmwarePage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── netlify.toml         # Netlify configuration
└── package.json
```

## 🌐 Deployment to Netlify

### Method 1: Netlify CLI (Recommended)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Deploy to production
netlify deploy --prod
```

### Method 2: Git Integration

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/lanceatech-website.git
git push -u origin main
```

2. Connect to Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"

### Method 3: Drag & Drop

```bash
# Build the project
npm run build

# The dist/ folder is ready to be dropped into Netlify's drag & drop interface
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  dark: '#1A1F2E',      // Main background
  primary: '#2B4C7E',   // Steel blue
  accent: '#00D9FF',    // Electric cyan
  silver: '#E8EEF2',    // Light text
}
```

### Fonts
Update Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Content
- Replace placeholder contact information in `ContactPage.jsx`
- Update company details in `Footer.jsx`
- Add real project data in service pages

## 🎬 Animation Performance

The site uses optimized Three.js scenes:
- **Particle count**: Adjustable in animation components
- **Frame rate target**: 60 FPS
- **Lazy loading**: Animations load on viewport intersection
- **GPU acceleration**: Leverages WebGL for smooth performance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers with WebGL support

## 🔧 Environment Variables

Create `.env` file for custom configuration:
```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=info@lanceatech.com
```

## 📄 License

Copyright © 2024 LanceaTech. All rights reserved.

## 🤝 Support

For issues or questions:
- Email: info@lanceatech.com
- Create an issue on GitHub

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholder text and images
2. **Setup Analytics**: Add Google Analytics or similar
3. **Form Integration**: Connect contact form to backend/email service
4. **SEO Optimization**: Add meta descriptions and structured data
5. **Performance Testing**: Run Lighthouse audits
6. **Custom Domain**: Configure your domain in Netlify

---

Built with ❤️ by LanceaTech - Spearheading Innovation
