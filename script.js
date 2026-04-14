// ===========================
// PARALLAX & SCROLL EFFECTS
// ===========================

class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.speed = 0.5;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const scrollY = window.scrollY;
        this.elements.forEach(element => {
            const offset = element.offsetTop;
            
            if (offset > scrollY - window.innerHeight && offset < scrollY + window.innerHeight) {
                element.style.transform = `translateY(${(scrollY - offset) * 0.3}px)`;
            }
        });
    }
}

// ===========================
// INTERSECTION OBSERVER
// ===========================

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.observer = new IntersectionObserver((entries) => this.onIntersect(entries), this.observerOptions);
        this.init();
    }

    init() {
        const animatedElements = document.querySelectorAll('.service-card, .team-member, .portfolio-item, .location-image');
        animatedElements.forEach(el => this.observer.observe(el));
    }

    onIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            }
        });
    }
}

// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('.nav-links a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// ===========================
// DYNAMIC GALLERY EXPANSION
// ===========================

class PortfolioGallery {
    constructor() {
        this.items = document.querySelectorAll('.portfolio-item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            item.addEventListener('mouseenter', () => this.expandItem(item));
            item.addEventListener('mouseleave', () => this.shrinkItem(item));
        });
    }

    expandItem(item) {
        // Get all items
        const allItems = Array.from(this.items);
        const index = allItems.indexOf(item);
        
        // Reduce size of other items
        allItems.forEach((el, i) => {
            if (i !== index) {
                el.style.transform = 'scale(0.85)';
                el.style.opacity = '0.6';
            }
        });
        
        // Expand current item
        item.style.transform = 'scale(1.1)';
        item.style.opacity = '1';
        item.style.zIndex = '10';
    }

    shrinkItem() {
        // Reset all items
        this.items.forEach(el => {
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
            el.style.zIndex = 'auto';
        });
    }
}

// ===========================
// CONTACT FORM HANDLER
// ===========================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const inputs = this.form.querySelectorAll('input, textarea');
        
        // Simple validation
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff006e';
            }
        });

        if (isValid) {
            // Show success message
            const button = this.form.querySelector('.submit-btn');
            const originalText = button.textContent;
            button.textContent = 'SENT ✓';
            button.style.background = '#00ff88';
            
            // Reset form
            setTimeout(() => {
                this.form.reset();
                button.textContent = originalText;
                button.style.background = '';
                inputs.forEach(input => input.style.borderColor = '');
            }, 2000);
        }
    }
}


// ===========================
// CURSOR EFFECT
// ===========================

class CursorEffect {
    constructor() {
        this.cursorX = 0;
        this.cursorY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.targetX = e.clientX;
            this.targetY = e.clientY;
        });

        this.animate();
    }

    animate() {
        // Smooth following effect
        this.cursorX += (this.targetX - this.cursorX) * 0.1;
        this.cursorY += (this.targetY - this.cursorY) * 0.1;
        requestAnimationFrame(() => this.animate());
    }
}

// ===========================
// STICKY NAVIGATION
// ===========================

class StickyNav {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.services = document.getElementById('services');
        this.revealed = false;
        this.triggerY = 0;
        this.init();
    }

    init() {
        // Calculate trigger point after layout settles
        window.addEventListener('load', () => this.recalculate());
        window.addEventListener('resize', () => this.recalculate());
        window.addEventListener('scroll', () => this.update(), { passive: true });
        this.recalculate();
    }

    recalculate() {
        if (this.services) {
            this.triggerY = this.services.getBoundingClientRect().top + window.scrollY;
        }
    }

    update() {
        if (!this.revealed && window.scrollY >= this.triggerY) {
            this.revealed = true;
            this.navbar.classList.add('is-visible');
        }

        if (this.revealed) {
            this.navbar.style.borderBottomColor =
                window.scrollY > this.triggerY + 100
                    ? 'rgba(0, 255, 136, 0.3)'
                    : 'rgba(255, 255, 255, 0.1)';
        }
    }
}

// ===========================
// STICKY SECTION HEIGHT GUARD
// ===========================

