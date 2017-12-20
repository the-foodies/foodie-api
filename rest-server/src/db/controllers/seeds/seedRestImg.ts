import * as request from 'request-promise';
import * as fs from 'fs';

const restaurants = require('../../seedData/restaurants.json');

const seedImages = async () => {
  const newRests = [];
  
  for (let i = 0; i < restaurants.length; i++) {
    const { name, contact } = restaurants[i];
  
    var options = {
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search',
      qs: { q: name },
      headers: {
        'cache-control': 'no-cache',
        accept: 'application/javascript',
        'ocp-apim-subscription-key': 'e1f1d05a8fa34d97b9e1042d82042fa2'
      },
      json: true,
    };
  
    const data = await request(options);
    newRests.push({
      name,
      contact,
      imageURL: data.value[0].contentUrl
    })
  }
  return newRests;
}
seedImages()
  .then((restImages) => {
    const json = JSON.stringify(restImages);
    fs.writeFile('../../seedData/restImages.json', json, () => {
      console.log('wrote it ', restImages[0]);
    });
  })


