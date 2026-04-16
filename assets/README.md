# Assets Directory Guide

This folder contains all media assets for the SSD Create website.

## Structure

```
assets/
├── images/
│   ├── team/              # Team member photos (500×600px)
│   │   ├── lars-dorn.jpg
│   │   └── liri-saikoski.jpg
│   ├── services/          # Service section images (800×600px)
│   │   ├── visual-mapping.jpg
│   │   ├── mobile-apps.jpg
│   │   ├── games.jpg
│   │   └── consultancy.jpg
│   ├── portfolio/         # Portfolio project images (600×400px)
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   └── project-4.jpg
│   └── location/          # Location section images (800×600px)
│       └── poblenou.jpg
└── videos/
    └── hero-background.mp4  # Hero section background (3-5MB, 1920×1080px)
```

## Image Specifications

### Team Images
- **Dimensions:** 500×600px (minimum)
- **Format:** JPG or PNG
- **Quality:** High resolution, professional headshots
- **Files:**
  - `team/lars-dorn.jpg` - Lars Dorn's professional photo
  - `team/liri-saikoski.jpg` - Liri Saikoski's professional photo

### Service Images
- **Dimensions:** 800×600px
- **Format:** JPG
- **Quality:** Optimized for web (~100-150KB per image)
- **Files:**
  - `services/visual-mapping.jpg` - Visual Mapping service image
  - `services/mobile-apps.jpg` - Mobile Apps service image
  - `services/games.jpg` - Games & Serious Games image
  - `services/consultancy.jpg` - Consultancy service image

### Portfolio Images
- **Dimensions:** 600×400px
- **Format:** JPG
- **Quality:** Portfolio project screenshots or portfolio pieces (~80-120KB each)
- **Files:**
  - `portfolio/project-1.jpg`
  - `portfolio/project-2.jpg`
  - `portfolio/project-3.jpg`
  - `portfolio/project-4.jpg`

### Location Image
- **Dimensions:** 800×600px
- **Format:** JPG
- **Quality:** Barcelona/Poblenou location image (~100-150KB)
- **Files:**
  - `location/poblenou.jpg`

### Hero Video
- **Dimensions:** 1920×1080px (Full HD)
- **Format:** MP4 (H.264)
- **Duration:** 10-30 seconds (looping)
- **File Size:** 3-5MB
- **Settings:** Autoplay, muted, loop
- **File:** `videos/hero-background.mp4`

## Image Optimization Tips

### Using ImageOptim (macOS)
1. Drag images into ImageOptim
2. Choose quality settings (usually "Medium" is fine)
3. Save optimized versions back to assets folder

### Using TinyPNG
1. Go to https://tinypng.com
2. Upload images
3. Download optimized versions
4. Save to appropriate assets folder

### Using Online Tools
- **Unsplash & Pexels:** Free stock photos
- **CloudConvert:** Format conversion (e.g., HEIC → JPG)
- **FFmpeg:** Video encoding (command line)
  ```bash
  ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac output.mp4
  ```

## File Size Guidelines

| Type | Target Size | Max Size |
|------|------------|----------|
| Team Photo | 150-250KB | 500KB |
| Service Image | 100-150KB | 300KB |
| Portfolio Image | 80-120KB | 250KB |
| Location Image | 100-150KB | 300KB |
| Hero Video | 3-5MB | 8MB |

## Current Status

The website currently uses Unsplash placeholder images. Replace these assets with actual company images before launching.

### Placeholder URLs (to be replaced)
- `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d` → `assets/images/team/lars-dorn.jpg`
- `https://images.unsplash.com/photo-1494790108377-be9c29b29330` → `assets/images/team/liri-saikoski.jpg`
- Visual Mapping, Mobile Apps, Games, Consultancy images → respective service images
- Portfolio images → actual project images

## Usage in HTML

### Image Example
```html
<img src="assets/images/team/lars-dorn.jpg" alt="Lars Dorn">
```

### Video Example
```html
<video autoplay muted loop>
  <source src="assets/videos/hero-background.mp4" type="video/mp4">
</video>
```

## Contributing

When adding new assets:
1. Ensure correct dimensions and format
2. Optimize file size before adding
3. Place in appropriate subfolder
4. Update HTML src attributes
5. Test in browser at http://localhost:8001

## Support

For questions about image specifications, see:
- `ASSETS.md` - Detailed asset guide
- `START_HERE.md` - Quick start guide
- `index.html` - Check exact line numbers for asset paths

