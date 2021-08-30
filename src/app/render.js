import $ from "jquery";
import Store from "./Store.js";
const store = new Store();
const diff = [
  "Muy facil",
  "Facil",
  "Intermedio",
  "Dificil",
  "Muy dificil",
  "Imposible",
];

const render = {
  player(playerData) {
    const htmlPersonaje =
      require("html-loader!./../partials/personaje.html").default;
    $("#opciones").html(htmlPersonaje);
    $("#nombre").text(playerData.name);
    $("#avatar").addClass(`sprite-${playerData.avatar}`);
    $.each(playerData.medallas, (propName, propValue) => {
      for (let index = 0; index < propValue; index++) {
        const medal = $(`<div class="star ${propName}"></div>`);
        $(".medallero").append(medal);
      }
    });

    $("#dificultad").text(diff[playerData.difficulty]);
    $("#jugar").on("click", () => {
      location = "./game.html";
    });
    $("#editar").on("click", () => this.edit(playerData));
  },
  options() {
    const htmlOpciones =
      require("html-loader!./../partials/opciones.html").default;
    $("#opciones").html(htmlOpciones);
    $("#guardar").on("click", () => {
      let name = $("#form-name").val();
      let difficulty = $("#form-dificulty").val();
      let avatar = $("#avatar > .active").attr("value");
      let data = {
        name: name,
        difficulty: difficulty,
        avatar: avatar,
      };
      if (name !== "") {
        store.savePlayerData(data);
      }
    });
  },
  edit(playerData) {
    const htmlEdit = require("html-loader!./../partials/edit.html").default;
    $("#opciones").html(htmlEdit);
    $(`div[value=${playerData.avatar}]`).addClass("active");
    $("#form-name").val(playerData.name);
    $(`option[value=${playerData.difficulty}]`).prop("selected", true);

    $("#guardar").on("click", () => {
      let name = $("#form-name").val();
      let difficulty = $("#form-dificulty").val();
      let avatar = $("#avatar > .active").attr("value");
      let data = {
        name: name,
        difficulty: difficulty,
        avatar: avatar,
      };
      if (name !== "") {
        store.editPlayerData(data);
      }
    });

    $("#eliminar").on("click", () => {
      store.wipePlayerData();
    });
  },
};

export default render;
