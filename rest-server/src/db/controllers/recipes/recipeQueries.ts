import db from '../../';

const getRecipeById = async (id) => {
  const recipe = await db.Recipes.findOne({
    where: {
      id,
    },
  }).then((data) => {
    return {
      title: data.dataValues.title,
      fat: data.dataValues.fat,
      calories: data.dataValues.calories,
      protein: data.dataValues.protein,
      rating: data.dataValues.rating,
      sodium: data.dataValues.sodium,
    };
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
