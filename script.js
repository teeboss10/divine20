const balloonContainer = document.getElementById('balloon-fall-container');
const balloonCount = 25; // number of balloons falling

for (let i = 0; i < balloonCount; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('gold-balloon');

  // Random horizontal position (0 to 100vw)
  balloon.style.left = Math.random() * 100 + 'vw';

  // Random animation duration between 7s to 15s
  const duration = 7 + Math.random() * 8;
  balloon.style.animationDuration = duration + 's';

  // Random delay to spread balloons out
  balloon.style.animationDelay = (Math.random() * 15) + 's';

  // Optional: random size variance for some depth
  const size = 30 + Math.random() * 20;
  balloon.style.width = size + 'px';
  balloon.style.height = (size * 1.5) + 'px';

  balloonContainer.appendChild(balloon);
}
