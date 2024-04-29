---
layout: pages/page.liquid
title: about
tags: ['menu']
order: 2
---
**[Casual]**

{% assign spiel = "Hey everyone, I'm Tom and I'm a software engineer by trade but I also do a lot of other cool things so don't get too hung up on that. They include tinkering with and riding bikes on all terrains, visual DJ sets (only using youtube and chrome), watching pro cycling and trying to get involved when race organisers make mistakes, finding websites that seem insecure and trying to poke holes in them and trying to go viral on the internet. 

Below you'll find links to my social profiles and my resume in both web version (globe icon) and PDF (document icon) formats. Feel free to reach out if you think we could collaborate on something interesting! If you're curious about my technical background, scroll down for the more formal bio I wrote in third person (because that's what professionals do, right?)." %}
{% assign piccy = "./images/photo_of_me_tom_lynch.jpg" %}

{% spiel_and_piccy spiel, piccy, 40 %}

{% include components/socials_list %}

**[Professional]**

{% assign spiel = "Tom is an experienced Software Engineering Manager with a proven track record of leading high-performing teams and delivering complex, scalable software solutions. 

With a deep skill set in architecting and implementing microservices-based systems, Tom excels at leveraging modern design patterns and best practices to create resilient, secure, and user-friendly applications. He brings a keen eye for identifying and mitigating security vulnerabilities and consistently drives technical direction while mentoring engineers and fostering a culture of continuous improvement. 

In his spare time, Tom enjoys building, riding, and racing bicycles, creating audio-visual DJ sets, and blogging." %}
{% assign piccy = "./images/photo_of_me_tom_lynch_2024.jpg" %}

{% piccy_and_spiel spiel, piccy, 50 %}