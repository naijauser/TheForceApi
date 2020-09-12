const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/index');
const response = require('../middlewares/response');
const PORT = process.env.PORT || 3000;

class ExpressLoader {
  constructor () {
    const app = express();

    app.use(bodyParser.json());
    app.use(routes);
    app.use('*', ExpressLoader.invalidRoute);
    app.use(ExpressLoader.errorHandler);

    app.listen(PORT, () => {
      console.log('App listening on port 3000');
    });
  }

  static errorHandler (err, req, res, next) {
    console.log(err);

    res.status(500).send(response.errorResponse(500, 'An error occured'));
  }

  static invalidRoute (req, res) {
    res.status(404).send(response.errorResponse(404, 'Oops! This route does not exist'));
  }
}

module.exports = ExpressLoader;