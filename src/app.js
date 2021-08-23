import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import $ from 'jquery';

import "./main.css";
import "./styles/sprites.css";
import Store from './app/Store.js';
const store = new Store();

import "./game/app/game"


$("#Guardar").click((e) => {
  e.preventDefault();
  let name = $("#form-name").val();
  let difficulty = $("#form-dificulty").val();
  let avatar = $("#avatar > .active").attr("value");
  let data = {
    name: name,
    difficulty: difficulty,
    avatar: avatar,
  };
  console.log('enviar:', data)
  store.savePlayerData(data);
  location = './game.html';
});
