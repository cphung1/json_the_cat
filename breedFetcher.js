const request = require('request');
let address = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  request(`${address}${breedName}`, (error, response, body) => {
    if(error) {
      callback(error, null)
    }
    const data = JSON.parse(body);
    if(!data[0]) {
      callback(error, null);
    } else (
      // console.log(data[0].description)
      callback(null, data[0].description.trim())
    )
     
  });
};

module.exports = { fetchBreedDescription };