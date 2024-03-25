const colors = ['Black', '#fff', 'Yellow', 'Purple', 'Green'];
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  const RandomColor = getRandomColor();
  document.body.style.background = colors[RandomColor];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
