// pra fazer a navbar mobile;
const hamburguer = document.querySelector('.menu-hamburguer');
const sidebar = document.querySelector('.sidebar');
const fechar = document.querySelector('.fechar-sidebar');
const overlay = document.querySelector('.overlay');

hamburguer.addEventListener('click', () => {
  sidebar.classList.add('aberta');
  overlay.classList.add('ativo');
});

fechar.addEventListener('click', () => {
  sidebar.classList.remove('aberta');
  overlay.classList.remove('ativo');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('aberta');
  overlay.classList.remove('ativo');
});

 // pra fazer o efeito do scroll;
const lenis = new Lenis({
  duration: 0.7,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//animacoes;
const elementos = document.querySelectorAll('.aparecer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, { threshold: 0.1 });

elementos.forEach(elemento => {
  observer.observe(elemento);
});

window.addEventListener('load', () => {
  document.querySelector('header').classList.add('visivel');
});