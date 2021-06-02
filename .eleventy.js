const path = require("path");
const inputDir = "src";

const { DateTime } = require("luxon");
const dotenv = require('dotenv').config();

const { JSDOM } = require('jsdom');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const layout = require('./src/_includes/shortcodes/layout');
const embed = require('./src/_includes/shortcodes/embed');

function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    // console.log(vals.sort((a, b) => Math.sign(a.data.order - b.data.order)))
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

var stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']
function remove_stopwords(str) {
    res = []
    words = str.split(' ')
    for(i=0;i<words.length;i++) {
       word_clean = words[i].split(".").join("")
       if(!stopwords.includes(word_clean)) {
           res.push(word_clean)
       }
    }
    return(res.join(' '))
}  



function dice_coefficient(l, r) {
  if (l.length < 2 || r.length < 2) return 0;

  let lBigrams = new Map();
  for (let i = 0; i < l.length - 1; i++) {
    const bigram = l.substr(i, 2);
    const count = lBigrams.has(bigram)
      ? lBigrams.get(bigram) + 1
      : 1;

    lBigrams.set(bigram, count);
  };

  let intersectionSize = 0;
  for (let i = 0; i < r.length - 1; i++) {
    const bigram = r.substr(i, 2);
    const count = lBigrams.has(bigram)
      ? lBigrams.get(bigram)
      : 0;

    if (count > 0) {
      lBigrams.set(bigram, count - 1);
      intersectionSize++;
    }
  }

  return (2.0 * intersectionSize) / (l.length + r.length - 2);
}



function mostRelated(values, basedOn) {
  let vals = [...values];
  for (i in vals) {
    var dc = dice_coefficient(basedOn,vals[i].data.content)
    vals[i]['dc'] = dc 
  }
  vals.sort((a, b) => (a.dc < b.dc) ? 1 : -1)
  vals.shift()
  // remove itself
  console.log("HEKEFKELFJ")
  for (i in vals){
    console.log(vals[i].data.title, vals[i].dc)
  }
  

  return vals
}



function removeUnpublished(values) {
  let vals = [...values];
  for (i in vals) {
    if(vals[i].data.published == false){
      vals.pop(i)
    }
  }
  return vals
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
  eleventyConfig.addFilter("mostRelated", mostRelated);
  
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







