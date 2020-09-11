const route = require('express').Router();
const movieController = require('../controllers/movieController');

route.get('/test', (req, res) => {
  res.send('you have hit the movie route');
})

route.get('/:movieId', movieController.getMovie);
route.get('/', movieController.getMovies);

module.exports = route;