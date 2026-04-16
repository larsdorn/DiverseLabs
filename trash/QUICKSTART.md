# 🚀 Quick Start Guide - SSD Create Website

Welcome! Here's how to get up and running with your new SSD Create website.

## ⚡ 30-Second Setup

1. **Open the website locally**
   ```bash
   cd /Users/dorn/WebstormProjects/SSD-create
   python3 -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Make your first edit**
   - Open `index.html` in your editor
   - Change any text (like the company name)
   - Refresh your browser to see changes

3. **Replace images**
   - Create folder: `assets/images/`
   - Add your images
   - Update image paths in `index.html`

## 🎯 What You Have

✅ **Complete modern website** with:
- Dark theme with cyan/neon accents
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and hover effects
- Team showcase section
- Portfolio gallery
- Contact form
- Services showcase
- Location information

✅ **No dependencies** - pure HTML/CSS/JavaScript

✅ **Production ready** - just add your content and images

## 🖼️ Where to Add Your Content

### Images to Replace

| Section | File Location in HTML | Suggested Size |
|---------|----------------------|-----------------|
| Services | `<img>` tags in Services Grid | 800×600px |
| Team Members | `<img>` tags in Team Gallery | 500×600px |
| Portfolio | `<img>` tags in Portfolio Grid | 600×400px |
| Location | Location section image | 800×600px |

### Text to Update

**In `index.html`:**

1. **Services** (line ~90-110)
   ```html
   <h3>VISUAL MAPPING</h3>
   <p>Update this description...</p>
   ```

2. **Team Members** (line ~130-170)
   ```html
   <h3>LARS DORN</h3>
   <p>Update title and bio...</p>
   ```

3. **Contact Info** (line ~220-240)
   ```html
   <strong>Email:</strong> hello@ssdcreate.com
   <strong>Phone:</strong> +34 93 123 4567
   ```

## 🎨 Customizing Colors

Edit `styles.css` (line 10-20):

```css
:root {
    --neon-cyan: #00ff88;  /* Change this color */
    --neon-pink: #ff006e;  /* And this one */
    /* ... other colors ... */
}
```

Try these color combinations:
- Cyan + Pink (current)
- Gold + Purple
- Green + Orange
- Blue + Yellow

## 📹 Adding Your Background Video

1. Find or create a video (8-15 seconds)
2. Save as `assets/videos/hero-background.mp4`
3. Update in `index.html` (line ~60):
   ```html
   <source src="assets/videos/hero-background.mp4" type="video/mp4">
   ```

## 🔗 Linking Social Media

In `index.html` contact section (~250), update links:

```html
<a href="https://instagram.com/ssdcreate" class="social-link">Instagram</a>
<a href="https://linkedin.com/company/ssdcreate" class="social-link">LinkedIn</a>
<a href="https://twitter.com/ssdcreate" class="social-link">Twitter</a>
```

## 📱 Testing on Phone

1. Find your computer's IP address:
   ```bash
   ipconfig getifaddr en0
   ```

2. From phone on same WiFi, visit:
   ```
   http://YOUR_IP:8000
   ```

## 🚢 Going Live

### Quickest (5 minutes):

**Netlify Drop** (drag & drop):
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag your folder
3. Done! You have a live URL

### Easy (10 minutes):

**Netlify from Git**:
1. Push code to GitHub
2. Connect GitHub to Netlify
3. Auto-deploys on every push

See `DEPLOYMENT.md` for detailed instructions.

## 🆘 Common Issues & Fixes

### Images Not Showing?
```bash
# Make sure image path is correct relative to index.html
# ✅ assets/images/team/lars.jpg
# ❌ /Users/dorn/assets/images/team/lars.jpg
```

### Styles Broken?
```bash
# Hard refresh your browser
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
```

### Form Not Working?
- Contact form is for styling only
- Before deploying, add Formspree:
  1. Sign up at formspree.io
  2. Create form and get form ID
  3. Update form action in HTML

## 📚 File Guide

| File | Purpose | Edit When... |
|------|---------|--------------|
| `index.html` | Website content | You want to change text/sections |
| `styles.css` | Design & colors | You want to change how it looks |
| `script.js` | Animations & interactivity | You want to add/remove features |
| `package.json` | Project metadata | Publishing/version updates |
| `README.md` | Documentation | You want to share info |

## 🎬 Features Included

### Navigation
- Sticky navigation bar
- Smooth scrolling
- Highlight links on hover

### Hero Section
- Animated title with gradient
- Background video support
- Scroll indicator

### Services
- 3-column layout
- Hover card effects
- Image zoom on hover

### Team
- Full-screen member profiles
- Professional image overlays
- Scale animation on hover

### Portfolio
- Responsive grid
- Hover expansion
- Project overlays

### Contact
- Form validation
- Social links
- Contact information

## 💡 Pro Tips

1. **Keep it updated** - Update portfolio regularly
2. **Fast images** - Compress before adding
3. **Consistent branding** - Use same colors/fonts
4. **Mobile first** - Always test on phone
5. **Performance** - Aim for < 3 second load time

## 🔧 Browser DevTools

Press `F12` to open developer tools:

- **Elements** - Inspect HTML
- **Console** - See JavaScript errors
- **Network** - Check image loading
- **Mobile** - Test responsive design (Ctrl/Cmd + Shift + M)

## 📖 Learning Resources

Want to customize more? Learn:

- **HTML**: [MDN HTML Guide](https://developer.mozilla.org/docs/Web/HTML)
- **CSS**: [CSS-Tricks](https://css-tricks.com)
- **JavaScript**: [MDN JS Guide](https://developer.mozilla.org/docs/Web/JavaScript)

## 📞 Next Steps

1. [ ] Add your images
2. [ ] Update team member info
3. [ ] Change contact details
4. [ ] Add video to hero section
5. [ ] Customize colors if desired
6. [ ] Test on mobile
7. [ ] Deploy to Netlify/Vercel
8. [ ] Configure custom domain
9. [ ] Add Google Analytics
10. [ ] Celebrate launch! 🎉

---

**Need more detailed help?**
- See `README.md` for full documentation
- See `DEPLOYMENT.md` for hosting options
- See `ASSETS.md` for image optimization tips

**Happy building!** ✨

