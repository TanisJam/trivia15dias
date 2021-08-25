export default class Store {
  savePlayerData(playerData) {
    playerData.questions = {}
    console.log(playerData);
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
