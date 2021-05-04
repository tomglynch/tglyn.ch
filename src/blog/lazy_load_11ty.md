---
title: "Simplest way to add Lazy Loading in 11ty"
blurb: "After a blog post of mine blew up, I was quickly heading towards Netlify's bandwidth limits. Lazy Loading images is an easy solution to decrease your bandwidth usage."
image: "/files/tomlynch.png"
date: 2021-05-04
published: true
---


I've built this site with [11ty](https://www.11ty.dev/), a static site generator that has been a pleasure to work with. By running 11ty in the background and following their folder structure, the website is instantly generated upon any change you make. And when I push my code to GitHub, Netlify is watching and instantly deploys. All in all, it really lowers the friction of making changes. 

After a blog post of mine blew up on [the](https://twitter.com/Tompid/status/1387461964708855813) [internet](https://news.ycombinator.com/item?id=26970854), I was quickly heading towards Netlify's bandwidth limits. Lazy Loading images is an easy solution to decrease your bandwidth usage.

While there are many ways to implement Lazy Loading, the simplest is adding the attribute ```"loading"="lazy"``` to your image tags. But I struggled to easily find a way to do this in 11ty, so I'm writing this post to pass what I figured out on. BTW, this is now supported by nearly all modern browsers.

# How 11ty works

11ty takes the files of your choosing, such as markdown or liquid template files and converts them into HTML. This part it quite opaque - I'm not sure what converts the ```# Heading``` into ```<h1>Heading</h1>```. And the HTML generated is what is served by Netlify.

# How to add lazy loading

So I figured I could try and work out how image tags were written to HTML but this was too much of a deep dive. But instead I found the addTransform functionality, which allows the outputted HTML to be grabbed and edited before being written to the .html output files.

To do so, first you'll need to install jsdom via npm: 
```js
npm install jsdom
```

Then add the following into your ```.eleventy.js``` file:

```js
const { JSDOM } = require('jsdom')

module.exports = function(eleventyConfig) {

  eleventyConfig.addTransform(
      'lazy-load-images',
      (content, outputPath) => {
          if (outputPath.endsWith('.html')) {
              const dom = new JSDOM(content)
              const document = dom.window.document

              const [...images] = document.getElementsByTagName(
                  'img'
              )

              images.forEach((image) => {
                  image.setAttribute('loading', 'lazy')
              })

              return document.documentElement.outerHTML
          } else {
              return content
          }
      })
};
```

# How this works

Jsdom is a tool which allows you to emulate the use of a web browser in node.js, so you can perform actions similar to a user in the browser. So using this, we pop the content into jsdom to give us the html document that we can iterate through. Then we get all images using getElementsByTagName, and set an attribute (```"loading": "lazy"```) on each, before returning what we have changed.

I found this solution much lighter weight than installing one of the many 11ty plugins that offers lazy loading, and also simpler to get up and running (well, now that I know how it all works). 