const db = require('../../index');

const createUserRecipe = async ({ title, fat, calories, protein, rating, sodium }, user) => {
  await db.Recipes.create({
    title,
    fat,
    calories,
    protein,
    rating,
    sodium,
  }).then((newRecipe) => {
    newRecipe.addUser(user);
  });
};

module.exports = createUserRecipe;
