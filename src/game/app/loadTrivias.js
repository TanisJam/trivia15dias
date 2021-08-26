import Request from "./requests";
const triviaReq = new Request("https://opentdb.com/api.php");
const dificulty = {
  dificil: "?amount=8&difficulty=hard&type=multiple",
  media: "?amount=8&difficulty=medium&type=multiple",
  facil: "?amount=8&difficulty=easy&type=multiple",
};

async function loadTrivias() {
  const respDificil = await triviaReq.getData({ params: dificulty.dificil });
  const respMedia = await triviaReq.getData({ params: dificulty.media });
  const respFacil = await triviaReq.getData({ params: dificulty.facil });

  const d = respDificil.results;
  const m = respMedia.results;
  const f = respFacil.results;
  const preguntas = { d, m, f };
  return preguntas;
}

export default loadTrivias;
