export default class Store {
  savePlayerData(playerData) {
    localStorage.setItem("player", JSON.stringify(playerData));
  }

  getPlayerData() {
    if (localStorage.getItem("player") === null) {
      return false;
    }
    let data = JSON.parse(localStorage.getItem("player"));
    return data;
  }

  wipePlayerData() {
    localStorage.removeItem("player");
  }
}
