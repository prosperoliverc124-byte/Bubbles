const container = document.querySelector('.bubbles');
const bubbles = [];

for (let i = 0; i < 30; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 40 + 20;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  const x = Math.random() * window.innerWidth;
  bubble.style.left = x + 'px';

  bubble.style.animationDuration = (6 + Math.random() * 6) + 's';
  bubble.style.animationDelay = Math.random() * 5 + 's';

  container.appendChild(bubble);

  bubbles.push({ el: bubble, x: x, y: 0 });
}

// mouse interaction
document.addEventListener('mousemove', (e) => {
  bubbles.forEach(b => {
    const dx = b.x - e.clientX;
    const dist = Math.sqrt(dx * dx);

    if (dist < 150) {
      b.el.style.transform = `translateX(${dx * 0.2}px)`;
    } else {
      b.el.style.transform = `translateX(0px)`;
    }
  });
});
