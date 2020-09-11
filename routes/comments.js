const route = require('express').Router();
const commentsController = require('../controllers/commentController');

route.get('/test', (req, res) => {
  res.send('you have hit the comments route');
})

route.post('/', commentsController.addComment);
route.get('/:movieId', commentsController.getComment);

module.exports = route;