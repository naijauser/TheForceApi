const response = require('../middlewares/response');
const connection = require('../config/database');
// const commentService = require('../services/Comments');

class CommentController {
  addComment (req, res) {

    const { movieId, comment } = req.body;

    if (movieId == undefined) res.status(400).send(response.errorResponse(400, 'Please insert movie id in body'));
    if (comment == undefined) res.status(400).send(response.errorResponse(400, 'Please insert comment in body'));

    connection.query("INSERT INTO `comments` (`movie_id`, `comment`, \
      `public_ip`) VALUES ('" + movieId + "', '" + comment + "', '" + req.ip + "')", 
         (error, results, fields) => {
            if (error) {
                console.log(error.message);
                res.status(400).send(response.errorResponse(400, error.message));
            } 

            if (results) {
                res.status(201).send(response.successResponse(201, 'Comment inserted'));
            }
        });
  }

  getComment (req, res) {
    const { movieId } = req.params;

    connection.query("SELECT SUBSTRING(`comment`, 1, 500) as comment, `public_ip`, `created_at` FROM `comments`  WHERE `movie_id` = " + movieId + " ORDER BY  `created_at` DESC", 
      (error, results, fields) => {
        if (error) {
          console.log(error.message);
          res.status(400).send(response.errorResponse(400, error.message));
        } 

        if (results) {
          res.status(200).send(response.successResponse(200, 'Comments returned', results));
        }
    });
  }
}

module.exports = new CommentController();