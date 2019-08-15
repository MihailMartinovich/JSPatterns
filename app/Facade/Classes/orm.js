import types from '../Constants/types';
import MySql from './mysql';
import PostgreSql from './postgresql';

class Orm {
  constructor(url, username, password, type) {
    this.connection = {};

    switch(type) {
      case types.MY_SQL:
        this.connection = new MySql(url, username, password);
        break;
      case types.POSTGRE_SQL:
        this.connection = new PostgreSql(url, username, password);
        break;
      default:
        this.connection = {};
        break;
    }
  }

  connect = () => {
    console.log(`ORM creates ${this.connection.type} connection.`)
    this.connection.connect();
  }
}

export default Orm;