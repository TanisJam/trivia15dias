import $ from "jquery";

export default class UI {
  constructor() {
    this.categoria = $("#categoria");
    this.pregunta = $("#pregunta");
    this.respuesta1 = $("#respuesta-1");
    this.respuesta2 = $("#respuesta-2");
    this.respuesta3 = $("#respuesta-3");
    this.respuesta4 = $("#respuesta-4");
  }

  render(pregunta) {
    this.categoria.text(pregunta[0]);
    this.pregunta.text(pregunta[1]);
    this.respuesta1.text(pregunta[2]);
    this.respuesta2.text(pregunta[3]);
    this.respuesta3.text(pregunta[4]);
    this.respuesta4.text(pregunta[5]);
  }
}