class StickySectionHeightGuard {
    constructor() {
        this.sections = Array.from(document.querySelectorAll('section:not(.hero)'));
        this.resizeTimer = null;
        this.init();
    }

    init() {
        if (!this.sections.length) {
            return;
        }

        this.recalculate();
        window.addEventListener('load', () => this.recalculate());
        window.addEventListener('resize', () => this.onResize());
    }

    onResize() {
        if (this.resizeTimer) {
            window.clearTimeout(this.resizeTimer);
        }

        this.resizeTimer = window.setTimeout(() => {
            this.recalculate();
        }, 120);
    }

    recalculate() {
        const viewportHeight = Math.max(window.innerHeight, 1);
        const maxStickyHeight = viewportHeight * 0.95;

        this.sections.forEach((section) => {
            const sectionHeight = section.scrollHeight;
            section.classList.toggle('is-tall-section', sectionHeight > maxStickyHeight);
        });
    }
}

// ===========================
// SECTION BACKGROUND TRANSITIONS
// ===========================

class BackgroundTransition {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.3 });

        this.sections.forEach(section => observer.observe(section));
    }
}


// ===========================
// IMAGE LAZY LOADING
// ===========================

class LazyLoad {
    constructor() {
        if ('IntersectionObserver' in window) {
            this.init();
        }
    }

    init() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ===========================
// TEAM GALLERY INTERACTION
// ===========================

// ===========================
// TEAM MEMBER MOUSE REPULSION
// ===========================

class TeamMemberMouseRepulsion {
    constructor() {
        this.circles = document.querySelectorAll('.team-member-circle');
        this.repulsionRadius = 150; // Distance at which repulsion starts
        this.maxRepulsion = 30; // Maximum movement in pixels
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.updateMousePosition(e));
        this.animationFrameId = requestAnimationFrame(() => this.updateCircles());
    }

    updateMousePosition(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    updateCircles() {
        this.circles.forEach(circle => {
            const rect = circle.getBoundingClientRect();
            const circleX = rect.left + rect.width / 2;
            const circleY = rect.top + rect.height / 2;

            // Calculate distance from mouse to circle center
            const dx = circleX - this.mouseX;
            const dy = circleY - this.mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.repulsionRadius && distance > 0) {
                // Calculate repulsion strength based on proximity (0 to 1)
                const strength = 1 - (distance / this.repulsionRadius);
                
                // Calculate repulsion direction (away from mouse)
                const angle = Math.atan2(dy, dx);
                const repulsionX = Math.cos(angle) * strength * this.maxRepulsion;
                const repulsionY = Math.sin(angle) * strength * this.maxRepulsion;

                // Apply the repulsion as a slight offset
                circle.style.transform = `translate(${repulsionX.toFixed(2)}px, ${repulsionY.toFixed(2)}px)`;
            } else {
                // Reset to original position
                circle.style.transform = 'translate(0, 0)';
            }
        });

        requestAnimationFrame(() => this.updateCircles());
    }
}

// ===========================
// TEAM GALLERY INTERACTION
// ===========================

class TeamGalleryInteraction {
    constructor() {
        this.members = document.querySelectorAll('.team-member-wrapper');
        this.init();
    }

    init() {
        this.members.forEach((member, index) => {
            member.addEventListener('mouseenter', () => this.highlightMember(member, index));
            member.addEventListener('mouseleave', () => this.resetMembers());
        });
    }

    highlightMember(member, index) {
        this.members.forEach((m, i) => {
            if (i !== index) {
                m.style.opacity = '0.6';
                m.style.transform = 'scale(0.95)';
            }
        });
        member.style.opacity = '1';
        member.style.transform = 'scale(1)';
    }

    resetMembers() {
        this.members.forEach(m => {
            m.style.opacity = '1';
            m.style.transform = 'scale(1)';
        });
    }
}

// ===========================
// SERVICE CARD IMAGE PARALLAX
// ===========================

