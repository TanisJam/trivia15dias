import Request from "./requests";
const triviaReq = new Request("https://opentdb.com/api.php");
const dificulty = {
  dificil: "?amount=6&difficulty=hard&type=multiple",
  media: "?amount=2&difficulty=medium&type=multiple",
  facil: "?amount=5&difficulty=easy&type=multiple",
};

async function loadTrivias() {
  const respDificil = await triviaReq.getData({ params: dificulty.dificil });
  const respMedia = await triviaReq.getData({ params: dificulty.media });
  const respFacil = await triviaReq.getData({ params: dificulty.facil });

  const pDificil = respDificil.results;
  const pMedia = respMedia.results;
  const pFacil = respFacil.results;
  const preguntas = { pDificil, pMedia, pFacil };
  return preguntas;
}

export default loadTrivias;
