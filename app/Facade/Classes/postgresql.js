import Db from './db';
import types from '../Constants/types';

const DEFAULT_PORT = 1111;

class PostgreSql extends Db {
  constructor(connectionUrl, username, password) {
    super(username, password, types.POSTGRE_SQL);

    this._url = `${connectionUrl}:${DEFAULT_PORT}`;
  }

  connect() {
    const options = {};

    this.makeConnection(this._url, options);
  }
}

export default PostgreSql;