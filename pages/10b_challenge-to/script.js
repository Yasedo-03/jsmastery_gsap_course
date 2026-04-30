import gsap from 'gsap';

// const showToastLoop = () => {
//   gsap.to('.toast.one', {
//     y: -120,
//     opacity: 1,
//     scale: 1,
//     duration: 0.8,
//     ease: 'power4.out',
//     onComplete: () => {
//       gsap.to('.toast.one', {
//         delay: 2.5,
//         opacity: 0,
//         x: 200,
//         scale: 0.95,
//         duration: 0.7,
//         ease: 'power.in',
//         onComplete: () => {
//           gsap.to('.toast.two', {
//             y: -120,
//             opacity: 1,
//             scale: 1,
//             duration: 0.8,
//             ease: 'power4.out',
//             onComplete: () => {
//               gsap.to('.toast.two', {
//                 delay: 2.5,
//                 opacity: 0,
//                 x: 200,
//                 scale: 0.95,
//                 duration: 0.7,
//                 ease: 'power.in',
//               });
//             },
//           });
//         },
//       });
//     },
//   });
// };

// showToastLoop();
const showToastLoop = () => {
  const tl = gsap.timeline();
  const toasts = ['.toast.one', '.toast.two'];

  toasts.forEach((selector) => {
    tl.to(selector, {
      y: -120,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power4.out',
    }).to(selector, {
      opacity: 0,
      x: 200,
      scale: 0.95,
      duration: 0.7,
      ease: 'power.in',
      delay: 2.5,
    });
  });
};

showToastLoop();
