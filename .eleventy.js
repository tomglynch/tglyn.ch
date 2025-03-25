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

// Add new function to filter out unlisted posts from listings
function removeUnlisted(values) {
  let vals = [];
  for (let i = 0; i < values.length; i++) {
    if (!values[i].data.unlisted) {
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
  

  eleventyConfig.setTemplateFormats(["md", "js", "liquid", "css", "jpg", "png", "gif", "svg", "pdf"]); // include css and js to watch and reload on save
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
  eleventyConfig.addShortcode("vimeo", embed.vimeo);

  eleventyConfig.addShortcode("social_link", function(url, social_network) {
    return `<a href="${url}" target="_blank" class="fa fa-${social_network}"></a>`
  });

  eleventyConfig.addShortcode("callout", function(text) {
    // Get the markdown library instance we configured earlier
    const md = this.page.mdInst || markdownLib;
    
    // Process the text parameter through the markdown renderer
    const renderedText = md.renderInline(text);
    
    // Replace the inline styles for links to make them light blue
    const link = renderedText.replace(/<a /g, '<a style="color:rgb(227, 125, 0);" ');
    
    return `<div style="position: relative; background-color: #f0f0f0; padding: 15px; margin: 0 20px 20px 20px; border-radius: 8px; overflow: hidden;">
      <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background-color: rgb(227, 125, 0);"></div>
      <p style="margin: 0 0 0 10px; display: flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(227, 125, 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 10px; flex-shrink: 0;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span style="flex-grow: 1; font-size: 0.9rem;">${link}</span>
      </p>
    </div>`;
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("sortByOrder", sortByOrder);
  eleventyConfig.addFilter("removeUnpublished", removeUnpublished);
  eleventyConfig.addFilter("removeUnlisted", removeUnlisted);
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







