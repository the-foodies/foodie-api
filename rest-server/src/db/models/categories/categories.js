module.exports = (Sequelize, DataTypes) => {
  const Categories = Sequelize.define('Categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Categories.associate = (models) => {
    Categories.belongsToMany(models.Restaurants, {
      through: 'categories_restaurants',
    });
    Categories.belongsToMany(models.Recipes, {
      through: 'categories_recipes',
    });
  };

  return Categories;
};
