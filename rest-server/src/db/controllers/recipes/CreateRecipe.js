const db = require('../../index');

const createRecipe = async ({ title, fat, calories, protein, rating, sodium }) => {
  await db.Recipes.create({
    title,
    fat,
    calories,
    protein,
    rating,
    sodium,
  });
};

const addRecipeToUser = async (recipe, user) => {
  createRecipe(recipe).then((newRecipe) => {
    newRecipe.setUser(user);
  });
};

module.exports = addRecipeToUser;
