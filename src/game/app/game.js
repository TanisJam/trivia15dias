import $ from "jquery";
import Request from "./requests";
const triviaReq = new Request("https://opentdb.com/api.php?amount=10&type=multiple");
const translateReq = new Request("https://libretranslate.de/translate");
import GameUI from "./gameUI";
const htmlPregunta = require("html-loader!./../partials/pregunta.html").default;

let preguntas;

async function loadTrivias() {
  const respuesta = await triviaReq.getData();
  preguntas = respuesta.results;
  
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
  const preguntaResp = preguntaES.translatedText.replace(/,/g, ' ').split("·");
  $('#area-pregunta').html(htmlPregunta);  
  
  const gameUI = new GameUI();
  gameUI.render(preguntaResp);
}

async function translate(string) {
  const method = "POST";
  const body = JSON.stringify({
    q: string,
    source: "en",
    target: "es",
  });
  const headers = { "Content-Type": "application/json" };
  const respuesta = await translateReq.getData(method, body, headers);
  return respuesta;
}


function decodeText(text) {
  const htmlText = document.createElement("textarea");
  htmlText.innerHTML = text;
  const quotReplaced = htmlText.innerText.replace(/&quot;/g, '\\"');
  const ampReplaced = quotReplaced.replace(/&amp;/g, ' ');
  const andReplaced = ampReplaced.replace(/&/g, ' ');
  return andReplaced;
}


const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");
if (pageName === "game") {
  loadTrivias();
}