import Request from "./requests";
const translateReq = new Request("https://libretranslate.de/translate");

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

export default translate;
