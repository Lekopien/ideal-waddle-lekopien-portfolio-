# Deployment Guide

This document provides step-by-step instructions for deploying the Lekopien Portfolio to various platforms.

## Prerequisites

Before deploying, ensure you have:
- Node.js 16+ installed
- Git installed
- A GitHub account
- Code committed to a GitHub repository

## GitHub Setup

1. **Create a GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Make initial commit
   git commit -m "Initial commit: Personality-driven portfolio"
   
   # Add GitHub remote (replace with your repository URL)
   git remote add origin https://github.com/yourusername/lekopien-portfolio.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

## Vercel Deployment

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From the project root
   vercel
   
   # Follow the prompts:
   # - Set up and deploy? Yes
   # - Which scope? (select your account)
   # - Link to existing project? No
   # - Project name? lekopien-portfolio (or your preferred name)
   # - Directory? ./ (current directory)
   # - Override build command? No
   # - Override output directory? No
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Connect your GitHub account
4. Select your `lekopien-portfolio` repository
5. Configure build settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Click "Deploy"

## Netlify Deployment

### Option 1: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   netlify deploy --dir=build --prod
   ```

### Option 2: Netlify Dashboard

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Click "Deploy site"

## GitHub Pages Deployment

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these fields to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/lekopien-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Your site will be available at `https://yourusername.github.io/lekopien-portfolio`

## Environment Variables

If you need environment variables for production:

### Vercel
```bash
# Set environment variables via CLI
vercel env add

# Or add them in the Vercel dashboard under Settings > Environment Variables
```

### Netlify
```bash
# Set environment variables via CLI
netlify env:set REACT_APP_API_URL "https://api.example.com"

# Or add them in the Netlify dashboard under Site settings > Environment variables
```

## Custom Domain Setup

### Vercel
1. In your Vercel dashboard, go to your project
2. Navigate to Settings > Domains
3. Add your custom domain
4. Configure DNS records as instructed

### Netlify
1. In your Netlify dashboard, go to your site
2. Navigate to Site settings > Domain management
3. Add custom domain
4. Configure DNS records as instructed

## Build Optimization

For better performance, consider:

1. **Bundle Analysis**
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

2. **PWA Features** (Optional)
   - Enable service worker in `src/index.js`
   - Add manifest.json customization
   - Implement offline functionality

## Monitoring & Analytics

Consider adding:
- Google Analytics or similar
- Error tracking (Sentry)
- Performance monitoring (Vercel Analytics, Netlify Analytics)

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version compatibility
   - Ensure all dependencies are installed
   - Check for TypeScript/ESLint errors

2. **Routing Issues (404 on refresh)**
   - Verify redirect rules in `vercel.json` or `_redirects` file
   - Ensure history fallback is configured

3. **Environment Variables Not Working**
   - Ensure variables start with `REACT_APP_`
   - Check deployment platform's environment variable settings

### Getting Help

- Check deployment platform documentation
- Review build logs for specific error messages
- Test locally with `npm run build && npx serve -s build`

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Pushes to `main` branch trigger production deployments
- Pull requests create preview deployments
- Configure branch protection and deployment rules as needed

---

🎉 **Your personality-driven portfolio is now ready for the world!** 🎉
