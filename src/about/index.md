---
layout: pages/page.liquid
title: about
tags: ['menu']
order: 2
---

{% assign spiel = "Hey everyone, I'm Tom and I'm a software engineer by trade but I also do a lot of other cool things so don't get too hung up on that. They include tinkering with and riding bikes on all terrains, visual DJ sets (only using youtube and chrome), watching pro cycling and trying to get involved when race organisers make mistakes, finding websites that seem insecure and trying to poke holes in them and trying to go viral on the internet. 

Just below this, I'll pop a little list of links to social media sites and my resume and stuff. Feel free to have a look, and get in touch if you think I'm doing cool things and you'd like to work together. Further down is my more boring work blurb that I wrote one time (in third person lol) if you want to know a touch more about my technical skills but the resume pdf links aren't working or something." %}
{% assign piccy = "./images/photo_of_me_tom_lynch.jpg" %}

{% spiel_and_piccy spiel, piccy, 40 %}

{% include components/socials_list %}

{% assign spiel = "Tom is an experienced software engineer with a background in web development, statistical analysis and machine learning. Completing his Bachelor of Science (Mechanical Systems), Master of Engineering (Software) at the University of Melbourne, Tom worked for the past six years in web-based development roles, launching cryptocurrency start-ups, building a price comparator of the Australian energy industry and using machine learning to increase the accuracy of property valuations." %}
{% assign piccy = "./images/photo_of_me_tom_lynch_looking_pretty_cool_if_you_ask_me.jpg" %}

{% piccy_and_spiel spiel, piccy, 40 %}