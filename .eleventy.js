const path = require("path");
const inputDir = "src";

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["md", "js", "liquid", "css"]); // include css and js to watch and reload on save
  // eleventyConfig.addPassthroughCopy(path.join(inputDir, "css"));
  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: inputDir
    },
  };
};