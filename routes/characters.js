const route = require('express').Router();
const characterController = require('../controllers/characterController');

route.get('/test', (req, res) => {
  res.send('character here');
})

route.get('/', characterController.getCharacters)

module.exports = route;