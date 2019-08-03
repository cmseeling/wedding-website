require('dotenv').config();
const fs = require('fs');

console.log('Prebuild started. Gathering environment variables.');

const sqlOptions = {
  host: process.env.SQL_HOST,
  port: 3306,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: process.env.SQL_DATABASE
};

fs.writeFileSync('./src/lambdas/mysql/config.ts', `export default ${JSON.stringify(sqlOptions)};`);
