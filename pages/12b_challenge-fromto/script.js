import gsap from "https://cdn.skypack.dev/gsap";

const buttons = document.querySelectorAll(".reactions button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const emoji = button.dataset.emoji;
    const rect = button.getBoundingClientRect();

    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    bubble.textContent = emoji;

    // Position the bubble at the button's location
    bubble.style.left = `${rect.left + rect.width / 2}px`;
    bubble.style.top = `${rect.top}px`;

    document.body.appendChild(bubble);

    gsap.fromTo(
      bubble,
      {
        x: 0,
        y: 0,
        scale: 0.5,
        opacity: 1,
        rotation: 0,
      },
      {
        x: gsap.utils.random(-40, 40),
        y: -180,
        scale: 1.6,
        opacity: 0,
        rotation: gsap.utils.random(-30, 30),
        duration: 1.2,
        ease: "power2.out",
        onComplete: () => bubble.remove(),
      }
    );
  });
});
