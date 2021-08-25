import $ from "jquery";
const htmlPregunta = require("html-loader!./../partials/pregunta.html").default;

export default class UI {
  render(pregunta, area) {
    area.html(htmlPregunta);
    $("#categoria").text(pregunta.category);
    $("#pregunta").text(pregunta.question);
    $("#respuesta-1").text(pregunta.correct);
    $("#respuesta-2").text(pregunta.incorrect_1);
    $("#respuesta-3").text(pregunta.incorrect_2);
    $("#respuesta-4").text(pregunta.incorrect_3);
  }
}
