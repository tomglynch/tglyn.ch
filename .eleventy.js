const path = require("path");
const inputDir = "src";

const { DateTime } = require("luxon");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/components.js");
  eleventyConfig.setTemplateFormats(["md", "js", "liquid", "css", "jpg", "png", "svg", "pdf"]); // include css and js to watch and reload on save
  // eleventyConfig.addPassthroughCopy(path.join(inputDir, "css"));
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addShortcode("spiel_and_piccy", function(spiel, piccy, width_percent) {
    return `<div>
      <img class="spiel_and_piccy_r__piccy" src=${piccy} style="width:${width_percent}% !important;">
      <div class="spiel_and_piccy__spiel">
        <p>${spiel}</p>
      </div>
    </div>`
  });

  eleventyConfig.addShortcode("piccy_and_spiel", function(spiel, piccy, width_percent) {
    return `<div>
      <img class="spiel_and_piccy_l__piccy" src=${piccy} style="width:${width_percent}% !important;">
      <div class="spiel_and_piccy__spiel">
        <p>${spiel}</p>
      </div>
    </div>`
  });

  eleventyConfig.addShortcode("social_link", function(url, social_network) {
    return `<a href="${url}" target="_blank" class="fa fa-${social_network}"></a>`
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: inputDir
    },
  };
};







