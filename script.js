// Smooth animation when scrolling into sections
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Floating text animation
const text = document.querySelector('.animate-text');
const sub = document.querySelector('.animate-sub');

setTimeout(() => text.classList.add('active'), 500);
setTimeout(() => sub.classList.add('active'), 1000);
