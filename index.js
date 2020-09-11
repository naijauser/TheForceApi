const ExpressLoader = require('./loaders/Express');
const connection = require('./config/database');

connection.connect((err) => {
  if (err) {
    console.log(`Error connecting to the database: ${err}`);
    return;
  }

  console.log(`Database connected: ${connection.threadId}`);
  const ExpressLoader = require('./loaders/Express');
  new ExpressLoader();
});