(function() {
  var svg = document.getElementById('rsvp-bg-svg');
  if (!svg) return;
  var NS = 'http://www.w3.org/2000/svg';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag) { return document.createElementNS(NS, tag); }
  function set(e, a) { Object.keys(a).forEach(function(k){ e.setAttribute(k, a[k]); }); return e; }

  // Heart path centered at origin, radius s
  function heartPath(s) {
    return 'M 0 ' + (s*0.35) +
      ' C '+(-s*0.15)+' '+(-s*0.1)+','+(-s)+' '+(-s*0.1)+','+(-s)+' '+(-s*0.45) +
      ' C '+(-s)+' '+(-s*0.9)+','+(-s*0.5)+' '+(-s)+',0 '+(-s*0.5) +
      ' C '+(s*0.5)+' '+(-s)+','+(s)+' '+(-s*0.9)+','+(s)+' '+(-s*0.45) +
      ' C '+(s)+' '+(-s*0.1)+','+(s*0.15)+' '+(-s*0.1)+',0 '+(s*0.35)+' Z';
  }

  // Cross-with-4-squares, all relative to origin, sized s
  function buildDiamond(g, s) {
    var diamond = el('polygon');
    set(diamond, {
      points: '0,'+(-s)+' '+s+',0 0,'+s+' '+(-s)+',0',
      fill: '#2462B4', stroke: '#4A2418', 'stroke-width': s * 0.06
    });
    g.appendChild(diamond);
  }

  // Shape definitions: type, size, starting x/y (fraction of screen), velocity (px/frame), rotation speed (deg/frame)
  var defs = [
    { type: 'heart',  size: 55,  fx: 0.15, fy: 0.25, vx:  0.22, vy:  0.14, rot: 0,   rs:  0.06 },
    { type: 'heart',  size: 40,  fx: 0.72, fy: 0.65, vx: -0.16, vy:  0.18, rot: 20,  rs: -0.05 },
    { type: 'circle', size: 38,  fx: 0.55, fy: 0.18, vx:  0.14, vy: -0.12, rot: 0,   rs:  0.04 },
    { type: 'circle', size: 26,  fx: 0.30, fy: 0.80, vx: -0.12, vy:  0.16, rot: 0,   rs: -0.03 },
    { type: 'diamond', size: 65,  fx: 0.82, fy: 0.40, vx: -0.18, vy: -0.13, rot: 10,  rs:  0.07 },
  ];

  var W, H, shapes = [];

  function init() {
    W = window.innerWidth;
    H = window.innerHeight;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = '';
    shapes = [];

    defs.forEach(function(d, i) {
      var g = el('g');
      g.id = 'fs' + i;

      if (d.type === 'heart') {
        var p = el('path');
        set(p, { d: heartPath(d.size), fill: '#D63F7B', stroke: '#4A2418', 'stroke-width': d.size * 0.1 });
        g.appendChild(p);
      } else if (d.type === 'circle') {
        var c = el('circle');
        set(c, { cx: 0, cy: 0, r: d.size, fill: '#E8A93D', stroke: '#4A2418', 'stroke-width': d.size * 0.08 });
        g.appendChild(c);
      } else if (d.type === 'diamond') {
        buildDiamond(g, d.size);
      }

      svg.appendChild(g);
      shapes.push({ el: g, x: d.fx * W, y: d.fy * H, vx: d.vx, vy: d.vy, rot: d.rot, rs: d.rs });
    });

    // Apply initial positions
    shapes.forEach(function(s) {
      s.el.setAttribute('transform', 'translate('+s.x+','+s.y+') rotate('+s.rot+')');
    });
  }

  function tick() {
    shapes.forEach(function(s) {
      s.x = ((s.x + s.vx) % W + W) % W;
      s.y = ((s.y + s.vy) % H + H) % H;
      s.rot = (s.rot + s.rs + 360) % 360;
      s.el.setAttribute('transform', 'translate('+s.x+','+s.y+') rotate('+s.rot+')');
    });
    requestAnimationFrame(tick);
  }

  init();
  if (!reduced) tick();

  var rt;
  window.addEventListener('resize', function() {
    clearTimeout(rt);
    rt = setTimeout(init, 150);
  });
})();
