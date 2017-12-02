module.exports = (Sequelize, DataTypes) => {
  const Recipes = Sequelize.define('Recipes', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fat: DataTypes.STRING,
    calories: DataTypes.STRING,
    protein: DataTypes.STRING,
    rating: DataTypes.STRING,
    sodium: DataTypes.STRING,
  });

  Recipes.associate = (models) => {
    Recipes.belongsToMany(models.Users, {
      through: 'recipes_users',
    });
    Recipes.belongsToMany(models.Categories, {
      through: 'categories_recipes',
    });
    Recipes.belongsToMany(models.Ingredients, {
      through: 'ingredients_recipes',
    });
    Recipes.hasMany(models.Directions);
    Recipes.hasMany(models.ImagesRecipes);
  };

  return Recipes;
};
