const enterBtn = document.getElementById('enterBtn');
const splash = document.getElementById('splash');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

enterBtn.addEventListener('click', () => {
  splash.classList.add('hide');
  setTimeout(() => splash.remove(), 900);
});

const jitterTargets = document.querySelectorAll('.stop-step');

function jitterFrame() {
  jitterTargets.forEach(el => {
    const r1 = (Math.random() - 0.5) * 1.8;
    const r2 = (Math.random() - 0.5) * 0.9;
    el.style.transform = `translate(${r1}px, ${-r1}px) rotate(${r2}deg)`;
  });
}

setInterval(jitterFrame, 140);
