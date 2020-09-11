const route = require('express').Router();
const characterController = require('../controllers/characterController');

route.get('/', (req, res) => {
  res.send('you have hit the characters route');
})

route.get('/', characterController.getCharacters)

module.exports = route;