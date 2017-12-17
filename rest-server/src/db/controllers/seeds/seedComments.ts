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
    const user = () => (
      {
        id: (1 + Math.floor(Math.random() * 5)),
      }
    );
    const poster = {
      id: restaurant['Users.id'],
    };
    const comments = [
      {
        text: `Great restaurant ${restaurant['Users.displayName']}`,
      },
      {
        text: `I'll have to go there! ${restaurant['Users.displayName']}`,
      },
      {
        text: `Bro beans ${restaurant['Users.displayName']} is trash`,
      }
    ];
    comments.forEach((comment) => {
      addRestaurantComment({
        user: user(),
        poster,
        restaurant,
        comment,
      });
    })
  });

  const recipes = await db.Recipes.findAll({
    include: [
      { model: db.Users }
    ],
    raw: true
  });
  recipes.forEach(recipe => {
    const user = () => (
      {
        id: (1 + Math.floor(Math.random() * 5)),
      }
    );
    const poster = {
      id: recipe['Users.id'],
    };
    const { name } = recipes;
    const comments = [
      {
        text: `Ayy I love ${name} too ${recipe['Users.displayName']}!`,
      },
      {
        text: `Best ${name} recipe!`,
      },
      {
        text: `Need to try it!`
      },
    ];
    comments.forEach((comment) => {
      addRecipeComment({
        user: user(),
        poster,
        recipe,
        comment,
      });
    })
  });
})();
