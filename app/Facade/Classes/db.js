

class Db {
  constructor(username, password, type) {
    this._connectionId = null;
    this._type = type;
    this._username = username;
    this._password = password;
  }

  get type() {
    return this._type.description;
  }

  makeConnection(url, options) {
    this._connectionId = Db.idGenerator.next().value;
    
    console.log(`Connection ${this.type} to ${url} established with id ${this._connectionId},
      using ${this._username}/${this._password}`);
  }

  static idGenerator = (function*() {
    while(true) {
      yield ++Db.currentId;
    }
  })()
}

Db.currentId = 0;

export default Db;