class ServiceCardParallax {
    constructor() {
        this.cards = document.querySelectorAll('.service-card');
        this.maxX = 10;
        this.maxY = 8;
        this.hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        if (!this.cards.length || !this.hasFinePointer || this.prefersReducedMotion) {
            return;
        }

        this.cards.forEach((card) => {
            card.addEventListener('mousemove', (event) => this.onMove(card, event));
            card.addEventListener('mouseleave', () => this.reset(card));
            card.addEventListener('blur', () => this.reset(card), true);
        });
    }

    onMove(card, event) {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) {
            return;
        }

        const relativeX = (event.clientX - rect.left) / rect.width;
        const relativeY = (event.clientY - rect.top) / rect.height;

        // Shift image opposite to cursor for a subtle depth effect.
        const offsetX = (0.5 - relativeX) * this.maxX * 2;
        const offsetY = (0.5 - relativeY) * this.maxY * 2;

        card.style.setProperty('--service-parallax-x', `${offsetX.toFixed(2)}px`);
        card.style.setProperty('--service-parallax-y', `${offsetY.toFixed(2)}px`);
    }

    reset(card) {
        card.style.setProperty('--service-parallax-x', '0px');
        card.style.setProperty('--service-parallax-y', '0px');
    }
}

// ===========================
// HERO VIDEO SCROLL EFFECT
// ===========================

class HeroVideoScroll {
    constructor() {
        this.videoElement = document.querySelector('.hero-bg-video');
        this.heroSection = document.getElementById('hero');
        this.ticking = false;
        this.heroTop = 0;
        this.heroHeight = 0;
        this.maxScroll = 0;
        this.init();
    }

    init() {
        if (!this.videoElement || !this.heroSection) {
            return;
        }

        this.recalculateBounds();
        this.update();

        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
        window.addEventListener('resize', () => this.recalculateBounds());
    }

    onScroll() {
        if (!this.ticking) {
            this.ticking = true;
            requestAnimationFrame(() => {
                this.update();
                this.ticking = false;
            });
        }
    }

    recalculateBounds() {
        const rect = this.heroSection.getBoundingClientRect();
        this.heroTop = window.scrollY + rect.top;
        this.heroHeight = this.heroSection.offsetHeight;
        // Allow video to scroll until the hero section ends
        this.maxScroll = this.heroHeight - window.innerHeight;
    }

    update() {
        const scrollY = window.scrollY;
        const heroStart = this.heroTop;
        const heroEnd = this.heroTop + this.heroHeight;
        
        // Video fades out only in the last 3 viewports of the hero section
        // This means it stays fixed/visible for most of the 820vh hero
        const fadeOutStart = heroEnd - (window.innerHeight * 3);
        const fadeOutEnd = heroEnd;
        const safetyMargin = window.innerHeight * 2; // Small buffer after hero ends

        // Show video if still within hero or within small safety buffer after
        if (scrollY < (fadeOutEnd + safetyMargin)) {
            this.videoElement.style.display = 'block';
            this.videoElement.style.pointerEvents = 'auto';
            
            if (scrollY < fadeOutStart) {
                // VISIBLE ZONE: Keep video fixed on screen (no transform)
                // User scrolls through hero but video stays in same viewport position
                this.videoElement.style.transform = `translateY(0)`;
                this.videoElement.style.opacity = '1';
            } else {
                // FADE OUT ZONE: Only fade in last 3 viewports of hero
                const fadeDistance = scrollY - fadeOutStart;
                const fadeProgress = Math.min(fadeDistance / (window.innerHeight * 3), 1);
                this.videoElement.style.opacity = String(Math.max(0, 1 - fadeProgress));
                // Move video up and out of viewport proportionally to fade
                const offScreenDistance = -(window.innerHeight * fadeProgress);
                this.videoElement.style.transform = `translateY(${offScreenDistance}px)`;
            }
        } else {
            // FAR PAST HERO: Completely remove from rendering
            this.videoElement.style.display = 'none';
            this.videoElement.style.pointerEvents = 'none';
        }
    }
}

// ===========================
// HERO SPIRAL PARALLAX
// ===========================

