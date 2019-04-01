import app from "firebase/app";
import "firebase/database";

const config = {
  databaseURL: "https://football-players-b31f2.firebaseio.com"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  players() {
    return this.db.ref("players");
  }
}

export default Firebase;
