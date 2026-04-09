---
title: "JS SDK Test: Dev Dev"
blurb: "SDK dev script + dev agent"
date: 2026-04-02
image: "/blog/images/blog_generic.jpg"
published: true
unlisted: true
minimal: true
---

<script>
  (function() {
    var q = [];
    window.Quarterzip = {
      _q: q,
      open: function(args) { q.push(['open', args]); },
      close: function(args) { q.push(['close', args]); },
    };
    var s = document.createElement('script');
    s.async = true;
    s.src = 'http://localhost:5173/sdk/qz.development.js';
    document.head.appendChild(s);
  })();
</script>

<style>
  .sdk-btn { display: inline-block; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-family: 'Avenir', sans-serif; font-weight: 600; transition: opacity 0.15s; }
  .sdk-btn:hover { opacity: 0.85; }
  .sdk-btn-open { background: #F58800; color: #fff; }
  .sdk-btn-close { background: #051821; color: #fff; margin-left: 8px; }
</style>

<button class="sdk-btn sdk-btn-open" onclick="Quarterzip.open({ agentId: 'ii2rsb', workspaceToken: 'abc123', user: { email: 'jane@company.com', displayName: 'Jane Smith', id: 'test-user-123' } })">Open Agent (ii2rsb dev)</button>
<button class="sdk-btn sdk-btn-close" onclick="Quarterzip.close()">Close</button>
