import types from './Constants/types';
import settings from './Constants/settings';
import Orm from './Classes/orm';

const runFacadeExample = () => {
  const ormMysql = new Orm(
    settings.MY_SQL_URL,
    settings.MY_SQL_USERNAME,
    settings.MY_SQL_PASSWORD,
    types.MY_SQL,
  );
  const ormPostgresql = new Orm(
    settings.POSTGRE_SQL_URL,
    settings.POSTGRE_SQL_USERNAME,
    settings.MY_SQL_PASSWORD,
    types.POSTGRE_SQL,
  );

  ormMysql.connect();
  ormPostgresql.connect();
}

export default runFacadeExample;