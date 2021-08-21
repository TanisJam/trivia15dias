let board = [
  [0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 2, 0, 3, 0],
  [1, 0, 2, 2, 2, 0, 3],
  [0, 1, 1, 2, 0, 3, 0],
  [0, 0, 0, 1, 1, 0, 0],
];

board.forEach((row, y) => {
  let rowDiv = $('<div class="row d-flex justify-content-around"></div>');
  row.forEach((col, x) => {
    let iconoClass = "icono-vacio";
    let iconoId = "" + x + y;
    let iconoContent = "";

    if (col !== 0) {
      if (col === 1) iconoClass = "icono-facil";
      if (col === 2) iconoClass = "icono-medio";
      if (col === 3) iconoClass = "icono-dificil";
	  iconoContent = '?';
    }
    let colDiv = $(
      `<div class="col-1 my-3 ${iconoClass}" id=${iconoId}></div>`
    );
    let cell = $(`<div class="text-center">${iconoContent}</div>`);
    colDiv.append(cell);
    rowDiv.append(colDiv);
  });
  $("#board").append(rowDiv);
});

let connections = [
  ["02", "11"],
  ["02", "13"],
  ["11", "21"],
  ["02", "22"],
  ["13", "23"],
  ["21", "30"],
  ["21", "31"],
  ["22", "31"],
  ["22", "32"],
  ["22", "33"],
  ["23", "33"],
  ["23", "34"],
  ["30", "40"],
  ["31", "42"],
  ["32", "42"],
  ["33", "42"],
  ["34", "44"],
  ["40", "51"],
  ["42", "62"],
  ["44", "53"],
  ["51", "62"],
  ["53", "62"],
];

connections.forEach((connection) => {
  let start = $(`#${connection[0]}`)[0];
  let end = $(`#${connection[1]}`)[0];
  makeConnection(start, end);
});

function makeConnection(start, end) {
  let options = {
    path: "straight",
    startPlug: "behind",
    endPlug: "behind",
    color: "#FCFCD4",
    size: 2,
    dash: { len: 2, gap: 4 },
  };
  new LeaderLine(start, end, options);
}