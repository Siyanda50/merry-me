const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const randX = Math.random() * (windowWidth - btnWidth);
  const randY = Math.random() * (windowHeight - btnHeight - 100);

  noBtn.style.left = randX + 'px';
  noBtn.style.top = randY + 'px';
});

function showLove() {
  alert('Yay! 💖 I love you so much!');
}
