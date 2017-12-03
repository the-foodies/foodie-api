module.exports = (Sequelize, DataTypes) => {
  const Recipes = Sequelize.define('Recipes', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fat: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    sodium: DataTypes.INTEGER,
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
