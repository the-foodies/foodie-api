import * as request from 'request-promise';
import * as fs from 'fs';

const recipes = require('../../seedData/recImagesFuller.json');
// const restaurants = require('../../seedData/restaurants.json');

const seedImages = async () => {
  const newRecPromise = [];
  
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
  
    var options = {
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search',
      qs: { q: recipe.title.trim() },
      headers: {
        'cache-control': 'no-cache',
        accept: 'application/javascript',
        'ocp-apim-subscription-key': 'e1f1d05a8fa34d97b9e1042d82042fa2'
      },
      json: true,
    };
    // const tryGet = async (ops) => {
    //   try {
    //     const data = await request(ops);
    //     return {
    //       ...recipe,
    //       imageURL: data.value[0].contentUrl
    //     };
    //   } catch (error) {
    //     console.error(error)
    //     return {
    //       ...recipe,
    //       imageURL: null,
    //     };
    //   }
    // }
    
    if (recipe.imageURL) {
      newRecPromise.push(recipe);
    } else {
      const data = await request(options);
        newRecPromise.push({
          ...recipe,
          imageURL: data.value[0].contentUrl
        });
    }
  }
  return newRecPromise;
}
seedImages()
  .then((recImages) => {
    const json = JSON.stringify(recImages);
    fs.writeFile('../../seedData/recImagesFuller.json', json, () => {
      console.log('wrote it ', recImages[0]);
    });
  })


