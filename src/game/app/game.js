import Request from "./requests";
const triviaReq = new Request("https://opentdb.com/api.php?amount=10&type=multiple");
const translateReq = new Request("https://libretranslate.de/translate");
import GameUI from "./gameUI";
const gameUI = new GameUI();

let preguntas;

async function loadTrivias() {
  const respuesta = await triviaReq.getData();
  preguntas = respuesta.results;
  //const pregunta_ = preguntas[0];

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
  console.log(preguntaResp);
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

const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");

if (pageName === "game") {
  loadTrivias();
}

function decodeText(text) {
  const htmlText = document.createElement("textarea");
  htmlText.innerHTML = text;
  let quotReplaced = htmlText.innerText.replace(/&quot;/g, '\\"');
  let ampReplaced = quotReplaced.replaceAll('&amp;', '&');
  return ampReplaced;
}
