const movieArray = require('../utils/movieCommentCountArray');

class Utils {
  sortByName(array, format) {
    if (format == undefined || format == '') return array;

    const sortedArray = array.sort((a, b) => {
      const first = a.name.toLowerCase();
      const second = b.name.toLowerCase();

      if (format == 'asc') {
        if (first < second) return -1;
        if (first > second) return 1;
        
        return 0;
      }

      if (format == 'desc') {
        if (first > second) return -1;
        if (first < second) return 1;

        return 0;
      }
    });

      return sortedArray
    }

  sortByHeight(array, format) {
    if (format == undefined || format == '') return array;

    const sortedArray = array.sort((a, b) => {
      if (format == 'asc') return a.height - b.height;
      if (format == 'desc') return b.height - a.height;
    });

    return sortedArray;
  }

  sortByGender(array, gender) {
    if (gender == undefined || gender == '') return array;
    
    if (gender != 'male' && gender != 'female') return array;

    const sortedArray = array.filter(element => {
      return element.gender === gender;
    });

    return sortedArray;
  }

  getTotalHeight (array) {
    const totalHeightcm = array.reduce((acc, curVal) => {
      return acc + parseInt(curVal.height);
    }, 0);

    const totalHeightft = parseFloat(totalHeightcm * 0.0328084);

    return { totalHeightcm, totalHeightft };
  }

  matchFilmIdToEpisodeId (episodeId) {
    switch (episodeId) {
      case 1:
        return movieArray[3];
      case 2:
        return movieArray[4];
      case 3:
        return movieArray[5];
      case 4:
        return movieArray[0];
      case 5:
        return movieArray[1];
      case 6:
        return movieArray[2];
    
      default:
        return 0;
    }
  }
}

module.exports = new Utils();