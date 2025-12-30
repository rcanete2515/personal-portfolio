// ============================================
// MAIN APPLICATION INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully!");

  // Initialize all modules
  if (typeof initNavigation === "function") {
    initNavigation();
  }

  if (typeof initThemeToggle === "function") {
    initThemeToggle();
  }

  if (typeof initScrollAnimations === "function") {
    initScrollAnimations();
  }

  if (typeof initSkillAnimations === "function") {
    initSkillAnimations();
  }

  if (typeof initProjectFilter === "function") {
    initProjectFilter();
  }

  if (typeof initFormValidation === "function") {
    initFormValidation();
  }
});
