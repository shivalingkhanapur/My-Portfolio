// Intro gate + small runtime jitter to mimic stop‑motion cuts
const enterBtn = document.getElementById('enterBtn');
const splash = document.getElementById('splash');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

enterBtn.addEventListener('click', () => {
  splash.classList.add('hide');
  // After fade we can remove it from the DOM
  setTimeout(() => splash.remove(), 900);
});

// Optional: add tiny random 'jitter' on some elements every few frames
const jitterTargets = document.querySelectorAll('.stop-step');
function jitterFrame() {
  jitterTargets.forEach(el => {
    const r1 = (Math.random() - 0.5) * 1.8; // translate px
    const r2 = (Math.random() - 0.5) * 0.9; // rotate deg
    el.style.transform = `translate(${r1}px, ${-r1}px) rotate(${r2}deg)`;
  });
}
let frame = 0;
setInterval(() => {
  frame++;
  // Update every 140ms to look choppy (≈7 fps)
  jitterFrame();
}, 140);
