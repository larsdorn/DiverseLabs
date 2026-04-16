# Assets Organization Guide

## 📂 Recommended Folder Structure

```
SSD-create/
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   │   └── bg-video-poster.jpg
│   │   ├── services/
│   │   │   ├── visual-mapping.jpg
│   │   │   ├── mobile-apps.jpg
│   │   │   └── consultancy.jpg
│   │   ├── team/
│   │   │   ├── lars-dorn.jpg
│   │   │   └── liri-saikoski.jpg
│   │   ├── portfolio/
│   │   │   ├── project-1.jpg
│   │   │   ├── project-2.jpg
│   │   │   ├── project-3.jpg
│   │   │   └── project-4.jpg
│   │   ├── location/
│   │   │   └── poblenou-barcelona.jpg
│   │   └── social/
│   │       └── og-image.jpg
│   ├── videos/
│   │   ├── hero-background.mp4
│   │   └── hero-background.webm
│   └── icons/
│       └── favicon.ico
├── index.html
├── styles.css
├── script.js
├── package.json
└── README.md
```

## 📸 Image Specifications

### Hero Section
- **Video Poster**: 1920×1080px, JPG/PNG
- **Video File**: MP4 (H.264), WebM for fallback
- **File Size**: Keep under 5MB for video

### Services Section
- **Images**: 800×600px minimum
- **Format**: JPG or WebP
- **Aspect Ratio**: 4:3
- **File Size**: 200-400KB each

### Team Section
- **Member Photos**: 500×600px
- **Format**: JPG (portrait orientation)
- **Style**: Professional headshots
- **File Size**: 150-250KB each

### Portfolio Section
- **Images**: 600×400px minimum
- **Format**: JPG or WebP
- **Aspect Ratio**: 3:2
- **File Size**: 150-300KB each

### Location Section
- **Image**: 800×600px
- **Format**: JPG or WebP
- **Subject**: Barcelona/Poblenou landmark
- **File Size**: 200-400KB

## 🎬 Video Files

### Hero Background Video
**Recommended specs:**
- Duration: 8-15 seconds (looping)
- Resolution: 1920×1080 or 1280×720
- Format: MP4 (H.264) + WebM fallback
- File Size: 3-5MB for 15s video
- Frame Rate: 24-30 fps

**Tools for conversion:**
- FFmpeg (command line)
- HandBrake (GUI)
- Cloudinary (online)

**Sample FFmpeg command:**
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -acodec aac output.mp4
```

## 🗂️ How to Organize Your Files

### Step 1: Create Folders
```bash
mkdir -p assets/images/{hero,services,team,portfolio,location,social}
mkdir -p assets/videos
mkdir -p assets/icons
```

### Step 2: Add Your Media Files
Place your files in the corresponding folders.

### Step 3: Update HTML References

**Change placeholder image URLs to local paths:**

From:
```html
<img src="https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=800" alt="Visual Mapping">
```

To:
```html
<img src="assets/images/services/visual-mapping.jpg" alt="Visual Mapping">
```

**Update video source:**
```html
<video autoplay muted loop class="hero-video">
    <source src="assets/videos/hero-background.mp4" type="video/mp4">
    <source src="assets/videos/hero-background.webm" type="video/webm">
</video>
```

## 🎨 Image Optimization Before Upload

### Using Squoosh (Online - easiest)
1. Go to [squoosh.app](https://squoosh.app)
2. Drag and drop your image
3. Choose WebP format for best compression
4. Download optimized version

### Using ImageMagick (Command line)
```bash
# Resize and compress
convert input.jpg -resize 1920x1080 -quality 85 output.jpg

# Convert to WebP
convert input.jpg -quality 85 output.webp
```

### Using GraphicsMagick
```bash
gm convert input.jpg -resize 1920x1080 -quality 85 output.jpg
```

## 🎥 Video Optimization

### FFmpeg for Video Compression
```bash
# Compress MP4
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset slow -acodec aac output.mp4

# Create WebM fallback
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
```

### Online Tools
- **Cloudinary**: Free video optimization
- **Handbrake**: GUI video converter
- **Video.io**: Batch conversion

## 💡 File Naming Conventions

**Keep it simple and descriptive:**

Good:
- `lars-dorn-profile.jpg`
- `visual-mapping-projection.jpg`
- `portfolio-project-1.jpg`
- `poblenou-barcelona.jpg`

Avoid:
- `photo1.jpg`
- `IMG_2024.jpg`
- `Untitled.jpg`

## 📊 Image Quality Checklist

- [ ] Images are compressed (< 400KB each)
- [ ] Dimensions match specifications
- [ ] File formats are Web-friendly (JPG, WebP, PNG)
- [ ] All images have descriptive alt text
- [ ] No copyright issues
- [ ] Professional quality (matching studio aesthetic)

## 🚀 Deployment Tips

### When Deploying with Netlify/Vercel:

1. Make sure all image paths are **relative** to root:
   ```html
   <!-- Good -->
   <img src="assets/images/team/lars.jpg" alt="Lars Dorn">
   
   <!-- Bad -->
   <img src="/Users/dorn/..../lars.jpg" alt="Lars Dorn">
   ```

2. Include all folders in your git repository:
   ```bash
   git add assets/
   git commit -m "Add project assets"
   ```

3. Large video files? Consider using CDN:
   - Cloudinary
   - Bunny CDN
   - AWS CloudFront

## 📱 Mobile Optimization

Serve different image sizes based on device:

```html
<picture>
    <source media="(max-width: 768px)" srcset="assets/images/team/lars-small.jpg">
    <source media="(min-width: 769px)" srcset="assets/images/team/lars.jpg">
    <img src="assets/images/team/lars.jpg" alt="Lars Dorn">
</picture>
```

## 🎯 Performance Targets

After optimization:
- Homepage load time: < 3 seconds
- Image load time: < 1 second each
- Video load time: < 2 seconds
- Total page size: < 5MB

Use tools to measure:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

---

**Ready to add your creative work? Start by creating the assets folder structure and adding your files!** 🎨

