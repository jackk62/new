document.addEventListener("DOMContentLoaded", () => {
  // Efeito Parallax para background
  const parallaxElements = document.querySelectorAll('.parallax-background');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-speed');
      el.style.transform = `translateY(${scrollY * speed / 100}px)`;
    });
  });

  // Rolagem suave ao clicar no CTA
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(ctaButton.getAttribute('href'));
    
    window.scrollTo({
      top: targetSection.offsetTop - 100, // Ajuste a posição de rolagem para que a seção fique centralizada
      behavior: 'smooth'
    });
  });

  // Animação de rolagem para as seções
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

  // Efeito 3D para cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05) rotateY(10deg)';
      card.style.boxShadow = '0 20px 80px rgba(0, 0, 0, 0.9)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1) rotateY(0deg)';
      card.style.boxShadow = '0 10px 60px rgba(0, 0, 0, 0.8)';
    });
  });

  // Efeito de animação ao rolar
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop - window.innerHeight + 150 && scrollPosition <= sectionTop + sectionHeight) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  });
});
