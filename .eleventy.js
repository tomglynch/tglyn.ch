const path = require("path");
const inputDir = "src";

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats("md", "css", "js"); // include css and js to watch and reload on save
  // eleventyConfig.addPassthroughCopy(path.join(inputDir, "favicons"));
  // eleventyConfig.addPassthroughCopy(path.join(inputDir, "js"));
  eleventyConfig.addPassthroughCopy(path.join(inputDir, "css"));
  // eleventyConfig.addPassthroughCopy(path.join(inputDir, "fonts"));
  // eleventyConfig.addPassthroughCopy(path.join(inputDir, "img"));

  return {
    dir: {
      input: inputDir
    },
  };
};