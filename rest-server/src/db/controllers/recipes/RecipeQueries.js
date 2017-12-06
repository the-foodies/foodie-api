const db = require('../../index');

module.exports = {
  getRecipeById: async (id) => {
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
  },
};
