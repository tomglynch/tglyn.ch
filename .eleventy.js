const path = require("path");
const inputDir = "src";


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

  return {
    dir: {
      input: inputDir
    },
  };
};







