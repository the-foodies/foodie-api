import db from '../../';
import { addRestaurantComment, addRecipeComment } from '../';

const randUser = (1 + Math.floor(Math.random() * 5));
const randPoster = (1 + Math.floor(Math.random() * 5));

const seedComments = (async () => {
  const restaurants = await db.Restaurants.findAll({
    include: [
      { model: db.Users }
    ],
    raw: true
  });
  restaurants.forEach(restaurant => {
    addRestaurantComment({ id: (1 + Math.floor(Math.random() * 4)) }, { id: restaurant['Users.id'] }, restaurant, 'this is a rest comment');
  });

  const recipes = await db.Recipes.findAll({
    include: [
      { model: db.Users }
    ],
    raw: true
  });
  recipes.forEach(recipe => {
    addRecipeComment({ id: (1 + Math.floor(Math.random() * 4)) }, { id: recipe['Users.id'] }, recipe, 'this is a recipe comment');
  });
})();
