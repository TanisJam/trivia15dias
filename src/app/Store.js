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

  editPlayerData(data) {
    const thisData = this.getPlayerData();
    const newData = Object.assign({}, thisData, data);
    this.savePlayerData(newData);
  }

  wipePlayerData() {
    localStorage.removeItem("player");
  }
}
