const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('you have hit the comments route');
})

route.post('/', )

module.exports = route;