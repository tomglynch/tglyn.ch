const path = require("path");
const inputDir = "src";

const { DateTime } = require("luxon");


function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    console.log(vals)
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/components.js");
  eleventyConfig.setTemplateFormats(["md", "js", "liquid", "css", "jpg", "png"]); // include css and js to watch and reload on save
  // eleventyConfig.addPassthroughCopy(path.join(inputDir, "css"));
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addShortcode("spiel_and_piccy", function(spiel, piccy) {
    return `<div class="user">
        <div class="spiel">${spiel}</div>
        <img src=${piccy} alt="Italian Trulli">
        </div>`
  });

  eleventyConfig.addShortcode("social_link", function(url, social_network) {
    return `<div class="socials">
        <a href="${url}"><img src=../icons/${social_network}.png alt="${social_network}"></a>
        </div>`
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  return {
    dir: {
      input: inputDir
    },
  };
};







