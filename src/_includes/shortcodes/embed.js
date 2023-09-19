var youtube = function(y_id){
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
  };

var streamable = function(s_id) {
      return `<div style="height: 0px; position: relative; padding-bottom: 56.250%;">
                <iframe src="https://streamable.com/e/${s_id}" frameborder="0" allowfullscreen style="
                height: 100%; 
                width: 100%;
                position: absolute;"></iframe>
              </div>`
  };


var vimeo = function(v_id) {
      return `<div style="padding:62.5% 0 0 0;position:relative;">
      <iframe src="https://player.vimeo.com/video/${v_id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;">
      </iframe>
  </div>
  <script src="https://player.vimeo.com/api/player.js"></script>
      `
    }; 



module.exports = {
    youtube,
    streamable,
    vimeo,
}