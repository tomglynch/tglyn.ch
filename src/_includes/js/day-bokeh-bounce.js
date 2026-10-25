// Milla's idea: at the end of The Day page the bokeh discs come alive and drift around, bouncing off
// the edges of the screen like party lights. Scrolling back up glides them home
(function() {
  var layer = document.querySelector('.day-bokeh');
  if (!layer) return;
  var dots = [];
  var raf = null, mode = null, last, returnStart, runStart;
  // Seconds to ease up to full speed, so the discs gather pace rather than jumping into motion
  var RAMP = 2;
  // Narrow screens get side walls out past the edges, as wide as a laptop screen, so discs drift
  // off and back rather than bouncing off the sides of a phone constantly
  var MIN_ROOM = 900;

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
        duration: el.style.animationDuration,
        left: el.style.left,
        top: el.style.top
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
    });
    dots = [];
    mode = null;
    raf = null;
  }

  // Turn back at the edges without snapping position: many discs start partly off screen, and
  // snapping them all in at once looked like a jump
  function walls(d, W, H) {
    var p = pad(d);
    var extra = Math.max(0, (MIN_ROOM - W) / 2);
    if (d.x < -p - extra && d.vx < 0) d.vx = -d.vx;
    if (d.x > W - d.size + p + extra && d.vx > 0) d.vx = -d.vx;
    if (d.y < -p && d.vy < 0) d.vy = -d.vy;
    if (d.y > H - d.size + p && d.vy > 0) d.vy = -d.vy;
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
        walls(d, W, H);
      });
    } else if (mode === 'return') {
      var t = Math.min((now - returnStart) / 1200, 1);
      var e = 1 - Math.pow(1 - t, 3);
      dots.forEach(function(d) {
        d.x = d.rx + (d.hx - d.rx) * e;
        d.y = d.ry + (d.hy - d.ry) * e;
      });
      if (t >= 1) { restore(); return; }
    }

    dots.forEach(function(d) {
      d.el.style.transform = 'translate(' + d.x + 'px, ' + d.y + 'px)';
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
