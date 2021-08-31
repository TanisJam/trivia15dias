import loadTrivias from "./loadTrivias.js";
import translate from "./translate.js";
import imageRequest from "./imageRequest.js";
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
      gameUI.renderProgress(player.progress);
      const correctAnswer = player.currentQuestion.correct_answer;
      const imgs = await imageRequest(correctAnswer);
      gameUI.renderBottom(imgs);
      const question = player.getQuestion();
      const questionES = await translate(question);
      gameUI.renderTop(
        questionES,
        $("#area-pregunta"),
        player.checkQuestion.bind(player)
      );
    } else {
      player.setQuestions(await loadTrivias());
      const playerData = player.getData();
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


