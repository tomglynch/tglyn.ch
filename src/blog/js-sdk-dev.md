---
title: "JS SDK Test: Dev Dev"
blurb: "SDK dev script + dev agent"
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
    s.src = 'http://localhost:5173/sdk/qz.development.js';
    document.head.appendChild(s);
  })();
</script>

<button onclick="Quarterzip.open({ agentId: 'ii2rsb', workspaceToken: 'abc123', user: { email: 'jane@company.com', displayName: 'Jane Smith', id: 'test-user-123' } })">Open Agent (ii2rsb dev)</button>
<button onclick="Quarterzip.close()">Close</button>
