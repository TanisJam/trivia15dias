import loadTrivias from "./loadTrivias.js";
import Store from "./../../app/Store";
const store = new Store();

const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");

if (pageName === "game") {
  if (store.getPlayerData()) {
    loadTrivias();
  } else {
    location = "./";
  }
}
