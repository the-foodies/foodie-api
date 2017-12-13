import { getRecipeById, createUserRecipe } from "../db/controllers/";

export const postRecipe = async (req, res) => {
  const userId = req.session.user.id;
  const recipe = req.body;
  const newRecipe = await createUserRecipe(userId, recipe);
  res.send({
    id: newRecipe.dataValues.id,
  });
}

export const getRecipe = async (req, res) => {
  const recipeId = req.query.id;
  const recipe = await getRecipeById(recipeId);
  res.send(recipe);
}
