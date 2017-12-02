module.exports = (Sequelize, DataTypes) => {
  const Ingredients = Sequelize.define('Ingredients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Ingredients.associate = (models) => {
    Ingredients.belongsToMany(models.Recipes, {
      through: 'ingredients_recipes',
    });
  };

  return Ingredients;
};
