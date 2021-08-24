import $ from 'jquery';
import Store from './Store.js';
const store = new Store();

const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");
if (pageName === "") {
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
  
}