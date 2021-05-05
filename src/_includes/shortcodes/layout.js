var spiel_and_piccy = function(spiel, piccy, width_percent) {
        return `<div>
        <img class="spiel_and_piccy_r__piccy" src=${piccy} style="width:${width_percent}% !important;">
        <div class="spiel_and_piccy__spiel">
            <p>${spiel}</p>
        </div>
        </div>`
    }

var piccy_and_spiel = function(spiel, piccy, width_percent) {
    return `<div>
      <img class="spiel_and_piccy_l__piccy" src=${piccy} style="width:${width_percent}% !important;">
      <div class="spiel_and_piccy__spiel">
        <p>${spiel}</p>
      </div>
    </div>`
  }

var detail_summary_drop_down = function(content, summary) {
    return `<details open><summary>${summary}</summary>${content}</details>`;
  }

module.exports = {
    spiel_and_piccy,
    piccy_and_spiel,
    detail_summary_drop_down,   
}