module.exports = (Sequelize, DataTypes) => {
  const ImagesRecipes = Sequelize.define('ImagesRecipes', {
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
  });

  ImagesRecipes.associate = (models) => {
    ImagesRecipes.belongsTo(models.Recipes, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
  };

  return ImagesRecipes;
};
