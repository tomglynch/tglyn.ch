---
title: "JS SDK Test: Prod Prod"
blurb: "SDK prod script + prod agent"
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
    s.src = 'https://app.quarterzip.ai/sdk/qz.js';
    document.head.appendChild(s);
  })();
</script>


<style>
  .sdk-btn { display: inline-block; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-family: 'Avenir', sans-serif; font-weight: 600; transition: opacity 0.15s; }
  .sdk-btn:hover { opacity: 0.85; }
  .sdk-btn-open { background: #F58800; color: #fff; }
  .sdk-btn-close { background: #051821; color: #fff; margin-left: 8px; }
</style>

<button class="sdk-btn sdk-btn-open" onclick="Quarterzip.open({ agentId: 'wi6lxe', workspaceToken: 'f9JWIcg19cjfhyxHBE', user: { email: 'jane@company.com', displayName: 'Jane Smith', id: 'test-user-123' } })">Open Agent (wi6lxe prod)</button>
<button class="sdk-btn sdk-btn-close" onclick="Quarterzip.close()">Close</button>