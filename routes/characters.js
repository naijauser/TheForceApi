const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('you have hit the characters route');
})

module.exports = route;