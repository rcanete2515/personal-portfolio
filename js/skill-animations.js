// ============================================
// SKILL BAR ANIMATIONS & COUNTER ANIMATIONS
// ============================================

function initSkillAnimations() {
    if (window.skillAnimationsInitialized) return;
    window.skillAnimationsInitialized = true;

    // ============================================
    // SKILL BAR ANIMATION
    // ============================================
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar__fill');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    // ============================================
    // COUNTER ANIMATION FOR STATS
    // ============================================
    function animateCounters() {
        const counters = document.querySelectorAll('.card__number[data-count]');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'));
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + (target === 100 ? '%' : '+');
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }
    
    // ============================================
    // INITIALIZE ANIMATIONS
    // ============================================
    animateSkillBars();
    animateCounters();
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSkillAnimations);
} else {
    initSkillAnimations();
}