class HeroSpiralParallax {
    constructor() {
        this.hero = document.getElementById('hero');
        this.square = document.querySelector('.hero-spiral-square');
        this.square2 = document.querySelector('.hero-spiral-square-2');
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.turns = 0.28;
        this.maxRadius = 8;
        this.verticalTravelFactor = 0.44;
        this.wobble = 1.8;
        this.maxRotation = 42;
        this.driftEnd = 0.82;
        this.holdStart = 0.92;
        this.landingY = 0.5;
        this.heroTop = 0;
        this.heroBottom = 0;
        this.heroHeight = 0;
        this.ticking = false;
        this.init();
    }

    init() {
        if (!this.hero || !this.square) {
            return;
        }

        if (this.prefersReducedMotion) {
            return;
        }

        // Ensure squares are visible at startup
        this.square.classList.remove('is-hidden');
        if (this.square2) {
            this.square2.classList.remove('is-hidden');
        }

        this.recalculateBounds();
        this.update();

        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
        window.addEventListener('resize', () => this.onResize());
    }

    onScroll() {
        if (!this.ticking) {
            this.ticking = true;
            requestAnimationFrame(() => {
                this.update();
                this.ticking = false;
            });
        }
    }

    onResize() {
        this.recalculateBounds();
        this.update();
    }

    recalculateBounds() {
        const rect = this.hero.getBoundingClientRect();
        this.heroTop = window.scrollY + rect.top;
        this.heroHeight = Math.max(this.hero.offsetHeight, 1);
        this.heroBottom = this.heroTop + this.heroHeight;
    }

