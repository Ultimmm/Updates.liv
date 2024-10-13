// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav ul');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  nav.classList.toggle('open');
});
