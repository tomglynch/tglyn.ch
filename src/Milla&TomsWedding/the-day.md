---
layout: pages/page-wedding.liquid
title: Milla & Tom's Wedding — The Day
blurb: Times, places and the plan for Milla & Tom's Wedding
image: /Milla&TomsWedding/images/ceremony-preview.jpg
excludeFromSitemap: true
published: false
tags: []
---

{% include_html %}

<link rel="stylesheet" href="/css/wedding-day.css">

<script>
// Always open at noon. iPhone browsers were reloading to an old position, often the very bottom,
// which skipped the sunset and dropped straight into the heaviest part of the page
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
window.addEventListener('load', function() { window.scrollTo(0, 0); });
</script>

<div class="day-sky" aria-hidden="true">
  <div class="day-stars"></div>
  <div class="day-bokeh"></div>
</div>

<div class="rsvp-page day-page">

  {% include components/wedding-nav %}

  <div class="rsvp-page-header-content day-header">
    <p class="rsvp-eyebrow">Milla &amp; Tom's Wedding</p>
    <h1 class="rsvp-page-title">The Day</h1>
    <p class="rsvp-page-date">Saturday, November 28<sup>th</sup> 2026</p>
    <p class="rsvp-eyebrow day-greeting" id="day-greeting" hidden><span id="day-hero-names"></span>, here's the plan</p>

    <!-- Timed version of the invitation's all-day calendar event, so it says when and where to turn up -->
    <div class="day-calendar">
      <div class="calendar-dropdown">
        <button class="calendar-button" onclick="toggleCalendarMenu(event)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Add to Calendar
        </button>
        <div class="calendar-menu" id="calendarMenu">
          <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Milla%20%26%20Tom's%20Wedding&dates=20261128T011500Z/20261128T120000Z&details=12%3A15pm%20%20Arrive%20at%20Royal%20Park%20(pin%3A%20https%3A%2F%2Fmaps.google.com%2F%3Fq%3D-37.782495%2C144.948845)%0A12%3A30pm%20%20Ceremony%0A1%3A20pm%20%20Train%20from%20Royal%20Park%20to%20Brunswick%0ALong%20lunch%20at%20Hotel%20Railway%2C%20291-293%20Albert%20St%2C%20Brunswick%0ABefore%20sunset%20%20Walk%20home%20together%0ASunset%20till%20late%20%20Party%20at%20ours%2C%20133%20Pearson%20St%2C%20Brunswick%20West%0A%0AFull%20details%3A%20https%3A%2F%2Ftglyn.ch%2FMilla%26TomsWedding%2Fthe-day%2F&location=Royal%20Park%2C%20Parkville%20VIC%203052" target="_blank" rel="noopener" class="calendar-option">Google Calendar</a>
          <a href="https://outlook.live.com/calendar/0/deeplink/compose?subject=Milla%20%26%20Tom's%20Wedding&startdt=2026-11-28T12%3A15%3A00%2B11%3A00&enddt=2026-11-28T23%3A00%3A00%2B11%3A00&body=12%3A15pm%20%20Arrive%20at%20Royal%20Park%20(pin%3A%20https%3A%2F%2Fmaps.google.com%2F%3Fq%3D-37.782495%2C144.948845)%0A12%3A30pm%20%20Ceremony%0A1%3A20pm%20%20Train%20from%20Royal%20Park%20to%20Brunswick%0ALong%20lunch%20at%20Hotel%20Railway%2C%20291-293%20Albert%20St%2C%20Brunswick%0ABefore%20sunset%20%20Walk%20home%20together%0ASunset%20till%20late%20%20Party%20at%20ours%2C%20133%20Pearson%20St%2C%20Brunswick%20West%0A%0AFull%20details%3A%20https%3A%2F%2Ftglyn.ch%2FMilla%26TomsWedding%2Fthe-day%2F&location=Royal%20Park%2C%20Parkville%20VIC%203052" target="_blank" rel="noopener" class="calendar-option">Outlook</a>
          <a href="/Milla&TomsWedding/the-day.ics" class="calendar-option">Apple Calendar / iCal</a>
          <a href="/Milla&TomsWedding/the-day.ics" download class="calendar-option">Download .ics file</a>
        </div>
      </div>
    </div>
  </div>

  <div class="rsvp-page-body">

    <div class="rsvp-info-box day-vote-box day-reveal">
      <p class="info-detail">Please vote early!</p>
      <p>The Victorian state election has landed on our wedding day. Early voting is open Wednesday 18 to Friday 27 November, 9am&ndash;6pm (closed Sunday 22nd).</p>
      <p class="info-small">If you do vote on the day, go early. We'd hate for you to miss the ceremony stuck in a queue.</p>
    </div>

    <p class="day-intro">Three places, and two journeys in between that we're just as excited about. Come along for all of it.</p>

    <ol class="day-timeline">

      <li class="day-stop day-reveal">
        <p class="day-time">12:15pm</p>
        <h2 class="day-title">Arrive at Royal Park</h2>
        <p class="day-place">Look for the dropped pin on the map</p>
        <div class="day-map">
          <iframe src="https://maps.google.com/maps?q=-37.782495,144.948845&z=17&output=embed" loading="lazy" title="Ceremony location in Royal Park" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p>It's just a few minutes' walk from:</p>
        <ul class="day-nearby">
          <li>Royal Park Station (Upfield line)</li>
          <li>The Melbourne Zoo or Royal Park Station tram stops (route 58)</li>
          <li>The zoo's back gate car park, the best place to park if you're driving</li>
          <li>The State Netball &amp; Hockey Centre, handy for drop-offs</li>
        </ul>
        <p><a class="day-map-link" href="https://www.google.com/maps/search/?api=1&query=-37.782495,144.948845" target="_blank" rel="noopener">Open in Google Maps &#8594;</a></p>
      </li>

      <li class="day-stop day-ceremony day-reveal">
        <p class="day-time">12:30pm</p>
        <h2 class="day-title">The ceremony</h2>
        <p>It'll be mostly standing, with a few seats for anyone who'd like one.</p>
        <img src="/Milla&TomsWedding/images/ceremony.jpg" alt="Tom carrying Milla in front of a mural" class="day-photo day-photo-portrait day-photo-tilt" width="1200" height="1600" />
      </li>

      <li class="day-journey day-reveal">
        <p class="day-time">1:20pm train</p>
        <h2 class="day-title">All aboard</h2>
        <div class="day-train-track" aria-hidden="true">
          <svg class="day-train" viewBox="0 0 330 70" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#4A2418" stroke-width="3">
              <rect x="4" y="12" width="100" height="40" rx="10" fill="#2462B4" />
              <rect x="112" y="12" width="100" height="40" rx="6" fill="#2462B4" />
              <path d="M220 12 h70 q30 0 34 30 v10 h-104 z" fill="#2462B4" />
              <rect x="16" y="22" width="22" height="14" rx="3" fill="#E8A93D" />
              <rect x="44" y="22" width="22" height="14" rx="3" fill="#E8A93D" />
              <rect x="72" y="22" width="22" height="14" rx="3" fill="#E8A93D" />
              <rect x="124" y="22" width="22" height="14" rx="3" fill="#E8A93D" />
              <rect x="152" y="22" width="22" height="14" rx="3" fill="#E8A93D" />
              <rect x="180" y="22" width="22" height="14" rx="3" fill="#E8A93D" />
              <rect x="232" y="22" width="22" height="14" rx="3" fill="#E8A93D" />
              <path d="M266 22 h26 q14 0 18 14 h-44 z" fill="#f2f4ea" />
              <circle cx="26" cy="58" r="7" fill="#1e1f20" />
              <circle cx="82" cy="58" r="7" fill="#1e1f20" />
              <circle cx="134" cy="58" r="7" fill="#1e1f20" />
              <circle cx="190" cy="58" r="7" fill="#1e1f20" />
              <circle cx="242" cy="58" r="7" fill="#1e1f20" />
              <circle cx="298" cy="58" r="7" fill="#1e1f20" />
            </g>
            <path d="M236 40 c0 -6 -9 -6 -9 0 c0 4 9 9 9 9 c0 0 9 -5 9 -9 c0 -6 -9 -6 -9 0 z" fill="#D63F7B" stroke="#4A2418" stroke-width="1.5" transform="translate(24 -4) scale(0.9)" />
          </svg>
        </div>
        <p>We'll all walk to Royal Park Station together and catch the 1:20pm train two stops to Brunswick. Tap on with your myki, bank card or phone.</p>
        <img src="/Milla&TomsWedding/images/all-aboard.jpg" alt="Tom and Milla on a boat" class="day-photo" width="1600" height="1200" />
      </li>

      <li class="day-stop day-lunch day-reveal">
        <h2 class="day-title">A long lunch</h2>
        <svg class="day-glasses" viewBox="0 -8 120 90" aria-hidden="true">
          <g class="day-glass day-glass-l">
            <path d="M30 10 h20 l-3 32 q-7 6 -14 0 z" fill="#f2f4ea" stroke="#4A2418" stroke-width="2.5" />
            <path d="M32.5 22 h15 l-1.8 19 q-5.7 4.5 -11.4 0 z" fill="#E8A93D" />
            <line x1="40" y1="45" x2="40" y2="72" stroke="#4A2418" stroke-width="2.5" />
            <ellipse cx="40" cy="74" rx="10" ry="3" fill="#4A2418" />
          </g>
          <g class="day-glass day-glass-r">
            <path d="M70 10 h20 l-3 32 q-7 6 -14 0 z" fill="#f2f4ea" stroke="#4A2418" stroke-width="2.5" />
            <path d="M72.5 22 h15 l-1.8 19 q-5.7 4.5 -11.4 0 z" fill="#E8A93D" />
            <line x1="80" y1="45" x2="80" y2="72" stroke="#4A2418" stroke-width="2.5" />
            <ellipse cx="80" cy="74" rx="10" ry="3" fill="#4A2418" />
          </g>
          <path class="day-sparkle" d="M60 -4 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" fill="#E8A93D" />
        </svg>
        <p class="day-place">Hotel Railway, 291&ndash;293 Albert St, Brunswick</p>
        <p>Right next to Brunswick Station. Good food, good drinks and a few speeches.</p>
        <p><a class="day-map-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Railway+291+Albert+St+Brunswick+VIC" target="_blank" rel="noopener">Open in Google Maps &#8594;</a></p>
        <img src="/Milla&TomsWedding/images/lunch.jpg" alt="Tom and Milla laughing at a long lunch" class="day-photo day-photo-portrait day-photo-tilt" width="1200" height="1600" />
      </li>

      <li class="day-journey day-walk day-reveal">
        <div class="day-petals" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="day-time">Before sunset</p>
        <h2 class="day-title">The walk home</h2>
        <p>We'll stroll together along Albert St, through Clifton Park, Brunswick Park and A.G. Gillon Oval. Keep an eye out for a few surprises along the way.</p>
        <img src="/Milla&TomsWedding/images/walking.jpg" alt="Milla and Tom on a bushwalk lookout" class="day-photo" width="1600" height="1200" />
      </li>

      <li class="day-stop day-celebrate day-reveal">
        <p class="day-time">Sunset till late</p>
        <h2 class="day-title">Party at ours</h2>
        <p class="day-place">Our home, 133 Pearson St, Brunswick West</p>
        <p>Pizza van, desserts, and a big celebration into the night. Come ready to dance.</p>
        <p><a class="day-map-link" href="https://www.google.com/maps/search/?api=1&query=133+Pearson+St+Brunswick+West+VIC" target="_blank" rel="noopener">Open in Google Maps &#8594;</a></p>
        <img src="/Milla&TomsWedding/images/celebrate.jpg" alt="Milla and Tom at a festival" class="day-photo day-photo-portrait day-photo-tilt" width="1200" height="1600" />
        <img src="/Milla&TomsWedding/images/house-reno.jpg" alt="Milla and Tom renovating their house" class="day-photo" width="1600" height="1029" />
        <p class="day-caption">We've been busy getting it ready for you!</p>
      </li>

    </ol>

    <div class="day-laser-trigger" aria-hidden="true"></div>
    <h2 class="rsvp-form-heading">Good to know</h2>

    <div class="rsvp-info-box day-reveal">
      <p class="info-detail">Dress code</p>
      <p>Semi-formal but fully-fun!</p>
      <div class="rsvp-info-divider"></div>
      <p class="info-detail">Adults only</p>
      <p>We kindly ask this be an adult-only affair.</p>
      <div class="rsvp-info-divider"></div>
      <p class="info-detail">Wear comfy shoes</p>
      <p>There's a fair bit of walking (and dancing), so pick shoes you'll be happy in all day.</p>
      <div class="rsvp-info-divider"></div>
      <p class="info-detail">Getting around</p>
      <p>We'll be moving between places all day, so a train, tram or Uber to Royal Park is the easiest way to start.</p>
      <p>If you'd rather come by car, there's plenty of parking close to each venue.</p>
      <div class="rsvp-info-divider"></div>
      <p class="info-detail">Weather</p>
      <p>If the forecast looks rough in the week before, we'll be in touch with any changes.</p>
      <div class="rsvp-info-divider"></div>
      <p class="day-gift">Your presence is truly the greatest gift. If you'd like to contribute to our future adventures together, there will be a wishing well at our home.</p>
    </div>
    <div class="day-fx-trigger" aria-hidden="true"></div>

  </div>

  <!-- Open space at the end so the night-time bokeh can be seen -->
  <div class="day-finale">
    <p class="rsvp-sign-off">See you there! Milla &amp; Tom &#10084;</p>
  </div>

