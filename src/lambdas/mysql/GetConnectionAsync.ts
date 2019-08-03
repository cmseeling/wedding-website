import mysql from 'promise-mysql';
import config from './config';

export const getConnectionAsync = async () => {
  return await mysql.createConnection(config);
};