    update() {
        const currentScroll = window.scrollY;
        const rawProgress = (currentScroll - this.heroTop) / this.heroHeight;
        const progress = Math.min(Math.max(rawProgress, 0), 1);
        const easedProgress = Math.pow(progress, 1.45);
        const inHeroRange = currentScroll <= this.heroBottom;

        const driftPhase = Math.min(easedProgress / this.driftEnd, 1);
        const angle = driftPhase * Math.PI * 2 * this.turns;
        const radius = 3 + (this.maxRadius * driftPhase);
        const driftX = Math.cos(angle) * radius;
        const driftY = (driftPhase * window.innerHeight * this.verticalTravelFactor) + (Math.sin(angle) * this.wobble);
        const driftRotateDeg = driftPhase * this.maxRotation;

        let x = driftX;
        let y = driftY;
        let rotateDeg = driftRotateDeg;
        const targetY = window.innerHeight * this.landingY;

        if (progress >= this.holdStart) {
            x = 0;
            y = targetY;
            rotateDeg = 0;
        } else if (progress >= this.driftEnd) {
            const landingProgress = Math.min((progress - this.driftEnd) / (this.holdStart - this.driftEnd), 1);
            const smoothLanding = 1 - Math.pow(1 - landingProgress, 3);

            x = driftX * (1 - smoothLanding);
            y = driftY + ((targetY - driftY) * smoothLanding);
            rotateDeg = driftRotateDeg * (1 - smoothLanding);
        }

        this.square.classList.toggle('is-hidden', !inHeroRange);
        this.square.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotateDeg.toFixed(2)}deg)`;

        // Second square — same path, slightly slower ease for trailing depth
        if (this.square2) {
            const easedProgress2 = Math.pow(progress, 1.65);
            const driftPhase2 = Math.min(easedProgress2 / this.driftEnd, 1);
            const angle2 = driftPhase2 * Math.PI * 2 * this.turns;
            const radius2 = 3 + (this.maxRadius * driftPhase2);
            const driftX2 = Math.cos(angle2) * radius2;
            const driftY2 = (driftPhase2 * window.innerHeight * this.verticalTravelFactor) + (Math.sin(angle2) * this.wobble);
            const driftRotateDeg2 = driftPhase2 * this.maxRotation;

            let x2 = driftX2;
            let y2 = driftY2;
            let rotateDeg2 = driftRotateDeg2;

            if (progress >= this.holdStart) {
                x2 = 0;
                y2 = targetY;
                rotateDeg2 = 0;
            } else if (progress >= this.driftEnd) {
                const landingProgress2 = Math.min((progress - this.driftEnd) / (this.holdStart - this.driftEnd), 1);
                const smoothLanding2 = 1 - Math.pow(1 - landingProgress2, 3);
                x2 = driftX2 * (1 - smoothLanding2);
                y2 = driftY2 + ((targetY - driftY2) * smoothLanding2);
                rotateDeg2 = driftRotateDeg2 * (1 - smoothLanding2);
            }

            this.square2.classList.toggle('is-hidden', !inHeroRange);
            this.square2.style.transform = `translate3d(${x2.toFixed(2)}px, ${y2.toFixed(2)}px, 0) rotate(${rotateDeg2.toFixed(2)}deg)`;

            // Rotate gradient angle 1.5 turns (135→675deg) so the opposite
            // colour version sweeps in from the far edge at ~50% progress
            // and the square lands holding the inverted state.
            const gradAngle = 135 + (progress * 540);
            this.square2.style.setProperty('--grad-angle', `${gradAngle.toFixed(1)}deg`);
        }
    }
}

// ===========================
// DIFFERENCE SPIRAL SQUARE PARALLAX
// ===========================

class DifferenceSpiralParallax {
    constructor() {
        this.difference = document.getElementById('difference');
        this.square = document.querySelector('.difference-spiral-square');
        this.square2 = document.querySelector('.difference-spiral-square-2');
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.turns = 0.28;
        this.maxRadius = 8;
        this.verticalTravelFactor = 0.44;
        this.wobble = 1.8;
        this.maxRotation = 42;
        this.driftEnd = 0.82;
        this.holdStart = 0.92;
        this.landingY = 0.5;
        this.differenceTop = 0;
        this.differenceBottom = 0;
        this.differenceHeight = 0;
        this.ticking = false;
        this.init();
    }

    init() {
        if (!this.difference || !this.square) {
            return;
        }

        if (this.prefersReducedMotion) {
            return;
        }

        // Ensure squares are visible at startup
        this.square.classList.remove('is-hidden');
        if (this.square2) {
            this.square2.classList.remove('is-hidden');
        }

        this.recalculateBounds();
        this.update();

        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
        window.addEventListener('resize', () => this.onResize());
    }

    onScroll() {
        if (!this.ticking) {
            this.ticking = true;
            requestAnimationFrame(() => {
                this.update();
                this.ticking = false;
            });
        }
    }

    onResize() {
        this.recalculateBounds();
        this.update();
    }

    recalculateBounds() {
        const rect = this.difference.getBoundingClientRect();
        this.differenceTop = window.scrollY + rect.top;
        this.differenceHeight = Math.max(this.difference.offsetHeight, 1);
        this.differenceBottom = this.differenceTop + this.differenceHeight;
    }

    update() {
        const currentScroll = window.scrollY;
        const rawProgress = (currentScroll - this.differenceTop) / this.differenceHeight;
        const progress = Math.min(Math.max(rawProgress, 0), 1);
        const easedProgress = Math.pow(progress, 1.45);
        const inDifferenceRange = currentScroll <= this.differenceBottom && currentScroll >= this.differenceTop - window.innerHeight;

        const driftPhase = Math.min(easedProgress / this.driftEnd, 1);
        const angle = driftPhase * Math.PI * 2 * this.turns;
        const radius = 3 + (this.maxRadius * driftPhase);
        const driftX = Math.cos(angle) * radius;
        const driftY = (driftPhase * window.innerHeight * this.verticalTravelFactor) + (Math.sin(angle) * this.wobble);
        const driftRotateDeg = driftPhase * this.maxRotation;

        let x = driftX;
        let y = driftY;
        let rotateDeg = driftRotateDeg;
        const targetY = window.innerHeight * this.landingY;

        if (progress >= this.holdStart) {
            x = 0;
            y = targetY;
            rotateDeg = 0;
        } else if (progress >= this.driftEnd) {
            const landingProgress = Math.min((progress - this.driftEnd) / (this.holdStart - this.driftEnd), 1);
            const smoothLanding = 1 - Math.pow(1 - landingProgress, 3);

            x = driftX * (1 - smoothLanding);
            y = driftY + ((targetY - driftY) * smoothLanding);
            rotateDeg = driftRotateDeg * (1 - smoothLanding);
        }

        this.square.classList.toggle('is-hidden', !inDifferenceRange);
        this.square.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotateDeg.toFixed(2)}deg)`;

        if (this.square2) {
            const easedProgress2 = Math.pow(progress, 1.65);
            const driftPhase2 = Math.min(easedProgress2 / this.driftEnd, 1);
            const angle2 = driftPhase2 * Math.PI * 2 * this.turns;
            const radius2 = 3 + (this.maxRadius * driftPhase2);
            const driftX2 = Math.cos(angle2) * radius2;
            const driftY2 = (driftPhase2 * window.innerHeight * this.verticalTravelFactor) + (Math.sin(angle2) * this.wobble);
            const driftRotateDeg2 = driftPhase2 * this.maxRotation;

            let x2 = driftX2;
            let y2 = driftY2;
            let rotateDeg2 = driftRotateDeg2;

            if (progress >= this.holdStart) {
                x2 = 0;
                y2 = targetY;
                rotateDeg2 = 0;
            } else if (progress >= this.driftEnd) {
                const landingProgress2 = Math.min((progress - this.driftEnd) / (this.holdStart - this.driftEnd), 1);
                const smoothLanding2 = 1 - Math.pow(1 - landingProgress2, 3);
                x2 = driftX2 * (1 - smoothLanding2);
                y2 = driftY2 + ((targetY - driftY2) * smoothLanding2);
                rotateDeg2 = driftRotateDeg2 * (1 - smoothLanding2);
            }

            this.square2.classList.toggle('is-hidden', !inDifferenceRange);
            this.square2.style.transform = `translate3d(${x2.toFixed(2)}px, ${y2.toFixed(2)}px, 0) rotate(${rotateDeg2.toFixed(2)}deg)`;

            const gradAngle = 135 + (progress * 540);
            this.square2.style.setProperty('--grad-angle', `${gradAngle.toFixed(1)}deg`);
        }
    }
}

