---
layout: default.liquid
title: home
tags: ['menu']
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



Other pages:
{% for item in collections.not_a_menu_page %}
- [{{item.data.title}}]({{item.url}})
{% endfor %}