const connection = require('../config/database');

class Comments {
  getSingleComment (params) {
    const { movieId } = params;

    connection.query("SELECT SUBSTRING(`comment`, 1, 500) as comment, `public_IP`, `created_at` FROM `comments`  WHERE `movie` = " + movieId + " ORDER BY  `created_at` DESC", 
      (error, results, fields) => {
        if (error) {
          console.log(error.message);
          return { success: null, error: error.message}
        //   res.status(400).send(response.errorResponse(400, error.message));
        } 

        if (results) {
          return { success: results, error: null}
        //   res.status(200).send(response.successResponse(200, 'Comments returned', results));
        }
    });
    
  }

  addComment (data) {
    const { movieId, comment } = data.body;
    let result;
    connection.query("INSERT INTO `comments` (`movie`, `comment`, \
      `public_IP`) VALUES ('" + movieId + "', '" + comment + "', '" + data.ip + "')", 
         (error, results, fields) => {
            if (error) {
                // console.log(error.message);
                result = { success: null, error: error.message };
                // res.status(400).send(response.errorResponse(400, error.message));
            } 

            if (results) {
                result = { success: results, error: null};
                console.log(result);
                // res.status(201).send(response.successResponse(201, 'Comment inserted'));
            }
        });
        console.log('here');
    return result;
  }

}

module.exports = new Comments();