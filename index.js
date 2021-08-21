function saveData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}
function getData() {
  let data = JSON.parse(localStorage.getItem("data"));
  return data;
}

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
  saveData(data);
});
