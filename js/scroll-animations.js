// ============================================
// SCROLL ANIMATIONS USING INTERSECTION OBSERVER
// ============================================

function initScrollAnimations() {
    if (window.scrollAnimationsInitialized) return;
    window.scrollAnimationsInitialized = true;

    // ============================================
    // INTERSECTION OBSERVER OPTIONS
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // ============================================
    // CALLBACK FUNCTION
    // ============================================
    const observerCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add animation class with delay
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100);
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    };
    
    // ============================================
    // CREATE OBSERVER
    // ============================================
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // ============================================
    // OBSERVE ELEMENTS
    // ============================================
    const animatedElements = document.querySelectorAll(
        '.card, .timeline__item, .section__title, .hero__content'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}
