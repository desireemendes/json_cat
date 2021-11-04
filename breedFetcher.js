const request = require('request');

const fetchBreedDescription = function(breedName, cb) {
  request('https://api.thecatapi.com/v1/breeds', function(requestError, response, body) {
    let error = null;

    if (requestError) {
      cb([requestError, response], null);
      return;
    }

    if (!breedName) {
      error = "Invalid";
      cb(error, null);
      return;
    }
    const data = JSON.parse(body);
    let catNames = [];
    for (const cat of data) {
      catNames.push(cat.name.toLowerCase());
    }

    breedName = breedName.toLowerCase();

    if (breedName === "list") {
      const description = catNames;
      cb(null, description);
      return;
    }
    if (catNames.includes(breedName)) {
      const cats = catNames.indexOf(breedName);
      const description = data[cats].description;
      cb(null, description);
    } else {
      error = "Breed not found";
      cb(error, null);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };