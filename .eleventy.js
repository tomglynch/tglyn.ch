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

  eleventyConfig.addPairedShortcode("myShortcode", function(content, summary) {
    // Method A: ✅ This works fine
    return `<details open><summary>${summary}</summary>${content}</details>`;
  });

  // future edition, have sections that fold up

  // eleventyConfig.addShortcode("sd_start_summary_details", function(y_id){
  //     return `<details open><summary>`
  // });
  // eleventyConfig.addShortcode("sd_start_summary_details_close", function(y_id){
  //     return `<details close><summary>`
  // });
  // eleventyConfig.addShortcode("sd_end_summary_details", function(y_id){
  //     return `</summary>`
  // });
  // eleventyConfig.addShortcode("sd_end_details", function(y_id){
  //     return `</details>`
  // });


  eleventyConfig.addShortcode("youtube", function(y_id){
      return `<div style="position: relative;
              width: 100%;
              height: 0;
              padding-bottom: 56.25%; margin-bottom: 1rem;">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${y_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;" allowfullscreen></iframe>
              </div>`
  });

  eleventyConfig.addShortcode("streamable", function(s_id) {
      return `<div style="height: 0px; position: relative; padding-bottom: 56.250%;">
                <iframe src="https://streamable.com/e/${s_id}" frameborder="0" allowfullscreen style="
                height: 100%; 
                width: 100%;
                position: absolute;"></iframe>
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







