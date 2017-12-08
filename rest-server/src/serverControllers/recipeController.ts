import { getUserRecipes, createUserRecipe } from "../db/controllers/";

const recipeController = {
  postRecipe: async (req, res) => {
    const userId = req.session.user.id;
    const recipe = req.body;
    const newRecipe = await createUserRecipe(userId, recipe);
    res.send(newRecipe);
  },

  getRecipes: async (req, res) => {
    const userId = req.session.user.id;
    const recipes = await getUserRecipes(userId);
    res.send(recipes);
  },
};

export default recipeController;