</div>

<script>
{% include js/day-lasers.js %}
</script>

<script>
{% include js/day-bokeh-bounce.js %}
</script>

<script>
(function() {
  // Lasers fire as "Good to know" comes into view, then the bokeh starts bouncing once its bottom
  // arrives, so the shared wedding script's confetti at the very bottom isn't needed here. Its
  // showConfetti() declaration runs after this page's scripts, so it's switched off once loaded
  window.addEventListener('load', function() { window.showConfetti = function() {}; });

  if (!('IntersectionObserver' in window)) return;

  // Runs onArrive when the marker scrolls into view, and onLeave when you scroll back up above it
  function whenReached(selector, onArrive, onLeave) {
    var marker = document.querySelector(selector);
    if (!marker) return;
    var fired = false;
    new IntersectionObserver(function(entries) {
      var entry = entries[0];
      if (entry.isIntersecting) {
        if (fired) return;
        fired = true;
        onArrive();
      } else if (entry.boundingClientRect.top > 0) {
        fired = false;
        if (onLeave) onLeave();
      }
    }).observe(marker);
  }

  whenReached('.day-laser-trigger', window.dayLasers.fire);
  whenReached('.day-fx-trigger', window.dayBokeh.start, window.dayBokeh.stop);
})();
</script>

<script>
(function() {
  var encoded = new URLSearchParams(window.location.search).get('s');
  if (!encoded) return;
  var decoded;
  try { decoded = decodeURIComponent(escape(atob(encoded))); } catch(e) { return; }
  if (!decoded) return;
  document.getElementById('day-hero-names').textContent = decoded;
  document.getElementById('day-greeting').hidden = false;
})();
</script>

