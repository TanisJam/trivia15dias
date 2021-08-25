import $ from "jquery";
import GameUI from "./gameUI";
import Request from "./requests";
const triviaReq = new Request(
  "https://opentdb.com/api.php?amount=10&type=multiple"
);
import translate from "./translate.js";
const htmlPregunta = require("html-loader!./../partials/pregunta.html").default;

function decodeText(text) {
  const htmlText = document.createElement("textarea");
  htmlText.innerHTML = text;
  const quotReplaced = htmlText.innerText.replace(/&quot;/g, '\\"');
  const ampReplaced = quotReplaced.replace(/&amp;/g, " ");
  const andReplaced = ampReplaced.replace(/&/g, " ");
  return andReplaced;
}

async function loadTrivias() {
  const respuesta = await triviaReq.getData();
  const preguntas = respuesta.results;

  const preguntaEN = [
    decodeText(preguntas[0].category),
    "·",
    decodeText(preguntas[0].question),
    "·",
    decodeText(preguntas[0].correct_answer),
    "·",
    decodeText(preguntas[0].incorrect_answers[0]),
    "·",
    decodeText(preguntas[0].incorrect_answers[1]),
    "·",
    decodeText(preguntas[0].incorrect_answers[2]),
  ];
  const preguntaES = await translate(preguntaEN.toString());
  const preguntaResp = preguntaES.translatedText.replace(/,/g, " ").split("·");
  $("#area-pregunta").html(htmlPregunta);

  const gameUI = new GameUI();
  gameUI.render(preguntaResp);
}

export default loadTrivias;
