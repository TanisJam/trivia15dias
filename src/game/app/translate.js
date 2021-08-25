import Request from "./requests";
const translateReq = new Request("https://libretranslate.de/translate");

function decodeText(text) {
  const htmlText = document.createElement("textarea");
  htmlText.innerHTML = text;
  const quotReplaced = htmlText.innerText.replace(/&quot;/g, '\\"');
  const ampReplaced = quotReplaced.replace(/&amp;/g, " ");
  const andReplaced = ampReplaced.replace(/&/g, " ");
  return andReplaced;
}

async function translate(question) {
  const preguntaEN = [
    decodeText(question.category),
    "·",
    decodeText(question.question),
    "·",
    decodeText(question.correct),
    "·",
    decodeText(question.incorrect_1),
    "·",
    decodeText(question.incorrect_2),
    "·",
    decodeText(question.incorrect_3),
  ];

  const method = "POST";
  const body = JSON.stringify({
    q: preguntaEN.toString(),
    source: "en",
    target: "es",
  });
  const headers = { "Content-Type": "application/json" };
  const respuesta = await translateReq.getData({ method, body, headers });
  const arrES = respuesta.translatedText.replace(/,/g, " ").split("·");
  const preguntaES = {
    category: arrES[0],
    question: arrES[1],
    correct: arrES[2],
    incorrect_1: arrES[3],
    incorrect_2: arrES[4],
    incorrect_3: arrES[5],
  };

  return preguntaES;
}

export default translate;