<script>
(function() {
  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sky = document.querySelector('.day-sky');

  // ── Sky [top, bottom] at noon, lunch, the walk, the party, the end of "Good to know", and the end ──
  // Lunch stays gold so the peach sunset only arrives with the walk
  var colours = [['#2A5A94', '#689ACB'], ['#2F5A8E', '#D9A86C'], ['#3A1E44', '#D9785E'], ['#0A0614', '#1A0A1C'], ['#030105', '#070308'], ['#030105', '#070308']];

  // ── Stars ─────────────────────────────────────────────────────
  var starsEl = document.querySelector('.day-stars');
  for (var i = 0; i < 90; i++) {
    var star = document.createElement('i');
    var size = Math.random() < 0.15 ? 3 : 2;
    star.style.left = (Math.random() * 100) + '%';
    star.style.top = (Math.random() * 70) + '%';
    star.style.width = star.style.height = size + 'px';
    star.style.animationDelay = (-Math.random() * 4) + 's';
    starsEl.appendChild(star);
  }

  // ── Bokeh: out-of-focus party lights, matched to the invitation's bokeh photo ──
  // Mostly amber and gold, with teal, blue and violet, clustered low against the dark
  var bokehEl = document.querySelector('.day-bokeh');
  var bokehColours = [
    '255, 154, 31', '255, 154, 31', '255, 200, 50', '255, 200, 50', '232, 130, 20',
    '24, 200, 216', '46, 139, 255', '122, 60, 255', '60, 200, 106'
  ];
  for (var j = 0; j < 22; j++) {
    var dot = document.createElement('i');
    var d = 90 + Math.random() * 170;
    var soft = Math.random() < 0.55;
    if (soft) dot.className = 'soft';
    dot.style.width = dot.style.height = d + 'px';
    dot.style.left = (Math.random() * 100 - 8) + '%';
    dot.style.top = (42 + Math.pow(Math.random(), 0.7) * 55) + '%';
    dot.style.setProperty('--c', bokehColours[Math.floor(Math.random() * bokehColours.length)]);
    dot.style.setProperty('--dx', ((Math.random() - 0.5) * 50) + 'px');
    dot.style.setProperty('--dy', ((Math.random() - 0.5) * 36) + 'px');
    dot.style.animationDuration = (14 + Math.random() * 14) + 's';
    dot.style.animationDelay = (-Math.random() * 28) + 's';
    bokehEl.appendChild(dot);
  }

  // ── Keyframes tied to where each part of the day sits on the page ──
  var keyframes = [
    { el: 'start',                                  stars: 0,    bokeh: 0 },
    { el: document.querySelector('.day-lunch'),     stars: 0,    bokeh: 0 },
    { el: document.querySelector('.day-walk'),      stars: 0.15, bokeh: 0 },
    { el: document.querySelector('.day-celebrate'), stars: 1,    bokeh: 0.4 },
    // Fully lit by the time the bottom of "Good to know" arrives, when the bokeh starts bouncing
    { el: document.querySelector('.day-fx-trigger'), stars: 1,   bokeh: 1, edge: true },
    { el: 'end',                                    stars: 1,    bokeh: 1 }
  ];

  function measure() {
    keyframes.forEach(function(k) {
      if (k.el === 'start') k.y = window.innerHeight / 2;
      else if (k.el === 'end') k.y = Math.max(document.documentElement.scrollHeight - window.innerHeight / 2, keyframes[keyframes.length - 2].y || 0);
      else {
        var r = k.el.getBoundingClientRect();
        // Edge keyframes land when the element reaches the bottom of the screen, not the middle
        k.y = r.top + window.scrollY + (k.edge ? -window.innerHeight / 2 : r.height / 2);
      }
    });
  }

  function hexToRgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
  function mix(a, b, t) {
    var x = hexToRgb(a), y = hexToRgb(b);
    return 'rgb(' + x.map(function(v, i) { return Math.round(v + (y[i] - v) * t); }).join(',') + ')';
  }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function updateSky() {
    var y = window.scrollY + window.innerHeight / 2;
    var n = keyframes.length - 1;
    var i = 0;
    while (i < n - 1 && y > keyframes[i + 1].y) i++;
    var a = keyframes[i], b = keyframes[i + 1];
    var t = b.y > a.y ? Math.min(Math.max((y - a.y) / (b.y - a.y), 0), 1) : 0;
    var s = sky.style;
    s.setProperty('--sky-top', mix(colours[i][0], colours[i + 1][0], t));
    s.setProperty('--sky-bottom', mix(colours[i][1], colours[i + 1][1], t));
    s.setProperty('--stars-opacity', lerp(a.stars, b.stars, t));
    s.setProperty('--bokeh-opacity', lerp(a.bokeh, b.bokeh, t));
  }

  var ticking = false;
  window.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() { updateSky(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', function() { measure(); updateSky(); });
  window.addEventListener('load', function() { measure(); updateSky(); });
  measure();
  updateSky();

  // ── Fade in on scroll ──
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  if (!reduced) root.classList.add('day-reveal-on');
  document.querySelectorAll('.day-reveal').forEach(function(el) { observer.observe(el); });
})();
</script>

{% endinclude_html %}
