module.exports = (Sequelize, DataTypes) => {
  const Ingredients = Sequelize.define('Ingredients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Ingredients.associate = (models) => {
    Ingredients.belongsTo(models.Recipes, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
  };

  return Ingredients;
};
