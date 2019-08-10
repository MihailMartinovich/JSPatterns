import Db from './db';
import types from '../Constants/types';

const DEFAULT_PORT = 3306;

class MySql extends Db {
  constructor(connectionUrl, username, password) {
    super(username, password, types.MY_SQL);

    this._url = `${connectionUrl}:${DEFAULT_PORT}`;
  }

  connect() {
    const options = {};

    this.makeConnection(this._url, options);
  }
}

export default MySql;