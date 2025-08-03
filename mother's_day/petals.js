const canvas = document.getElementById('petals');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const petals = Array.from({length: 50}, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  r: Math.random() * 5 + 2,
  d: Math.random() * 2,
  color: `rgba(255,182,193,${Math.random()})`
}));

function drawPetals() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  petals.forEach(petal => {
    ctx.fillStyle = petal.color;
    ctx.moveTo(petal.x, petal.y);
    ctx.arc(petal.x, petal.y, petal.r, 0, Math.PI * 2);
  });
  ctx.fill();
  movePetals();
}

function movePetals() {
  petals.forEach(petal => {
    petal.y += petal.d;
    if (petal.y > height) {
      petal.y = 0;
      petal.x = Math.random() * width;
    }
  });
}

setInterval(drawPetals, 33);
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
