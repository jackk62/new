document.addEventListener("DOMContentLoaded", () => {
  const parallaxElements = document.querySelectorAll('.parallax-background');

  // Efeito Parallax em tempo real
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-speed');
      el.style.transform = `translateY(${scrollY * speed / 100}px)`;
    });
  });

  // Navegação suave
  const ctaButton = document
