---
layout: pages/page.liquid
title: about
tags: ['menu']
---

{% assign spiel = "this is spiel" %}
{% assign piccy = "./images/photo_of_me_tom_lynch.jpg" %}

{% spiel_and_piccy spiel, piccy %}
{% social_link "https://twitter.com/lynchyeatspizza", "twitter" %}

{% include components/socials_list %}