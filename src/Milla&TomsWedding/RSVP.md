---
layout: pages/page-wedding.liquid
title: Milla & Tom's Wedding — RSVP
blurb: RSVP for Milla & Tom's Wedding
image: /Milla&TomsWedding/images/bokeh.jpg
excludeFromSitemap: true
published: false
tags: []
---

{% include_html %}

<div id="rsvp-animated-bg">
  <svg id="rsvp-bg-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"></svg>
</div>

<!-- Error: no personalised link -->
<section id="rsvp-error-screen" class="error-section" style="display:none">
  <div class="error-content">
    <h1 class="error-title">Oops!</h1>
    <p class="error-text">This is a personalised RSVP page.</p>
    <p class="error-text">Please use the link from your invitation.</p>
    <p class="error-subtext">If you think something's wrong, get in touch with us.</p>
  </div>
</section>

<!-- Main RSVP content -->
<div class="rsvp-page" id="rsvp-main" style="display:none">

  <div class="rsvp-page-header">
    <img src="/Milla&TomsWedding/images/engagement.jpg" alt="" class="rsvp-page-bg" width="2254" height="1502" />
  </div>
  <div id="rsvp-page-nav"></div>
  <div class="rsvp-page-header-content">
    <p class="rsvp-eyebrow"><span id="rsvp-hero-names"></span>, please join us in celebrating</p>
    <h1 class="rsvp-page-title">Our Love</h1>
    <p class="rsvp-page-date">Saturday, November 28<sup>th</sup> 2026</p>
    <p class="rsvp-eyebrow" style="margin-top: 14px;">RSVP below</p>
  </div>

  <div class="rsvp-page-body">

    <div class="rsvp-info-box">
      <p class="info-detail">Celebrations kick off at 12:30pm</p>
      <div class="rsvp-info-divider"></div>
      <p>Our first location for the day will be sent to your email closer to the date. We will then continue on for lunch at <strong>Hotel Railway on Albert St in Brunswick</strong>. Finally, at sunset we'll stroll down to Brunswick West to continue the celebrations at our home at 133 Pearson St!</p>
      <div class="rsvp-info-divider"></div>
      <p class="info-detail">Dress code: Formal and Fun!</p>
      <p class="info-small">With shoes you can walk &amp; dance in</p>
      <div class="rsvp-info-divider"></div>
      <p class="info-small">Your presence is truly the greatest gift. If you'd like to contribute to our future adventures together, there will be a wishing well at our home.</p>
    </div>

    <h2 class="rsvp-form-heading">RSVP</h2>

    <form name="wedding-rsvp" method="POST" data-netlify="true" id="rsvp-form" class="rsvp-form">

      <!-- Hidden fields for Netlify to detect at build time -->
      <input type="hidden" name="guests-summary" />
      <input type="hidden" name="address-street" />
      <input type="hidden" name="address-suburb" />
      <input type="hidden" name="address-state" />
      <input type="hidden" name="address-postcode" />
      <input type="hidden" name="address-country" />

      <!-- ── Step 1: Per-person responses ── -->
      <div id="step-1">

        <div class="rsvp-field-group">
          <p class="rsvp-field-label">Your responses</p>
          <p class="rsvp-field-hint">Select attending or not for each person, and add any dietary requirements</p>
          <div id="guest-rows"></div>
        </div>

        <div id="step1-error" class="rsvp-validation-error" style="display:none"></div>
        <button type="button" id="step1-next" class="rsvp-next-btn">Review RSVP &#8594;</button>

      </div>

      <!-- ── Step 2: Review & confirm ── -->
      <div id="step-2" style="display:none">

        <div class="rsvp-field-group">
          <p class="rsvp-field-label">Confirm your RSVP</p>
          <div id="review-summary" class="review-summary"></div>
        </div>

        <div id="address-section" class="rsvp-field-group">
          <p class="rsvp-field-label">Mailing address <span class="optional-tag">optional</span></p>
          <p class="rsvp-field-hint">So we can send you something special in the mail</p>
          <label class="checkbox-item address-toggle-check">
            <input type="checkbox" id="include-address-check" />
            <span>Include my address</span>
          </label>
          <div id="address-fields" style="display:none; margin-top: 16px;">
            <input type="text" id="addr-street" placeholder="Street address" />
            <input type="text" id="addr-suburb" placeholder="Suburb / City" />
            <div class="address-row">
              <input type="text" id="addr-state" placeholder="State" />
              <input type="text" id="addr-postcode" placeholder="Postcode" />
            </div>
            <input type="text" id="addr-country" placeholder="Country" value="Australia" />
          </div>
        </div>

        <div class="step-nav">
          <button type="button" id="back-btn" class="btn-back">&#8592; Edit</button>
          <button type="submit" class="rsvp-next-btn">Submit RSVP</button>
        </div>

      </div>

    </form>

    <div id="rsvp-success-yes" class="form-success" style="display:none">
      <p class="form-title">See you there!</p>
      <p class="form-subtitle">We can't wait to celebrate with you.</p>
    </div>
    <div id="rsvp-success-no" class="form-success" style="display:none">
      <p class="form-title">Thank you</p>
      <p class="form-subtitle">We'll be thinking of you on the day.</p>
    </div>
    <div id="rsvp-submit-error" class="form-error" style="display:none">
      <p class="form-title">Oops!</p>
      <p class="form-subtitle">Something went wrong. Please try again.</p>
      <button type="button" id="rsvp-try-again">Try again</button>
    </div>

    <p class="rsvp-sign-off">With love, Milla &amp; Tom &#10084;</p>

  </div>

