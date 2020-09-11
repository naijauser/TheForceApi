const response = require('../middlewares/response');
const connection = require('../config/database');
const axios = require('axios');
const config = require('../config/index')
const utils = require('../utils')

class CharacterController {
  getCharacters (req, res) {
    const { sort_by, gender, sort_type, page_number } = req.query;

    const url = config.characterListUrl + `?page=${page_number ? page_number : 1}`;
    
    axios.get(url)
      .then((rawData) => {
        let data = rawData.data.results;
        
        if (sort_by === 'name') {
          data = utils.sortByName(data, sort_type);
        } 

        if (sort_by === 'height') {
          data = utils.sortByHeight(data, sort_type);
        } 

        data = utils.sortByGender(data, gender);

        const { totalHeightcm, totalHeightft } = utils.getTotalHeight(data);

        res.status(200).send( response.successResponse(200, 'Characters data returned', 
          { 
            record_count: data.length, 
            totalHeightcm, 
            totalHeightft, 
            data }));
        })
      .catch((error) => {
        console.log(error.message);
        res.status(400).send(response.errorResponse(400, error.message));
      });
  }
}

module.exports = new CharacterController();