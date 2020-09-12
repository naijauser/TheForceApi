const axios = require('axios');
const response = require('../middlewares/response');
const config = require('../config/index');
const connection = require('../config/database');

class MovieController {
  getMovie (req, res) {
    const { movieId } = req.params;
    const url = config.singleMovieUrl.replace('<id>', movieId);

    
    axios.get(url)
      .then((result) => {        
        const { title, opening_crawl, release_date } = result.data;
        
        const data = { title, opening_crawl, release_date };

        connection.query("SELECT COUNT(`comment`) as comment_count FROM `comments` WHERE `movie_id` = " + movieId, 
          (error, results, fields) => {
            if (error) {
                console.log(error.message);
                res.status(400).send(response.errorResponse(400, error.message));
            } 
            if (results) {
                data.comment_count = results[0].comment_count;
                res.status(200).send(response.successResponse(200, 'Film returned', data));
            }
        });
      }).catch((error) => {
        console.log(error.message);
        res.status(400).send(response.errorResponse(400, error.message))
      });
  }

  getMovies (req, res) {
      
    axios.get(config.movieListUrl)
      .then((result) => {
        const sortedData = result.data.results.sort((a, b) => {
          return Date.parse(a.release_date) - Date.parse(b.release_date)
        });

        res.status(200).send(response.successResponse(200, 'Films returned', sortedData));
      })
      .catch((error) => {
        console.log(error.message);
        res.status(400).send(response.errorResponse(400, error.message));
      });
  }
}

module.exports = new MovieController();