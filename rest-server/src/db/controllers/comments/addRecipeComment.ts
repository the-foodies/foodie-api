import db from '../../'

const addRecipeComment = async ({ user, poster, recipe, comment }) => {
  const addedComment = await db.Comments.create({
    text: comment.text,
    RecipeId: recipe.id,
    UserId: user.id,
    posterId: poster.id,
  });
  db.Recipes.increment('commentCount', { where: { id: recipe.id } });
  return addedComment;
};

export default addRecipeComment;
