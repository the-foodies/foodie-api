import { getRecipeById, createUserRecipe } from "../db/controllers/";

const recipeController = {
  postRecipe: async (req, res) => {
    const userId = req.session.user.id;
    const recipe = req.body;
    const newRecipe = await createUserRecipe(userId, recipe);
    res.send(newRecipe);
  },

  getRecipe: async (req, res) => {
    const recipeId = req.query.id;
    const recipe = await getRecipeById(recipeId);
    res.send(recipe);
  },
};

export default recipeController;