// ===========================
// HORIZONTAL SCROLL INDICATOR
// ===========================

class ScrollIndicator {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        // Optional: Update scroll progress bar
        let progressBar = document.querySelector('.progress-bar');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            document.body.appendChild(progressBar);
        }
        progressBar.style.width = scrolled + '%';
    }
}

// ===========================
// ADD SCROLL ANIMATION KEYFRAMES
// ===========================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00ff88, #ff006e);
        width: 0%;
        z-index: 2000;
        transition: width 0.1s ease;
    }

    img {
        opacity: 0;
    }

    img.loaded {
        opacity: 1;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

// ===========================
// INITIALIZE ALL ON DOM READY
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SSD Create Website Initialized');

    // Initialize all features
    new ParallaxEffect();
    new ScrollAnimations();
    new SmoothScroll();
    new PortfolioGallery();
    new ContactForm();
    new CursorEffect();
    new StickyNav();
    // Disabled: StickySectionHeightGuard - conflicts with sticky overlay behavior
    // new StickySectionHeightGuard();
    new BackgroundTransition();
    new LazyLoad();
    new TeamMemberMouseRepulsion();
    new TeamGalleryInteraction();
    new ServiceCardParallax();
    new SectionContentParallax();
    new SectionSlideParallax();
    new HeroVideoScroll();
    new HeroSpiralParallax();
    new ScrollIndicator();
    new DifferenceSpiralParallax();

    // Log initialization complete
    console.log('✨ All interactive features loaded');
});

// ===========================
// IMAGE PRELOADING
// ===========================


// Preload images
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });
}

window.addEventListener('load', preloadImages);

// ===========================
// SECTION CONTENT PARALLAX SWITCH
// ===========================

class SectionContentParallax {
    constructor() {
        this.sections = Array.from(document.querySelectorAll('section:not(.hero)[data-parallax-sections]'));
        this.ticking = false;
        this.sectionData = new Map();
        this.init();
    }

