module.exports = (Sequelize, DataTypes) => {
  const Recipes = Sequelize.define('Recipes', {
    title: DataTypes.STRING,
    fat: DataTypes.STRING,
    calories: DataTypes.STRING,
    protein: DataTypes.STRING,
    rating: DataTypes.STRING,
    sodium: DataTypes.STRING,
  });

  Recipes.associate = (models) => {
    Recipes.belongsToMany(models.Users, {
      onDelete: 'CASCADE',
      through: 'recipes_users',
    });
  };


  Recipes.associate = (models) => {
    Recipes.belongsToMany(models.Categories, {
      through: 'categories_recipes',
    });
  };


  Recipes.associate = (models) => {
    Recipes.belongsToMany(models.Subscriptions, {
      foreignKey: { allowNull: true },
      through: 'recipes_subscriptions',
    });
  };

  return Recipes;
};
