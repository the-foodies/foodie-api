import { getUserRecipes, createUserRecipe } from "../db/controllers/";

const recipeController = {
  postRecipe: async (req, res) => {
    const userId = 1;
    const recipe = req.body;
    const newRecipe = await createUserRecipe(userId, recipe);
    res.send(newRecipe);
  },

  getRecipes: async (req, res) => {
    const userId = 1;
    const recipes = await getUserRecipes(userId);
    res.send(recipes);
  },
};

module.exports = recipeController;
