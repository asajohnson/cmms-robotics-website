// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  const isActive = hamburger.classList.toggle('active');
  mainNav.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isActive);
});

// Close mobile nav when a nav-link is clicked (not dropdown toggles)
mainNav.querySelectorAll('.nav-link:not(.nav-dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav when a dropdown menu link is clicked
mainNav.querySelectorAll('.nav-dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Mobile dropdown toggle (tap to expand on mobile)
document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = toggle.closest('.nav-dropdown');
      dropdown.classList.toggle('active');
    }
  });
});

// Add header background opacity on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
