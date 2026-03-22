const container = document.querySelector('.bubbles');

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.animationDuration = (5 + Math.random() * 5) + 's';
  container.appendChild(bubble);
}
