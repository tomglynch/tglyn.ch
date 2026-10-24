// Milla's idea: at the end of The Day page the bokeh discs come alive and bounce off the edges of the
// screen like party lights, flaring brighter as they hit a wall. Scrolling back up glides them home
(function() {
  var layer = document.querySelector('.day-bokeh');
  if (!layer) return;
  var dots = [];
  var raf = null, mode = null, last, returnStart;

  function rnd(a, b) { return a + Math.random() * (b - a); }

  // The visible disc is about 71% of the element, so let the soft edge go past the wall a little
  function pad(d) { return d.size * 0.145; }

  function capture() {
    dots = Array.prototype.map.call(layer.querySelectorAll('i'), function(el) {
      var m = new DOMMatrixReadOnly(getComputedStyle(el).transform);
      var a = Math.random() * Math.PI * 2;
      var speed = rnd(170, 250);
      return {
        el: el,
        size: el.offsetWidth,
        hx: el.offsetLeft,
        hy: el.offsetTop,
        x: el.offsetLeft + m.m41,
        y: el.offsetTop + m.m42,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        flash: 0,
        left: el.style.left,
        top: el.style.top,
        blur: el.classList.contains('soft') ? 14 : 2
      };
    });
    dots.forEach(function(d) {
      d.el.style.animation = 'none';
      d.el.style.left = '0px';
      d.el.style.top = '0px';
    });
  }

  function restore() {
    dots.forEach(function(d) {
      d.el.style.animation = '';
      d.el.style.left = d.left;
      d.el.style.top = d.top;
      d.el.style.transform = '';
      d.el.style.filter = '';
    });
    dots = [];
    mode = null;
    raf = null;
  }

  function walls(d, W, H) {
    var p = pad(d), hit = false;
    if (d.x < -p) { d.x = -p; d.vx = Math.abs(d.vx); hit = true; }
    if (d.x > W - d.size + p) { d.x = W - d.size + p; d.vx = -Math.abs(d.vx); hit = true; }
    if (d.y < -p) { d.y = -p; d.vy = Math.abs(d.vy); hit = true; }
    if (d.y > H - d.size + p) { d.y = H - d.size + p; d.vy = -Math.abs(d.vy); hit = true; }
    if (hit) d.flash = 1;
  }

  function step(now) {
    var dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    var W = layer.clientWidth, H = layer.clientHeight;

    if (mode === 'run') {
      dots.forEach(function(d) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.flash = Math.max(0, d.flash - dt * 2.5);
        walls(d, W, H);
      });
    } else if (mode === 'return') {
      var t = Math.min((now - returnStart) / 1200, 1);
      var e = 1 - Math.pow(1 - t, 3);
      dots.forEach(function(d) {
        d.x = d.rx + (d.hx - d.rx) * e;
        d.y = d.ry + (d.hy - d.ry) * e;
        d.flash = 0;
      });
      if (t >= 1) { restore(); return; }
    }

    dots.forEach(function(d) {
      d.el.style.transform = 'translate(' + d.x + 'px, ' + d.y + 'px) scale(' + (1 + d.flash * 0.15) + ')';
      d.el.style.filter = d.flash ? 'blur(' + d.blur + 'px) brightness(' + (1 + d.flash * 1.2) + ')' : '';
    });
    raf = requestAnimationFrame(step);
  }

  window.dayBokeh = {
    start: function() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (mode === 'run') return;
      if (mode !== 'return') capture();
      mode = 'run';
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); }
    },
    stop: function() {
      if (mode !== 'run') return;
      mode = 'return';
      returnStart = performance.now();
      dots.forEach(function(d) { d.rx = d.x; d.ry = d.y; });
    }
  };
})();
