const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b667095b0841b0',
  password: 'c617b351',
  database: 'heroku_3dcb0517de7a6d1'
});

module.exports = connection;