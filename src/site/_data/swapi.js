const axios = require("axios");

module.exports = async function () {
  // ex on how to call external apis
  // remember you can add data files to subdirs
    const url = "https://swapi.dev/api/people/1"
    try {
        const response = await axios.get(url);
        // console.log(response.data);
        return response.data
      } catch (error) {
        // console.error(error);
      }

};

{{1, 2, 3, 4, 5, 6},
 {1, 2, 3},
 {1, 2, 3, 4, 5},
 {1},
 {1, 2, 3, 4, 5, 6, 7, 8, 9}}
