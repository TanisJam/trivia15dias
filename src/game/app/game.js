import loadTrivias from "./loadTrivias.js";
import translate from "./translate.js";
import $ from "jquery";
import Store from "./../../app/Store.js";
const store = new Store();
import GameUI from "./gameUI";
const gameUI = new GameUI();

import Player from "./Player.js";
let player = false;
if (store.getPlayerData()) player = new Player(store.getPlayerData());

const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");

async function run() {
  if (player) {
    if (player.getQuestion()) {
      const question = player.getQuestion();
      const questionES = await translate(question);
      gameUI.renderTop(
        questionES,
        $("#area-pregunta"),
        player.checkQuestion.bind(player)
      );
      let imgs = ['https://i.imgur.com/sFq0wAC.jpeg'];
      gameUI.renderBottom(imgs, player.progress)
    } else {
      player.setQuestions(await loadTrivias());
      const playerData = player.getData();
      console.log(playerData);
      store.savePlayerData(playerData);
      location = "./game.html";
    }
  } else {
    location = "./";
  }
}

if (pageName === "game") {
  run();
}
