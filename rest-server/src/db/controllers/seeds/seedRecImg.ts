import * as request from 'request-promise';
import * as fs from 'fs';

const recipes = require('../../seedData/recImagesFuller.json');
// const restaurants = require('../../seedData/restaurants.json');

const seedImages = async () => {
  const newRecs = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const query = recipe.title.trim() + ' recipe';
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
          ...recipe,
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
            ...recipe,
            imageURL: null,
          };
        }
      }
    }
    const rec = await tryGet(options, true);
    newRecs.push(rec);
  }
  return newRecs;
}
seedImages()
  .then((recImages) => {
    const json = JSON.stringify(recImages);
    fs.writeFile('../../seedData/recImagesFullest.json', json, () => {
      console.log('wrote it ', recImages[0]);
    });
  })
