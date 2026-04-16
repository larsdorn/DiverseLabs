# SSD Create - Creative Technology Studio Website

A contemporary, immersive website for **SSD Create**, a creative technology studio based in Poblenou, Barcelona.

## 🎨 Design Philosophy

- **Contemporary & Visual**: Large bold typography, negative space, dark theme
- **Immersive Experience**: Full-screen sections with parallax effects
- **Multimedia-Focused**: Dynamic galleries with hover expansions
- **Sharp & Modern**: Square edges, creative personality, grid-based layouts
- **Performance**: Vanilla JavaScript with no frameworks

## 🏢 Company Overview

**SSD Create** is founded by:
- **Lars Dorn** - Founder & Creative Director
- **Liri Saikoski (4ri)** - Founder & Technology Lead

**Location**: Poblenou, Barcelona, Spain

### Services

1. **Visual Mapping** - Architectural projections and immersive light experiences
2. **Mobile Apps** - Consumer applications with gamification and AI integration
3. **Consultancy** - Portfolio development, CV optimization, professional photoshoots

## 📁 Project Structure

```
SSD-create/
├── index.html          # Main HTML file with all sections
├── styles.css          # Contemporary dark-theme CSS design
├── script.js           # Interactive features (parallax, animations)
├── package.json        # Project metadata
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local development server)

### Installation & Running

1. **Clone or download the project**
```bash
cd SSD-create
```

2. **Start the development server**
```bash
npm start
# or
python3 -m http.server 8000
```

3. **Open in browser**
Navigate to `http://localhost:8000`

## ✨ Features

### Hero Section
- Animated introduction with background video support
- Large, bold typography with gradient effects
- Smooth scroll indicator with animation

### Services Section
- Three-column layout (responsive)
- Image hover effects with zoom
- Cyan-highlighted headings
- Card elevation on hover

### Team Section
- Full-screen member profiles
- Image hover overlays with colored gradients
- Bio information with professional titles
- Smooth scale animations

### Portfolio Gallery
- Responsive grid layout
- Hover expansion effects
- Dark overlay on hover with project names
- Intelligent column spanning on desktop

### Location Section
- Two-column layout with image
- Bold, large typography highlighting Barcelona
- Immersive description text

### Contact Section
- Contact form with validation
- Social media links
- Direct contact information
- Cyan accent styling

## 🎯 Design Elements

### Color Scheme
```css
--primary-black: #0a0a0a
--primary-dark: #1a1a1a
--secondary-dark: #2a2a2a
--accent-white: #ffffff
--accent-gray: #e0e0e0
--accent-light-gray: #999999
--neon-cyan: #00ff88
--neon-pink: #ff006e
--neon-yellow: #ffbe0b
```

### Typography
- **Font**: Helvetica Neue, Arial, sans-serif
- **Weights**: Regular (400), Semi-Bold (600), Bold (900)
- **Sizes**: Responsive using `clamp()` for scalability

### Spacing
- Responsive padding/margins using viewport-relative units
- 2rem default spacing between sections
- Mobile-optimized breakpoints at 768px and 480px

## 🎬 Interactive Features

1. **Smooth Navigation** - Click navigation links for smooth scrolling
2. **Parallax Effects** - Subtle depth effects as you scroll
3. **Hover Animations** - Cards and items respond to interaction
4. **Portfolio Expansion** - Images expand on hover with smooth transitions
5. **Sticky Navigation** - Nav bar updates styling on scroll
6. **Form Validation** - Contact form with visual feedback
7. **Intersection Observer** - Elements animate in when they come into view

## 🔧 Customization

### Changing Images
Replace the placeholder image URLs in `index.html`:
```html
<img src="https://your-image-url.com/image.jpg" alt="Description">
```

### Adjusting Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --neon-cyan: #00ff88;
    --neon-pink: #ff006e;
    /* ... */
}
```

### Modifying Text
Update content directly in `index.html` sections

### Adding Videos
Replace the video source in the hero section:
```html
<video autoplay muted loop class="hero-video">
    <source src="your-video.mp4" type="video/mp4">
</video>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⚡ Performance

- Optimized animations using CSS transitions and transforms
- Lazy loading support for images
- Efficient JavaScript with throttled scroll events
- Minimal DOM manipulation
- No external dependencies

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎓 Learning Resources

This project demonstrates:
- Semantic HTML5
- Advanced CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- Vanilla JavaScript ES6+
- Intersection Observer API
- CSS animations and transitions

## 📄 License

MIT License - feel free to use this as a template for your own projects

## 👥 Credits

**Developed for**: SSD Create Creative Technology Studio  
**Founders**: Lars Dorn & Liri Saikoski (4ri)  
**Location**: Poblenou, Barcelona, Spain

---

**Ready to transform your creative vision into an immersive digital experience?**

Contact: hello@ssdcreate.com

