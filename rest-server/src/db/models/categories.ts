module.exports = (Sequelize, DataTypes) => {
  const Categories = Sequelize.define('Categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Categories.associate = (models) => {
    Categories.belongsToMany(models.Restaurants, { through: 'categories_restaurants'});
  };
  Restaurants.associate = (models) => {
    Restaurants.belongsToMany(models.Categories, { through: 'categories_restaurants'});
  };

  Categories.associate = (models) => {
    Categories.belongsToMany(models.Recipes, { through: 'categories_recipes'});
  };
  Recipes.associate = (models) => {
    Recipes.belongsToMany(models.Categories, { through: 'categories_recipes'});
  };

  return Categories;
}
