import db from '../../'

const addRecipeComment = async (user, recipe, { title, text }) => {
  await db.Comments.create({
    title,
    text,
    RecipeId: user,
  });
};

export default addRecipeComment;
