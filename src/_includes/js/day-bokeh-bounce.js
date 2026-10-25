// Milla's idea: at the end of The Day page the bokeh discs come alive and bounce off the edges of the
// screen like party lights, flaring brighter as they hit a wall. Scrolling back up glides them home
(function() {
  var layer = document.querySelector('.day-bokeh');
  if (!layer) return;
  var dots = [];
  var raf = null, mode = null, last, returnStart, runStart;
  // Seconds to ease up to full speed, so the discs gather pace rather than jumping into motion
  var RAMP = 2;

  function rnd(a, b) { return a + Math.random() * (b - a); }

  // The visible disc is about 71% of the element, so let the soft edge go past the wall a little
  function pad(d) { return d.size * 0.145; }

  function capture() {
    var origin = layer.getBoundingClientRect();
    dots = Array.prototype.map.call(layer.querySelectorAll('i'), function(el) {
      // Where it is right now, mid-drift, so taking over from the CSS animation doesn't move it
      var r = el.getBoundingClientRect();
      var a = Math.random() * Math.PI * 2;
      var speed = rnd(170, 250);
      return {
        el: el,
        size: el.offsetWidth,
        hx: el.offsetLeft,
        hy: el.offsetTop,
        x: r.left - origin.left,
        y: r.top - origin.top,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        flash: 0,
        duration: el.style.animationDuration,
        left: el.style.left,
        top: el.style.top,
        // Flares lift opacity to full, which the compositor handles without repainting
        base: el.classList.contains('soft') ? 0.7 : 0.75
      };
    });
    // Switch to absolute positioning in the same frame, or each disc flashes at the top-left corner
    dots.forEach(function(d) {
      d.el.style.animation = 'none';
      d.el.style.left = '0px';
      d.el.style.top = '0px';
      d.el.style.transform = 'translate(' + d.x + 'px, ' + d.y + 'px)';
    });
  }

  function restore() {
    dots.forEach(function(d) {
      d.el.style.animation = '';
      // Restart the drift from its resting point, which is where the glide home just left it
      d.el.style.animationDuration = d.duration;
      d.el.style.animationDelay = '0s';
      d.el.style.left = d.left;
      d.el.style.top = d.top;
      d.el.style.transform = '';
      d.el.style.opacity = '';
    });
    dots = [];
    mode = null;
    raf = null;
  }

  // Turn back at the edges without snapping position: many discs start partly off screen, and
  // snapping them all in at once (with a flare) looked like a flash. They only flare on a real
  // wall hit, once they've been fully on screen
  function walls(d, W, H) {
    var p = pad(d);
    var minX = -p, maxX = W - d.size + p, minY = -p, maxY = H - d.size + p;
    var hit = false;
    if (d.x < minX && d.vx < 0) { d.vx = -d.vx; hit = true; }
    if (d.x > maxX && d.vx > 0) { d.vx = -d.vx; hit = true; }
    if (d.y < minY && d.vy < 0) { d.vy = -d.vy; hit = true; }
    if (d.y > maxY && d.vy > 0) { d.vy = -d.vy; hit = true; }
    if (hit && d.onScreen) d.flash = 1;
    if (d.x >= minX && d.x <= maxX && d.y >= minY && d.y <= maxY) d.onScreen = true;
  }

  function step(now) {
    var dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    var W = layer.clientWidth, H = layer.clientHeight;

    if (mode === 'run') {
      var p = Math.min((now - runStart) / 1000 / RAMP, 1);
      var pace = p * p * (3 - 2 * p);
      dots.forEach(function(d) {
        d.x += d.vx * pace * dt;
        d.y += d.vy * pace * dt;
        d.flash = Math.max(0, d.flash - dt * 2.5);
        walls(d, W, H);
      });
    } else if (mode === 'return') {
      var t = Math.min((now - returnStart) / 1200, 1);
      var e = 1 - Math.pow(1 - t, 3);
      dots.forEach(function(d) {
        d.x = d.rx + (d.hx - d.rx) * e;
        d.y = d.ry + (d.hy - d.ry) * e;
        d.flash = Math.max(0, d.flash - dt * 2.5);
      });
      if (t >= 1) { restore(); return; }
    }

    dots.forEach(function(d) {
      d.el.style.transform = 'translate(' + d.x + 'px, ' + d.y + 'px) scale(' + (1 + d.flash * 0.15) + ')';
      d.el.style.opacity = d.flash ? d.base + (1 - d.base) * d.flash : '';
    });
    raf = requestAnimationFrame(step);
  }

  window.dayBokeh = {
    start: function() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (mode === 'run') return;
      if (mode !== 'return') capture();
      mode = 'run';
      runStart = performance.now();
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
