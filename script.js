// Animate the logo when on the home section
document.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const logoContainer = document.querySelector('.logo-container');
  
    const homeSectionTop = homeSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (homeSectionTop < windowHeight && homeSectionTop > 0) {
      logoContainer.style.animation = 'pulse 2s infinite';
    } else {
      logoContainer.style.animation = 'none';
    }
  });
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle navbar visibility on hamburger click
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
   
  // Scroll Animation for 'scroll-effect' Sections
document.addEventListener('scroll', () => {
  const scrollEffects = document.querySelectorAll('.scroll-effect');
  const windowHeight = window.innerHeight;

  scrollEffects.forEach((effect) => {
    const elementTop = effect.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      effect.classList.add('active');
    }
  });
});
// Expand/Collapse Private Contact Details
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
    const content = card.querySelector('.card-content');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
