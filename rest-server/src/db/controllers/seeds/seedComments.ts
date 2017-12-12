import db from '../../';
import { addRestaurantComment, addRecipeComment } from '../';

const randUser = (1 + Math.floor(Math.random() * 5));
const randPoster = (1 + Math.floor(Math.random() * 5));

const seedComments = (async () => {
  const restaurants = await db.Restaurants.findAll({ raw: true });
  restaurants.forEach(restaurant => {
    addRestaurantComment({ id: (1 + Math.floor(Math.random() * 5)) }, { id: (1 + Math.floor(Math.random() * 5)) }, restaurant, 'this is a rest comment');
  });

  const recipes = await db.Recipes.findAll({ raw: true });
  restaurants.forEach(restaurant => {
    addRecipeComment({ id: (1 + Math.floor(Math.random() * 5)) }, { id: (1 + Math.floor(Math.random() * 5)) }, restaurant, 'this is a recipe comment');
  });
})();
