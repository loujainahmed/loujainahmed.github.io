const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  });
}

function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'white';

  stars.forEach(star => {
    star.z -= 2;
    if (star.z <= 0) star.z = canvas.width;

    let k = 128.0 / star.z;
    let px = star.x * k + canvas.width / 2;
    let py = star.y * k + canvas.height / 2;

    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      let size = (1 - star.z / canvas.width) * 3;
      ctx.fillRect(px, py, size, size);
    }
  });

  requestAnimationFrame(draw);
}

draw();