    init() {
        if (!this.sections.length) {
            return;
        }

        this.sections.forEach((section) => {
            const contentBlocks = section.querySelectorAll('.section-content-block');
            if (contentBlocks.length > 0) {
                this.sectionData.set(section, {
                    blocks: Array.from(contentBlocks),
                    sectionTop: 0,
                    sectionHeight: 0,
                    blockHeight: 0,
                });
                contentBlocks[0].classList.add('is-active');
            }
        });

        this.update();
        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
        window.addEventListener('resize', () => this.recalculateBounds());
    }

    onScroll() {
        if (!this.ticking) {
            this.ticking = true;
            requestAnimationFrame(() => {
                this.update();
                this.ticking = false;
            });
        }
    }

    recalculateBounds() {
        this.sections.forEach((section) => {
            const data = this.sectionData.get(section);
            if (data) {
                data.sectionTop = section.offsetTop;
                data.sectionHeight = section.scrollHeight;
                data.blockHeight = data.blocks.length > 0 ? data.blocks[0].scrollHeight : 0;
            }
        });
    }

    update() {
        this.sections.forEach((section) => {
            const data = this.sectionData.get(section);
            if (!data) return;

            const scrollY = window.scrollY;
            const relativeScroll = scrollY - data.sectionTop;
            const sectionHeight = Math.max(data.sectionHeight, 1);
            const contentSwitchDistance = Math.max(sectionHeight / data.blocks.length, 1);

            // Calculate which content block should be active
            const blockIndex = Math.floor(relativeScroll / contentSwitchDistance);
            const activeIndex = Math.min(blockIndex, data.blocks.length - 1);

            // Update active state
            data.blocks.forEach((block, index) => {
                block.classList.toggle('is-active', index === activeIndex);
            });
        });
    }
}

// ===========================
// SECTION SLIDE PARALLAX
// ===========================

class SectionSlideParallax {
    constructor() {
        // Only apply effect to services section
        this.servicesSection = document.getElementById('services');
        this.init();
    }

    init() {
        if (!this.servicesSection) {
            return;
        }

        // Services section always visible
        this.servicesSection.style.setProperty('--section-slide-x', '0%');
    }
}

// ===========================
// LOCATION SECTION SCROLL ANIMATION
// ===========================

class LocationScrollAnimation {
    constructor() {
        this.locationSection = document.getElementById('location');
        this.basedInText = document.querySelector('.location-based-text');
        this.locationTitle = document.querySelector('.location-title-vertical');
        this.hasAnimated = false;
        
        if (!this.locationSection || !this.basedInText || !this.locationTitle) {
            console.error('❌ Location elements not found');
            return;
        }

        console.log('%c✅ Location Animation Ready', 'color: #00ff88; font-size: 12px;');
        console.log('Elements are visible by default');
        this.init();
    }

    init() {
        // Scroll listener for real animation trigger
        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
        console.log('✅ Scroll listener active');
    }

    onScroll() {
        if (this.hasAnimated) return;

        const rect = this.locationSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            const percent = (visibleHeight / window.innerHeight) * 100;

            if (percent > 15) {
                console.log(`📍 Location visible (${percent.toFixed(0)}%) - adding animate-in class`);
                this.triggerAnimation();
            }
        }
    }

    triggerAnimation() {
        if (this.hasAnimated) return;
        this.hasAnimated = true;

        console.log('🎬 Triggering scroll animation');
        this.basedInText.classList.add('animate-in');
        this.locationTitle.classList.add('animate-in');
    }
}

// ===========================
// INITIALIZE ALL ANIMATIONS ON PAGE LOAD
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SSD Create Website Initialized');

    // Initialize all features
    new ParallaxEffect();
    new ScrollAnimations();
    new SmoothScroll();
    new PortfolioGallery();
    new ContactForm();
    new CursorEffect();
    new StickyNav();
    new BackgroundTransition();
    new LazyLoad();
    new TeamMemberMouseRepulsion();
    new TeamGalleryInteraction();
    new ServiceCardParallax();
    new SectionContentParallax();
    new SectionSlideParallax();
    new HeroVideoScroll();
    new HeroSpiralParallax();
    new ScrollIndicator();
    new DifferenceSpiralParallax();
    new LocationScrollAnimation(); // Initialize location scroll animations

    console.log('✨ All interactive features loaded');
});

