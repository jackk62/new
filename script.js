document.addEventListener("DOMContentLoaded", () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  // Animando o Parallax ao rolar
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-speed');
      el.style.transform = `translateY(${scrollY * speed / 100}px)`;
    });
  });

  // Navegação suave ao clicar no CTA
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
  });
});
