const mysql = require('mysql');
const ExpressLoader = require('./loaders/Express');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'theforceapi'
});

connection.connect((err) => {
  if (err) {
    console.log(`Error connecting to the database: ${err}`);
    return;
  }

  console.log(`Database connected: ${connection.threadId}`);
  const ExpressLoader = require('./loaders/Express');
  new ExpressLoader();
});