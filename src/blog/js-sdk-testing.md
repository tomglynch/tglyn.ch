---
title: "JS SDK Testing"
blurb: "JS SDK Testing"
date: 2026-04-02
image: "/blog/images/blog_generic.jpg"
published: true
unlisted: true
minimal: true
---

<style>
  .sdk-buttons { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0; }
  .sdk-buttons button { padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; cursor: pointer; font-size: 13px; }
  .sdk-buttons button:hover { background: #f0f0f0; }
  .sdk-close { background: #fee; border-color: #faa !important; }
  #active-sdk { font-weight: bold; color: #c00; }
</style>

<script>
  function loadAndOpen(baseUrl, filename, agentId) {
    var old = document.getElementById('qz-sdk-script');
    if (old) old.remove();

    var q = [];
    window.Quarterzip = {
      _q: q,
      open: function(args) { q.push(['open', args]); },
      close: function(args) { q.push(['close', args]); },
    };

    Quarterzip.open({ agent_id: agentId, user: { email: 'jane@company.com', name: 'Jane Smith', id: 'test-user-123' } });

    var s = document.createElement('script');
    s.id = 'qz-sdk-script';
    s.async = true;
    s.src = baseUrl + '/sdk/' + filename + '?cachebust=' + Date.now();
    document.head.appendChild(s);
    document.getElementById('active-sdk').textContent = s.src + ' → ' + agentId;
  }

  function closeSDK() {
    if (window.Quarterzip && window.Quarterzip.close) {
      Quarterzip.close();
    }
  }
</script>

**Active:** <code id="active-sdk">none</code>

<button class="sdk-close" onclick="closeSDK()">Close Panel</button>

## Local Dev (localhost:5173/sdk/qz.development.js)

<div class="sdk-buttons">
<button onclick="loadAndOpen('http://localhost:5173', 'qz.development.js', 'ii2rsb')">ii2rsb (dev)</button>
<button onclick="loadAndOpen('http://localhost:5173', 'qz.development.js', 'qwpbgz')">qwpbgz (staging)</button>
<button onclick="loadAndOpen('http://localhost:5173', 'qz.development.js', 'wi6lxe')">wi6lxe (prod)</button>
</div>

## Staging (app.toocan-staging.com/sdk/qz.staging.js)

<div class="sdk-buttons">
<button onclick="loadAndOpen('https://app.toocan-staging.com', 'qz.staging.js', 'ii2rsb')">ii2rsb (dev)</button>
<button onclick="loadAndOpen('https://app.toocan-staging.com', 'qz.staging.js', 'qwpbgz')">qwpbgz (staging)</button>
<button onclick="loadAndOpen('https://app.toocan-staging.com', 'qz.staging.js', 'wi6lxe')">wi6lxe (prod)</button>
</div>

## Prod (app.quarterzip.ai/sdk/qz.js)

<div class="sdk-buttons">
<button onclick="loadAndOpen('https://app.quarterzip.ai', 'qz.js', 'ii2rsb')">ii2rsb (dev)</button>
<button onclick="loadAndOpen('https://app.quarterzip.ai', 'qz.js', 'qwpbgz')">qwpbgz (staging)</button>
<button onclick="loadAndOpen('https://app.quarterzip.ai', 'qz.js', 'wi6lxe')">wi6lxe (prod)</button>
</div>
