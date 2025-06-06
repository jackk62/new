document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector('.cta-button');
  
  // Adicionando interatividade no botão de call-to-action
  scrollButton.addEventListener('click', () => {
    document.getElementById("section1").scrollIntoView({ behavior: 'smooth' });
  });

  // Efeito de parallax
  window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    document.querySelector('.layer1
