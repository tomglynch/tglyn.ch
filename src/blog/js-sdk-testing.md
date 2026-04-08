---
title: "JS SDK Testing"
blurb: "JS SDK Testing"
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
    s.src = 'https://app.toocan-staging.com/sdk/qz.js';
    document.head.appendChild(s);
  })();
</script>

<button onclick="Quarterzip.launchZip()">Launch Zip</button>
<button onclick="Quarterzip.open({ agent_id: 'qwpbgz', user: { email: 'jane@company.com', name: 'Jane Smith', id: 'your_internal_user_id' } })">Open qwpbgz staging github</button>
<button onclick="Quarterzip.open({ agent_id: 'wi6lxe', user: { email: 'jane@company.com', name: 'Jane Smith', id: 'your_internal_user_id' } })">Open wi6lxe prod github</button>
<button onclick="Quarterzip.close()">Close</button>
