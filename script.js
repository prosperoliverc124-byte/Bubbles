const container = document.querySelector('.bubbles');

for (let i = 0; i < 30; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 40 + 10;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  bubble.style.left = Math.random() * 100 + 'vw';

  bubble.style.animationDuration = (5 + Math.random() * 5) + 's';
  bubble.style.animationDelay = Math.random() * 5 + 's';

  container.appendChild(bubble);
}
