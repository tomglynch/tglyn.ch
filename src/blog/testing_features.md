---
title: "testing"
blurb: "testing"
date: 2021-05-05
published: false
---
{% include_html %}<span role="img" aria-label="Snowman">😍</span>{% endinclude_html %}




{% include_css %} 
#gearbox {
    display: flex;
    justify-content: space-between;
}
#leftgear, #rightgear {
    width: 20vw;
    max-width: 20%;
    height: auto;
} 
{% endinclude_css %}

{% include_html %}
<div id="gearbox">
    <img src="../images/gear.svg" alt id="leftgear">
    <img src="../images/gear.svg" alt id="rightgear">
</div>
{% endinclude_html %}



THIS IS THE prodUrl: {{ env.prodUrl }}

