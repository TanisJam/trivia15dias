import $ from "jquery";
import Store from "./Store.js";
const store = new Store();

const render = {
  player(playerData) {
    const htmlPersonaje =
      require("html-loader!./../partials/personaje.html").default;
    $("#opciones").html(htmlPersonaje);
    $("#nombre").text(playerData.name);
    $("#avatar").addClass(`sprite-${playerData.avatar}`);
    $("#dificultad").text(playerData.difficulty);
    $("#jugar").on("click", () => {
      location = "./game.html";
    });
    $("#editar").on("click", () => this.edit(playerData));
  },
  options() {
    const htmlOpciones =
      require("html-loader!./../partials/opciones.html").default;
    $("#opciones").html(htmlOpciones);
    $("#guardar").on("click", (e) => {
      e.preventDefault();
      let name = $("#form-name").val();
      let difficulty = $("#form-dificulty").val();
      let avatar = $("#avatar > .active").attr("value");
      let data = {
        name: name,
        difficulty: difficulty,
        avatar: avatar,
      };
      store.savePlayerData(data);
      location = "./";
    });
  },
  edit(playerData) {
      //active
    const htmlEdit = require("html-loader!./../partials/edit.html").default;
    $("#opciones").html(htmlEdit);
    $(`div[value=${playerData.avatar}]`).addClass('active');
    $("#form-name").val(playerData.name);
    $(`option[value=${playerData.difficulty}]`).prop("selected", true)

    $("#guardar").on("click", (e) => {
      e.preventDefault();
      let name = $("#form-name").val();
      let difficulty = $("#form-dificulty").val();
      let avatar = $("#avatar > .active").attr("value");
      let data = {
        name: name,
        difficulty: difficulty,
        avatar: avatar,
      };
      store.savePlayerData(data);
      location = "./";
    });

    $("#eliminar").on("click", ()=>{
        store.wipePlayerData();
    })
  },
};

export default render;
