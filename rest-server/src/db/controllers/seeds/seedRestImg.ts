import * as request from 'request-promise';
import * as fs from 'fs';

const restaurants = require('../../seedData/restImages.json');
// const restaurants = require('../../seedData/restaurants.json');

const seedImages = async () => {
  const newRests = [];

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const query = restaurant.name.trim() + ' restaurant';
    var options = {
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search',
      qs: { q: query },
      headers: {
        'cache-control': 'no-cache',
        accept: 'application/javascript',
        'ocp-apim-subscription-key': 'ENTER KEY HERE'
      },
      json: true,
    };
    const tryGet = async (ops, first) => {
      try {
        const data = await request(ops);
        let httpsImageUrl;
        for (let ii = 0; ii < data.value.length; ii++) {
          if (data.value[ii].contentUrl.substring(0, 5) === 'https') {
            httpsImageUrl = data.value[ii].contentUrl;
            break;
          }
        }
        return {
          ...restaurant,
          imageURL: httpsImageUrl
        };
      } catch (error) {
        if (first) {
          setTimeout(() => {
            tryGet(options, false);
          }, 1000);
        } else {
          console.error(error)
          return {
            ...restaurant,
            imageURL: null,
          };
        }
      }
    }
    const rest = await tryGet(options, true);
    newRests.push(rest);
  }
  return newRests;
}
seedImages()
  .then((restImages) => {
    const json = JSON.stringify(restImages);
    fs.writeFile('../../seedData/restImagesFullest.json', json, () => {
      console.log('wrote it ', restImages[0]);
    });
  })
