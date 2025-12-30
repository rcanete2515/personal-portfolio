// ============================================
// PROJECT MODAL
// ============================================

// Project data for modal
const projectData = {
  'Modern E-commerce Platform': {
    image: 'images/projects/project-1.jpg',
    title: 'Modern E-commerce Platform',
    description: 'Fully responsive e-commerce website with shopping cart, product filters, and checkout flow. Built with modern web technologies for optimal performance.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
  },
  'SaaS Product Landing Page': {
    image: 'images/projects/project-2.jpg',
    title: 'SaaS Product Landing Page',
    description: 'High-converting landing page with animations, testimonials, and pricing tables. Optimized for conversions and user engagement.',
    tags: ['HTML5', 'SCSS', 'JavaScript']
  },
  'Corporate WordPress Theme': {
    image: 'images/projects/project-3.jpg',
    title: 'Corporate WordPress Theme',
    description: 'Custom WordPress theme for corporate website with blog, services, and contact sections. Fully customizable and SEO-optimized.',
    tags: ['WordPress', 'PHP', 'CSS3']
  },
  'React Admin Dashboard': {
    image: 'images/projects/project-4.jpg',
    title: 'React Admin Dashboard',
    description: 'Interactive admin dashboard with charts, data tables, and user management. Built with React for a smooth, dynamic user experience.',
    tags: ['React', 'JavaScript', 'Tailwind']
  },
  'Mobile App Landing Page': {
    image: 'images/projects/project-5.jpg',
    title: 'Mobile App Landing Page',
    description: 'Sleek landing page for mobile app with feature showcase and download buttons. Designed to drive app downloads and user engagement.',
    tags: ['HTML5', 'CSS3', 'JavaScript']
  },
  'Creative Portfolio Website': {
    image: 'images/projects/project-6.jpg',
    title: 'Creative Portfolio Website',
    description: 'Portfolio website for creative professional with gallery and contact form. Showcases work in an elegant, professional manner.',
    tags: ['HTML5', 'SCSS', 'JavaScript']
  }
};

// Get modal elements
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalBackdrop = modal.querySelector('.modal__backdrop');
const modalClose = modal.querySelector('.modal__close');

// Get all project cards
const projectCards = document.querySelectorAll('.card--project');

// Open modal function
function openModal(projectTitle) {
  const project = projectData[projectTitle];
  
  if (project) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    // Clear and populate tags
    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'modal__tag';
      tagElement.textContent = tag;
      modalTags.appendChild(tagElement);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

// Close modal function
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Add click event to all project cards
projectCards.forEach(card => {
  const viewButton = card.querySelector('.btn');
  const projectTitle = card.querySelector('.card__title').textContent;
  
  if (viewButton) {
    viewButton.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(projectTitle);
    });
  }
});

// Close modal on backdrop click
modalBackdrop.addEventListener('click', closeModal);

// Close modal on close button click
modalClose.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
