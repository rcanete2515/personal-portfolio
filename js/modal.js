// ============================================
// PROJECT MODAL
// ============================================

// Project data for modal
const projectData = {
  'Business Landing Website': {
    image: 'images/projects/rrrc-project-1.webp',
    title: 'Business Landing Website',
    description: 'Fully responsive website.',
    tags: ['HTML5', 'CSS3', 'JavaScript']
  },
  'Product Landing Website': {
    image: 'images/projects/rrrc-project-2.webp',
    title: 'Product Landing Website',
    description: 'Fully responsive website.',
    tags: ['HTML5', 'CSS3', 'JavaScript']
  },
  'Business WordPress Website': {
    image: 'images/projects/rrrc-project-4.webp',
    title: 'Business WordPress Website',
    description: 'Custom WordPress theme for corporate website with blog, services, and contact sections.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Wordpress']
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
