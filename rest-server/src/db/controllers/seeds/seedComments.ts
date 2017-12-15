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
    const user = {
      id: (1 + Math.floor(Math.random() * 4)),
    };
    const poster = {
      id: restaurant['Users.id'],
    };
    const comment = {
      text: 'this is a rest comment', 
    };
    addRestaurantComment({
      user,
      poster,
      restaurant,
      comment,
    });
  });

  const recipes = await db.Recipes.findAll({
    include: [
      { model: db.Users }
    ],
    raw: true
  });
  recipes.forEach(recipe => {
    const user = {
      id: (1 + Math.floor(Math.random() * 4)),
    };
    const poster = {
      id: recipe['Users.id'],
    };
    const comment = {
      text: 'this is a rest comment', 
    };
    addRecipeComment({
      user,
      poster,
      recipe,
      comment,
    });
  });
})();
