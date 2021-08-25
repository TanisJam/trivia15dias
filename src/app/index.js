import render from "./render.js";
import Store from "./Store.js";
const store = new Store();

const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");
if (pageName === "") {
  if (store.getPlayerData()) {
    const playerData = store.getPlayerData();
    render.player(playerData);
  } else {
    render.options();
  }
}
