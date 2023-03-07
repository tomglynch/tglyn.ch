const path = require("path");
const inputDir = "src";

const { DateTime } = require("luxon");
const dotenv = require('dotenv').config();

const { JSDOM } = require('jsdom');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const layout = require('./src/_includes/shortcodes/layout');
const embed = require('./src/_includes/shortcodes/embed');
const filtering = require('./src/_includes/js/filtering');


function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    // console.log(vals.sort((a, b) => Math.sign(a.data.order - b.data.order)))
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}




function removeUnpublished(values) {
  let vals = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i].data.published) {
      vals.push(values[i]);
    }
  }
  return vals;
}

module.exports = (eleventyConfig) => {

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
  };
  let markdownLib = markdownIt(options).disable('code');
  eleventyConfig.setLibrary("md", markdownLib);
  

  eleventyConfig.setTemplateFormats(["md", "js", "liquid", "css", "jpg", "png", "svg", "pdf"]); // include css and js to watch and reload on save
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPairedShortcode("include_js", function(content) {
    return `<script>window.addEventListener('load', function () { ${content}})</script>`;
  });

  eleventyConfig.addPairedShortcode("include_css", function(content) {
    return `<style>${content}</style>`;
  });

  eleventyConfig.addPairedShortcode("include_html", function(content) {
    return `${content}`;
  });

  eleventyConfig.addShortcode("spiel_and_piccy", layout.spiel_and_piccy);
  eleventyConfig.addShortcode("piccy_and_spiel", layout.piccy_and_spiel);
  eleventyConfig.addPairedShortcode("detail_summary_drop_down", layout.detail_summary_drop_down);

  eleventyConfig.addShortcode("youtube", embed.youtube);
  eleventyConfig.addShortcode("streamable", embed.streamable);


  eleventyConfig.addShortcode("social_link", function(url, social_network) {
    return `<a href="${url}" target="_blank" class="fa fa-${social_network}"></a>`
  });


  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("sortByOrder", sortByOrder);
  eleventyConfig.addFilter("removeUnpublished", removeUnpublished);
  eleventyConfig.addFilter("mostRelated", filtering.mostRelated);
  
  eleventyConfig.addPlugin(syntaxHighlight);

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


  return {
    dir: {
      input: inputDir
    },
  };
};







