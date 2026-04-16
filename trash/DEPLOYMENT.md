# Deployment Guide for SSD Create Website

This static HTML/CSS/JavaScript website can be deployed to various platforms. Here are the best options:

## 🚀 Quick Deployment Options

### 1. **Netlify** (Recommended - Free & Easy)

**Easiest method:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure:
   - Build command: (leave empty for static site)
   - Publish directory: (leave empty or use `.`)
6. Deploy!

**Or drag & drop:**
1. Zip your project folder
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag and drop the zip file
4. Instant deploy!

### 2. **Vercel** (Free & Fast)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Your site is live!

### 3. **GitHub Pages** (Free)

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select main branch
4. Click Save
5. Your site will be at `https://yourusername.github.io/SSD-create`

### 4. **Traditional Web Host** (cPanel)

1. Upload all files via FTP:
   - index.html
   - styles.css
   - script.js
   - package.json
   - README.md

2. No build process needed - it's all static files!

## 🎨 Pre-Deployment Checklist

- [ ] Replace placeholder images with real project images
- [ ] Update team member names and bios
- [ ] Update contact information
- [ ] Replace placeholder video with company video
- [ ] Update social media links
- [ ] Test all interactive features
- [ ] Test on mobile devices
- [ ] Update meta tags in index.html
- [ ] Add favicon

## 🔧 Environment-Specific Setup

### Add Favicon
Add this to the `<head>` section of index.html:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Update Meta Tags
Edit the meta tags in index.html:
```html
<meta name="description" content="SSD Create - Creative Technology Studio">
<meta name="keywords" content="creative technology, visual mapping, mobile apps">
<meta name="author" content="Lars Dorn & Liri Saikoski">
<meta property="og:title" content="SSD Create - Creative Technology Studio">
<meta property="og:description" content="Visual Mapping, Mobile Apps, Consultancy">
<meta property="og:image" content="https://your-domain.com/og-image.jpg">
<meta property="og:url" content="https://your-domain.com">
```

## 📊 Performance Optimization

### Image Optimization
1. Compress images before uploading
2. Use modern formats (WebP with fallbacks)
3. Lazy load images for better performance

**Tools:**
- TinyPNG: https://tinypng.com
- ImageOptim: https://imageoptim.com
- Squoosh: https://squoosh.app

### Add CDN for Images (Optional)
Use a service like Cloudinary or Imgix for image delivery:
```html
<img src="https://yourimagecdn.com/image.jpg" alt="Description">
```

## 🔐 Security Best Practices

1. **Keep contact form secure** - Don't post directly to email
   - Use a service like Formspree or Basin
   - Or set up backend at your domain

2. **Example: Using Formspree**
   Update the form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

3. **HTTPS** - Ensure your host provides SSL/TLS
   - Netlify, Vercel, GitHub Pages include free HTTPS
   - Most hosts offer free Let's Encrypt certificates

## 📱 Domain Setup

### Option 1: Using Provided Subdomain
- Netlify: `ssdcreate.netlify.app`
- Vercel: `ssdcreate.vercel.app`
- GitHub Pages: `username.github.io/SSD-create`

### Option 2: Custom Domain
1. Register domain (GoDaddy, Namecheap, etc.)
2. Update DNS settings to point to your host
3. In Netlify/Vercel, add custom domain
4. Wait for DNS propagation (up to 48 hours)

**Example DNS Records:**
```
Type: CNAME
Name: www
Value: your-netlify-site.netlify.app
```

## 🎯 Advanced Deployment

### Using Docker (For Custom Hosting)
Create `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY .. /usr/share/nginx/html
EXPOSE 80
```

### GitHub Actions (Auto Deploy)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🐛 Troubleshooting

### Images Not Loading
- Check image URLs are correct
- Ensure images exist in the right directory
- Use absolute URLs if relative paths fail

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is in same directory
- Verify file names match exactly (case-sensitive)

### JavaScript Not Working
- Open browser DevTools (F12)
- Check Console for errors
- Verify script.js is loading
- Check for ad blockers interfering

### Form Not Submitting
- Update form action to Formspree or similar
- Check input names and types
- Verify JavaScript is enabled

## 📈 Post-Deployment

1. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Monitor with GTmetrix
   - Check Core Web Vitals

2. **Analytics Setup**
   - Add Google Analytics
   - Monitor visitor behavior
   - Track conversions

3. **SEO Optimization**
   - Submit sitemap.xml to Google Search Console
   - Add structured data (schema.org)
   - Optimize images with alt text

4. **Regular Maintenance**
   - Update contact information
   - Refresh portfolio projects
   - Monitor for broken links
   - Keep dependencies updated

## 📞 Support

For hosting-specific questions:
- **Netlify Support**: support@netlify.com
- **Vercel Support**: support@vercel.com
- **GitHub Support**: support.github.com

---

**You're ready to launch! Choose your hosting platform and get your creative studio online.** 🎉

