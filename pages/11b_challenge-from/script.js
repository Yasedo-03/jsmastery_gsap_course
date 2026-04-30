import gsap from 'gsap';

const card = document.querySelector('#card');

gsap.from(card, {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
});

card.addEventListener('mouseover', () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.8,
    ease: 'power2.inOut',
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.8,
    ease: 'power2.inOut',
  });
});
