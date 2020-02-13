const request = require('request');
let address = 'https://api.thecatapill.com/v1/breeds/search?q=';
const args = process.argv;
const result = args.slice(2);
address += result;

request(address, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log("The breed is not found.");
  } else {
    console.log(data[0]['description']);
  }
});