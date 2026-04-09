---
title: "JS SDK Test: Prod Prod"
blurb: "SDK prod script + prod agent"
date: 2026-04-02
image: "/blog/images/blog_generic.jpg"
published: true
unlisted: true
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


<button onclick="Quarterzip.open({ agentId: 'wi6lxe', workspaceToken: 'token', user: { email: 'jane@company.com', displayName: 'Jane Smith', id: 'test-user-123' } })">Open Agent (wi6lxe prod)</button>
<button onclick="Quarterzip.close()">Close</button>