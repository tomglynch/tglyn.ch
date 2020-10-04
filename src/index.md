---
layout: default.liquid
title: home
namet: tom
tags: ['menu']
---

# Hello world!
This is my index page

{{layout}}

{{namet}}

{{blog_index}}

{{about_index}}


{% for item in collections.menu %}

- [{{item.data.title}}]({{item.url}})

{% endfor %}



Other pages

{% for item in collections.not_a_menu_page %}

- [{{item.data.title}}]({{item.url}})

{% endfor %}