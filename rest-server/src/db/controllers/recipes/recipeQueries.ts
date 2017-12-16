import db from '../../';

const getRecipeById = async (id) => {
  const recipe = await db.Recipes.findOne({
    where: {
      id,
    },
    include: [
      { model: db.Ingredients },
      { model: db.Directions },
      { model: db.ImagesRecipes },
      { model: db.Tags },
      { model: db.Comments,
        include: [{
          model: db.Users
        }],
      },
    ]

  });
  return recipe;
};

const getUserRecipes = async (userId) => {
  const recipes = await db.Users.findOne({
    where: {
      id: userId,
    },
    include: [{
      model: db.Recipes,
      include: [
        { model: db.Ingredients },
        { model: db.Directions },
        { model: db.ImagesRecipes },
        { model: db.Tags },
        { model: db.Comments },
      ]
    }]
  });
  return recipes;
}

export {
  getRecipeById,
  getUserRecipes,
};
