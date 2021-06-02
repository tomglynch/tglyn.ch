var stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']

var remove_stopwords = function(str) {
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



var dice_coefficient = function(l, r) {
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



var mostRelated = function(values, basedOn) {
  let vals = [...values];
  for (i in vals) {
    let string_to_compare = vals[i].fileSlug + ' ' + vals[i].data.title + ' ' + vals[i].data.blurb + ' ' + vals[i].data.image
    var dc = dice_coefficient(basedOn,string_to_compare)
    vals[i]['dc'] = dc 
  }
  vals.sort((a, b) => (a.dc < b.dc) ? 1 : -1)
    
  // remove itself
  vals.shift()  

  // log similarity ratings
  // for (i in vals){
  //   console.log(vals[i].data.title, vals[i].dc)
  // }

  return vals
}

module.exports = {
    mostRelated,
}