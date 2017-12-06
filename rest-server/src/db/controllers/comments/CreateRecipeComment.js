const db = require('../../index');

const addRecipeComment = async (user, recipe, { title, text }) => {
  await db.Comments.create({
    title,
    text,
    RecipeId: user,
  });
};

module.exports = addRecipeComment;
