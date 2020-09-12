const route = require('express').Router();
const movieController = require('../controllers/movieController');

route.get('/arr', movieController.getArray);

route.get('/:movieId', movieController.getMovie);
route.get('/', movieController.getMovies);

module.exports = route;