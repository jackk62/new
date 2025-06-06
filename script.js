document.addEventListener("DOMContentLoaded", () => {
  // Efeito Parallax
  const parallaxElements = document.querySelectorAll('.parallax-background');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-speed');
      el.style.transform = `translateY(${scrollY * speed / 100}px)`;
    });
  });

  // Animação de Rolagem Suave
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(ctaButton.getAttribute('href'));
    
    window.scrollTo({
      top: targetSection.offsetTop - 100, // Ajuste a posição de rolagem
      behavior: 'smooth'
    });
  });

  // Animações de Entradas das Seções
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Adicionar a classe 'in-view' para animar as seções
  // No CSS, vamos usar a classe 'in-view' para disparar animações quando a seção entra na tela
});
