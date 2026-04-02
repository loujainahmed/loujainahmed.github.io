(function () {
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');

  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function init() {
    stars = [];
    const n = Math.floor(W * H / 2800); // star density

    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,      // size
        base: Math.random() * 0.7 + 0.15,  // brightness
        speed: 0.4 + Math.random() * 1.2,  // twinkle speed
        phase: Math.random() * Math.PI * 2 // offset
      });
    }
  }

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.018;

    for (const s of stars) {
      const alpha = s.base * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,210,255,${alpha.toFixed(3)})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();

  window.addEventListener('resize', () => {
    resize();
    init();
  });
})();
