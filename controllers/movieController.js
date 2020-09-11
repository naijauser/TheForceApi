const axios = require('axios');
const response = require('../middlewares/response');
const config = require('../config/index');

class MovieController {
  getMovie (req, res) {
    const { movieId } = req.params;
    const url = config.singleMovieUrl.replace('<id>', movieId);

    axios.get(url)
      .then((result) => {        
        const { title, opening_crawl, release_date } = result.data;
        
        const data = { title, opening_crawl, release_date };

        data.comment_count = 15
    
        res.status(200).send(response.successResponse(200, 'Film returned', data));

      }).catch((error) => {
        res.status(404).send(response.errorResponse(404, error.message))
      });
  }

  getMovies (req, res) {
    const { pageId } = req.params;

    axios.get(config.movieListUrl)
      .then((result) => {
        const sortedData = result.data.results.sort((a, b) => {
          return Date.parse(a.release_date) - Date.parse(b.release_date)
        });

        res.status(200).send(response.successResponse(200, 'Films returned', sortedData));
      })
      .catch((error) => {
        res.status(400).send(response.errorResponse(400, error.message));
      });
  }
}


module.exports = new MovieController();