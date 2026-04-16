# ⚡ QUICK START CARD

**Your website is LIVE at:** http://localhost:8001  
**Status:** ✅ Running and Ready to Customize

---

## 🎯 What To Do Next (In This Order)

### ✏️ PHASE 1: ADD YOUR IMAGES

#### Step 1: Team Photos (Most Important!)
```
1. Prepare 2 professional photos:
   - lars-dorn.jpg (500×600px)
   - liri-saikoski.jpg (500×600px)

2. Save to:
   assets/images/team/

3. Edit index.html:
   - Line 120: Update Lars image path
   - Line 130: Update Liri image path
   
4. Refresh browser → images appear!
```

#### Step 2: Service Photos
```
1. Prepare 4 service images (800×600px):
   - visual-mapping.jpg
   - mobile-apps.jpg
   - games.jpg
   - consultancy.jpg

2. Save to: assets/images/services/

3. Edit index.html lines:
   - Line 53: Visual Mapping
   - Line 62: Mobile Apps
   - Line 71: Games
   - Line 80: Consultancy
```

#### Step 3: Portfolio Photos
```
1. Prepare 4 project images (600×400px):
   - project-1.jpg through project-4.jpg

2. Save to: assets/images/portfolio/

3. Edit index.html lines 184, 190, 196, 202
```

#### Step 4: Location Photo
```
1. Add Barcelona photo (800×600px):
   - poblenou.jpg

2. Save to: assets/images/location/

3. Edit index.html line 230
```

#### Step 5: Hero Video (Optional)
```
1. Add background video (1920×1080px):
   - hero-background.mp4 (3-5MB, MP4 format)

2. Save to: assets/videos/

3. Edit index.html line 30
```

---

## 🔄 The Update Cycle

1. **Prepare asset** (image or video file)
2. **Save to correct folder** in `assets/`
3. **Update HTML** with new file path
4. **Refresh browser** at http://localhost:8001
5. **Check browser console** (F12) for any errors
6. **Done!** Repeat for next asset

---

## 📂 File Structure Reference

```
SSD-create/
├── assets/
│   ├── images/
│   │   ├── team/          ← Add: lars-dorn.jpg, liri-saikoski.jpg
│   │   ├── services/      ← Add: visual-mapping.jpg, etc.
│   │   ├── portfolio/     ← Add: project-1.jpg through 4.jpg
│   │   └── location/      ← Add: poblenou.jpg
│   └── videos/            ← Add: hero-background.mp4
├── index.html             ← Edit: image/video paths
├── styles.css             ← (No changes needed)
├── script.js              ← (No changes needed)
├── package.json           ← (Already configured)
├── CHECKLIST.md           ← Your detailed task list
├── IMPLEMENTATION_STATUS.md ← Progress tracking
└── ...other docs...
```

---

## 💻 Essential Commands

```bash
# Website is already running! But if you need to restart:
npm start
# OR
python3 -m http.server 8001

# View in browser
open http://localhost:8001

# Check if running
curl http://localhost:8001

# Test on phone (get your IP first)
ipconfig getifaddr en0
# Then visit http://YOUR_IP:8001 on phone
```

---

## 🖼️ Image Specifications Quick Reference

| Section | Size | Format | Count |
|---------|------|--------|-------|
| Team | 500×600px | JPG | 2 |
| Services | 800×600px | JPG | 4 |
| Portfolio | 600×400px | JPG | 4 |
| Location | 800×600px | JPG | 1 |
| Hero Video | 1920×1080px | MP4 | 1 |

**File Size Goals:**
- Images: 100-250KB each
- Video: 3-5MB

---

## ✅ How to Verify It's Working

1. **Open** http://localhost:8001
2. **Press F12** to open Developer Tools
3. **Go to Console tab** - should be clean (no red errors)
4. **Go to Network tab** - all files should be green (200 status)
5. **Click on sections** - smooth scrolling should work
6. **Hover over cards** - animations should play

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Images don't show | Check file path in HTML (case-sensitive) |
| Old images still showing | Clear browser cache (Ctrl+Shift+Delete) |
| Server not running | Run `npm start` in terminal |
| File not found error | Verify file exists in assets folder |
| Broken images (404s) | Check Network tab in DevTools, fix path |

---

## 📋 Today's Checklist

- [ ] Check website is live at http://localhost:8001
- [ ] Review current placeholder images
- [ ] Prepare team member photos
- [ ] Save photos to `assets/images/team/`
- [ ] Update HTML paths (lines 120, 130)
- [ ] Refresh browser and verify
- [ ] Prepare service images
- [ ] Continue with remaining phases...

---

## 📞 Need Help?

- **Quick guide:** Check `START_HERE.md`
- **Detailed checklist:** See `CHECKLIST.md`
- **Full status:** Read `IMPLEMENTATION_STATUS.md`
- **Image specs:** Read `assets/README.md`
- **Deployment help:** Read `DEPLOYMENT.md`

---

## 🎉 You're Ready!

Everything is set up. Just add your images and refresh the browser. It's that simple!

**Next 5 minutes:** Open browser to http://localhost:8001  
**Next 30 minutes:** Add team photos  
**Next 2 hours:** Add remaining images  

Let's go! 🚀

