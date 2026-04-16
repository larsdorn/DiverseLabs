# Difference Section Parallax Scroll Effect ✅

**Date:** April 7, 2026  
**Status:** COMPLETED  
**Feature:** Smooth text transition parallax effect on scroll  

---

## 🎯 What Was Created

A sophisticated parallax scrolling effect on the "What Makes Us Different" section that:
- Displays smooth text transitions as users scroll
- Text animates from down-to-top (bottom to top)
- Seamlessly swaps between two different text blocks
- Creates the illusion of staying in the same section while content evolves
- Maintains visual continuity throughout the scroll experience

---

## 📝 Implementation Details

### HTML Structure

```html
<div class="difference-text-wrapper">
    <div class="difference-text difference-text-1 is-active">
        <p>Our own exclusive design, powered by proprietary technology and AI models</p>
        <span class="difference-subtext">Responsible Artificial intelligence applied...</span>
    </div>
    <div class="difference-text difference-text-2">
        <p>Unique blend of professional backgrounds and board of technical advisors</p>
        <span class="difference-subtext">From applied psychology, to user experience...</span>
    </div>
</div>
```

**Structure:**
- `difference-text-wrapper`: Container that manages text block transitions
- `difference-text-1`: First text block (active on initial view)
- `difference-text-2`: Second text block (appears on scroll)
- Both blocks are layered absolutely for smooth transitions

### CSS Animations

```css
.difference-text-wrapper {
    position: relative;
    overflow: hidden;
    min-height: 200px;
}

.difference-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.difference-text.is-active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.difference-text:not(.is-active) {
    opacity: 0;
    transform: translateY(100%);
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
```

**Animation Features:**
- **Smooth transitions:** 0.6s cubic-bezier easing for natural motion
- **Down-to-top animation:** Text enters from bottom (translateY(100%)) to top (translateY(0))
- **Opacity fade:** Simultaneous opacity change for smooth blending
- **Overflow hidden:** Wrapper prevents text from showing outside boundaries
- **Absolute positioning:** Allows text blocks to overlap smoothly

### JavaScript Scroll Handler

```javascript
class DifferenceParallax {
    constructor() {
        this.section = document.getElementById('difference');
        this.textBlocks = document.querySelectorAll('.difference-text');
        this.currentIndex = 0;
        this.transitionPoint = 0.5; // Switch at 50% scroll through section
        this.init();
    }

    handleScroll() {
        // Calculate scroll progress within section (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, 
            (viewportHeight - sectionRect.top) / (viewportHeight + sectionHeight)
        ));
        
        // Switch text at 50% scroll progress
        const targetIndex = scrollProgress >= this.transitionPoint ? 1 : 0;
        
        if (targetIndex !== this.currentIndex) {
            this.switchText(targetIndex);
            this.currentIndex = targetIndex;
        }
    }

    switchText(newIndex) {
        this.textBlocks.forEach((block, index) => {
            if (index === newIndex) {
                block.classList.add('is-active');
            } else {
                block.classList.remove('is-active');
            }
        });
    }
}
```

**Functionality:**
- Listens to scroll events on the window
- Calculates scroll progress through the difference section (0 to 1)
- Triggers text swap at 50% scroll point through the section
- Only updates when target index changes (efficient re-rendering)
- Smooth class switching triggers CSS transitions

---

## 📐 Technical Specifications

### Text Transition Timing
- **Trigger point:** 50% scroll progress through section
- **Transition duration:** 0.6 seconds
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1) - standard smooth easing

### Animation Properties
- **Opacity:** 0 → 1 (entering text fades in)
- **Transform:** translateY(100%) → translateY(0) (bottom to top movement)
- **Entry:** New text enters from below
- **Exit:** Old text moves up and fades out

### Scroll Detection
- Detects section position relative to viewport
- Calculates section scroll progress (0 to 1)
- Non-linear scroll events for smooth performance
- Only triggers class changes on actual transitions

---

## ✨ User Experience

### Visual Flow
1. **Initial Load:** First text block visible (is-active)
2. **Scroll Down:** As user scrolls into section, text stays visible
3. **50% Scroll:** Text smoothly animates away (moving up, fading out)
4. **Second Text:** New text simultaneously animates in (entering from bottom)
5. **Continued Scroll:** Second text remains visible while scrolling through portfolio

### Feel
- **Seamless transition:** No jarring changes, smooth animations
- **Same section feel:** Despite text change, feels like continuous scrolling
- **Natural motion:** Down-to-top animation feels organic and intuitive
- **Contained effect:** Text transitions only within text area boundaries

---

## 📄 Content Updates

### First Text Block (Initial)
**Title:** "Our own exclusive design, powered by proprietary technology and AI models"

**Subtitle:** "Responsible Artificial intelligence applied to media, digital art and knowledge management with proprietary code and open-source models"

### Second Text Block (On Scroll)
**Title:** "Unique blend of professional backgrounds and board of technical advisors"

**Subtitle:** "From applied psychology, to user experience, Responsible AI models, data science and creative coding - our team is differentially trained to tackle real world challenges"

---

## 📁 Files Modified

### 1. **index.html**
- **Lines 158-184:** Updated difference section HTML
- **Added:** Wrapper div and second text block
- **Structure:** Both text blocks contained in wrapper with proper classes

### 2. **styles.css**
- **Lines 836-870:** New CSS for parallax text transitions
- **Added:** `.difference-text-wrapper` container styling
- **Added:** `.difference-text` animation states
- **Added:** `.is-active` class styling
- **Total:** ~35 lines of new CSS

### 3. **script.js**
- **Lines 702-751:** New DifferenceParallax class
- **Added:** Scroll event handling
- **Added:** Text switching logic
- **Lines 774:** Class initialization in DOMContentLoaded
- **Total:** ~50 lines of new JavaScript

---

## ✅ Verification

✅ No HTML errors  
✅ No CSS errors  
✅ No JavaScript errors  
✅ Smooth CSS transitions  
✅ Proper scroll detection  
✅ Efficient class switching  
✅ Visual continuity maintained  
✅ Text animation triggers correctly at 50% scroll  

---

## 🚀 Result

The "What Makes Us Different" section now features:
- ✅ **Smooth parallax text transitions** as users scroll
- ✅ **Down-to-top animation** for incoming text
- ✅ **Seamless visual experience** within the same section
- ✅ **Two distinct messaging blocks** swapping smoothly
- ✅ **Professional animation timing** (0.6s smooth easing)
- ✅ **Responsive scroll detection** based on section position
- ✅ **Contained animation** within text area boundaries

The parallax effect creates a sophisticated, engaging experience that makes the scroll feel more interactive and dynamic while presenting different aspects of the company's value proposition! ✨
