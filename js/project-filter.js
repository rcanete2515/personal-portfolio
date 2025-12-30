// ============================================
// PROJECT FILTERING FUNCTIONALITY
// ============================================

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter__button');
    const projectCards = document.querySelectorAll('.card--project');
    
    // ============================================
    // FILTER PROJECTS
    // ============================================
    function filterProjects(category) {
        projectCards.forEach(card => {
            const cardCategories = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategories.includes(category)) {
                // Show card with animation
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                // Hide card with animation
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // ============================================
    // UPDATE ACTIVE BUTTON
    // ============================================
    function updateActiveButton(activeButton) {
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
    
    // ============================================
    // EVENT LISTENERS
    // ============================================
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            filterProjects(category);
            updateActiveButton(button);
        });
    });
    
    // ============================================
    // INITIALIZE CARD STYLES
    // ============================================
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectFilter);
} else {
    initProjectFilter();
}