</div>

<div id="confetti-counter" class="confetti-counter">
  <span id="confetti-count">0</span> confetti
</div>

<script>
(function() {

  // ── Parse URL param ──────────────────────────────────────────
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function decodeBase64(str) {
    try { return decodeURIComponent(escape(atob(str))); } catch(e) { return null; }
  }

  function parseNames(str) {
    return str.replace(/ & /g, ',').replace(/ and /g, ',')
      .split(',').map(function(n) { return n.trim(); }).filter(Boolean);
  }

  var encoded = getParam('s');
  var decoded = encoded ? decodeBase64(encoded) : null;
  var names   = decoded ? parseNames(decoded) : [];

  if (!names.length) {
    document.getElementById('rsvp-error-screen').style.display = 'flex';
    return;
  }

  document.getElementById('rsvp-main').style.display = 'block';

  var heroNames = document.getElementById('rsvp-hero-names');
  if (heroNames) heroNames.textContent = decoded;

  // Build back-to-invitation nav link
  var navEl = document.getElementById('rsvp-page-nav');
  if (navEl) {
    var inviteUrl = '/Milla&TomsWedding/invitation/?s=' + encodeURIComponent(encoded);
    navEl.innerHTML = '<a href="' + inviteUrl + '" class="rsvp-nav-link">&#8592; View invitation</a>';
  }

  // ── Build guest rows ─────────────────────────────────────────
  function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function createGuestRow(name, idx) {
    var row = document.createElement('div');
    row.className = 'guest-row';
    row.dataset.idx = idx;

    var radioName = 'row-attending-' + idx;
    row.innerHTML =
      '<div class="guest-row-number">' + idx + '</div>' +
      '<div class="guest-row-fields">' +
        '<div class="guest-row-name">' + escapeHtml(name) + '</div>' +
        '<div class="guest-row-attendance">' +
          '<label class="guest-attendance-option">' +
            '<input type="radio" name="' + radioName + '" value="yes" class="row-yes" />' +
            '<span class="guest-attendance-label yes-label">Coming!</span>' +
          '</label>' +
          '<label class="guest-attendance-option">' +
            '<input type="radio" name="' + radioName + '" value="no" class="row-no" />' +
            '<span class="guest-attendance-label no-label">Can\'t make it</span>' +
          '</label>' +
        '</div>' +
        '<div class="guest-row-dietary" style="display:none">' +
          '<input type="text" class="guest-dietary-input" placeholder="Dietary requirements (or \'none\')" />' +
        '</div>' +
      '</div>';

    // Show/hide dietary when attending is selected
    row.querySelector('.row-yes').addEventListener('change', function() {
      row.querySelector('.guest-row-dietary').style.display = 'block';
      row.querySelector('.guest-dietary-input').focus();
    });
    row.querySelector('.row-no').addEventListener('change', function() {
      row.querySelector('.guest-row-dietary').style.display = 'none';
      row.querySelector('.guest-dietary-input').value = '';
    });

    return row;
  }

  var container = document.getElementById('guest-rows');
  names.forEach(function(name, i) {
    container.appendChild(createGuestRow(name, i + 1));
  });

  // ── Collect guest data ────────────────────────────────────────
  function collectGuests() {
    var guests = [];
    document.querySelectorAll('.guest-row').forEach(function(row, i) {
      var name     = names[i];
      var yesRadio = row.querySelector('.row-yes');
      var noRadio  = row.querySelector('.row-no');
      var dietary  = row.querySelector('.guest-dietary-input').value.trim();
      var attending = yesRadio.checked ? 'yes' : noRadio.checked ? 'no' : null;
      guests.push({ name: name, attending: attending, dietary: dietary });
    });
    return guests;
  }

  // ── Build review HTML ─────────────────────────────────────────
  function buildReview(guests) {
    var html = '<ul class="review-guest-list">';
    guests.forEach(function(g) {
      var isYes = g.attending === 'yes';
      html += '<li class="review-guest-item">';
      html += '<div class="review-guest-header">';
      html += '<span class="review-guest-name">' + escapeHtml(g.name) + '</span>';
      html += isYes
        ? '<span class="review-badge attending">Coming &#10003;</span>'
        : '<span class="review-badge regrets">Can\'t make it</span>';
      html += '</div>';
      if (isYes) {
        html += '<span class="review-guest-dietary">' + (g.dietary ? escapeHtml(g.dietary) : '<em>no dietary requirements</em>') + '</span>';
      }
      html += '</li>';
    });
    html += '</ul>';
    return html;
  }

  // ── Step 1 → Step 2 ──────────────────────────────────────────
  document.getElementById('step1-next').addEventListener('click', function() {
    var guests  = collectGuests();
    var errorEl = document.getElementById('step1-error');

    var missing = guests.find(function(g) { return !g.attending; });
    if (missing) {
      errorEl.textContent = 'Please select attending or not for everyone.';
      errorEl.style.display = 'block';
      return;
    }

    errorEl.style.display = 'none';
    document.getElementById('review-summary').innerHTML = buildReview(guests);
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
    window.scrollTo({ top: document.getElementById('step-2').getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' });
  });

  // ── Step 2 → Step 1 ──────────────────────────────────────────
  document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
  });

  // ── Address toggle ────────────────────────────────────────────
  document.getElementById('include-address-check').addEventListener('change', function() {
    document.getElementById('address-fields').style.display = this.checked ? 'block' : 'none';
  });

  // ── Submit ────────────────────────────────────────────────────
  var rsvpForm       = document.getElementById('rsvp-form');
  var submitErrorEl  = document.getElementById('rsvp-submit-error');

  document.getElementById('rsvp-try-again').addEventListener('click', function() {
    submitErrorEl.style.display = 'none';
    rsvpForm.style.display = 'block';
  });

  rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var guests   = collectGuests();
    var anyYes   = guests.some(function(g) { return g.attending === 'yes'; });

    var summary = guests.map(function(g) {
      return g.name + ': ' + (g.attending === 'yes'
        ? 'attending — ' + (g.dietary || 'no dietary requirements')
        : 'not attending');
    }).join('\n');

    rsvpForm.querySelector('[name="guests-summary"]').value = summary;

    if (document.getElementById('include-address-check').checked) {
      rsvpForm.querySelector('[name="address-street"]').value   = document.getElementById('addr-street').value;
      rsvpForm.querySelector('[name="address-suburb"]').value   = document.getElementById('addr-suburb').value;
      rsvpForm.querySelector('[name="address-state"]').value    = document.getElementById('addr-state').value;
      rsvpForm.querySelector('[name="address-postcode"]').value = document.getElementById('addr-postcode').value;
      rsvpForm.querySelector('[name="address-country"]').value  = document.getElementById('addr-country').value;
    }

    var formData = new FormData(rsvpForm);
    formData.append('form-name', 'wedding-rsvp');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(function(res) {
      if (res.ok) {
        rsvpForm.style.display = 'none';
        if (anyYes) {
          document.getElementById('rsvp-success-yes').style.display = 'block';
          if (typeof showConfetti === 'function') showConfetti();
        } else {
          document.getElementById('rsvp-success-no').style.display = 'block';
        }
      } else {
        rsvpForm.style.display = 'none';
        submitErrorEl.style.display = 'block';
      }
    })
    .catch(function() {
      rsvpForm.style.display = 'none';
      submitErrorEl.style.display = 'block';
    });
  });

})();
</script>

<script>
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
</script>

{% endinclude_html %}
