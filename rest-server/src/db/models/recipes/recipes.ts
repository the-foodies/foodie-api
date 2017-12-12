module.exports = (Sequelize, DataTypes) => {
  const Recipes = Sequelize.define('Recipes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fat: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    sodium: DataTypes.INTEGER,
    commentCount: DataTypes.INTEGER,
  });

  Recipes.associate = (models) => {
    Recipes.belongsToMany(models.Users, {
      through: 'recipes_users',
    });
    Recipes.belongsToMany(models.Tags, {
      through: 'tags_recipes',
    });
    Recipes.hasMany(models.Directions);
    Recipes.hasMany(models.Ingredients);
    Recipes.hasMany(models.ImagesRecipes);
    Recipes.hasMany(models.Comments);
  };

  return Recipes;
};
