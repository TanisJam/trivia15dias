import $ from "jquery";
const htmlPregunta = require("html-loader!./../partials/pregunta.html").default;

export default class UI {
  constructor() {
    this.numeros = [1, 2, 3, 4];
  }
  randomPos() {
    return this.numeros.splice(
      Math.floor(Math.random() * this.numeros.length),
      1
    );
  }
  renderTop(pregunta, area, cb) {
    area.html(htmlPregunta);
    $("#categoria").text(pregunta.category);
    $("#pregunta").text(pregunta.question);
    $(`#respuesta-${this.randomPos()}`)
      .text(pregunta.correct)
      .on("click", cb)
      .attr("correct", "true");
    $(`#respuesta-${this.randomPos()}`)
      .text(pregunta.incorrect_1)
      .on("click", cb);
    $(`#respuesta-${this.randomPos()}`)
      .text(pregunta.incorrect_2)
      .on("click", cb);
    $(`#respuesta-${this.randomPos()}`)
      .text(pregunta.incorrect_3)
      .on("click", cb);
  }
  renderBottom(imgs) {
   
    $("#pista img").attr("src", imgs[0].url);
    $(".img-random img").each((i, value) => {
      if (imgs[i + 1] != undefined) {
        value.setAttribute("src", imgs[i + 1].url);
      }
    });

  }
  renderProgress(progress){
    progress.forEach((className, index) => {
      $(`#progreso-${index}`).addClass(className);
    });
  }
}
