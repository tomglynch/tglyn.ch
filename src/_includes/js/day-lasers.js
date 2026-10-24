// Laser pulses for The Day page, fired like the confetti cannons on the other wedding pages:
// bursts from both sides that start as long fast streaks, slow down, shrink to glowing dots and fade
(function() {
  var COLOURS = ['60, 255, 150', '255, 60, 140', '150, 90, 255', '40, 220, 255'];
  var DEG = Math.PI / 180;
  var LIFE = 1.6;
  var canvas, ctx, W, H, raf, lastFrame, lastSpawn, burstEnd;
  var bolts = [];

  function rnd(a, b) { return a + Math.random() * (b - a); }

  function ensureCanvas() {
    if (canvas) return;
    canvas = document.createElement('canvas');
    canvas.className = 'day-laser-show';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Same aim as the confetti: from each side at 60% height, angled up and inwards, 55° spread
  function spawn(fromLeft) {
    var ang = (fromLeft ? -60 : -120) * DEG + rnd(-27.5, 27.5) * DEG;
    var speed = rnd(1300, 2200);
    bolts.push({
      x: fromLeft ? 0 : W,
      y: H * 0.6,
      vx: Math.cos(ang) * speed,
      vy: Math.sin(ang) * speed,
      c: COLOURS[Math.floor(Math.random() * COLOURS.length)],
      age: 0
    });
  }

  function drawBolt(b) {
    var a = Math.max(0, 1 - b.age / LIFE);
    var speed = Math.hypot(b.vx, b.vy) || 1;
    // Streak length follows speed, so bolts tighten into dots as they slow
    var len = Math.min(140, speed * 0.06);
    var tx = b.x - (b.vx / speed) * len;
    var ty = b.y - (b.vy / speed) * len;
    [[7, 'rgba(' + b.c + ',' + (a * 0.15) + ')'], [2.6, 'rgba(' + b.c + ',' + (a * 0.6) + ')'], [0.9, 'rgba(255,255,255,' + (a * 0.85) + ')']]
      .forEach(function(pass) {
        ctx.strokeStyle = pass[1];
        ctx.lineWidth = pass[0];
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(b.x, b.y); ctx.stroke();
      });
    ctx.fillStyle = 'rgba(' + b.c + ',' + (a * 0.35) + ')';
    ctx.beginPath(); ctx.arc(b.x, b.y, 6, 0, Math.PI * 2); ctx.fill();
  }

  function frame(now) {
    var dt = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;

    // Keep firing small volleys from both sides for the length of the burst
    if (now < burstEnd && now - lastSpawn > 80) {
      lastSpawn = now;
      for (var i = 0; i < 3; i++) { spawn(true); spawn(false); }
    }

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';

    var drag = Math.pow(0.06, dt);
    bolts = bolts.filter(function(b) {
      b.age += dt;
      b.vx *= drag;
      b.vy *= drag;
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      if (b.age > LIFE) return false;
      drawBolt(b);
      return true;
    });

    if (bolts.length || now < burstEnd) raf = requestAnimationFrame(frame);
    else { raf = null; ctx.clearRect(0, 0, W, H); }
  }

  window.dayLasers = {
    fire: function() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      ensureCanvas();
      var now = performance.now();
      burstEnd = now + 1000 * rnd(0.8, 1.2);
      lastSpawn = 0;
      if (!raf) { lastFrame = now; raf = requestAnimationFrame(frame); }
    }
  };
})();
