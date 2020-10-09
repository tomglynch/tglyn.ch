---
title: home
tags: ['menu']
layout: default.liquid
---

# Hello world!
## This is my index page

layout is: {{layout}}

blog_index is: {{blog_index}}

about_index is: {{about_index}}


all menu items: 
{% for item in collections.menu %}
- [{{item.data.title}}]({{item.url}})
{% endfor %}



All pages:
{% for item in collections.all  %}
- [{{item.data.title}}]({{item.url}})
{% endfor %}