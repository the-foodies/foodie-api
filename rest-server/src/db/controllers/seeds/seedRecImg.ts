import * as request from 'request-promise';
import * as fs from 'fs';

const recipes = require('../../seedData/recImagesFuller.json');
// const restaurants = require('../../seedData/restaurants.json');

const seedImages = async () => {
  const newRecs = [];
<<<<<<< HEAD
  
=======

>>>>>>> [feat]
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    var options = {
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search',
      qs: { q: recipe.title.trim() },
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
        return {
          ...recipe,
          imageURL: data.value[0].contentUrl
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
