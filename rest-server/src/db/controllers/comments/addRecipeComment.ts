import db from '../../'

const addRecipeComment = async ({ user, poster, recipe, text }) => {
  await db.Comments.create({
    text,
    RecipeId: recipe.id,
    UserId: user.id,
    posterId: poster.id,
  });
};

export default addRecipeComment;
