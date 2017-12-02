module.exports = (Sequelize, DataTypes) => {
  const Restaurants = Sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Restaurants.associate = (models) => {
    Restaurants.belongsToMany(models.Users, {
      through: 'restaurants_users',
    });
  };

  Restaurants.associate = (models) => {
    Restaurants.belongsToMany(models.Categories, {
      through: 'categories_restaurants',
    });
  };

  Restaurants.associate = (models) => {
    Restaurants.belongsToMany(models.Subscriptions, {
      foreignKey: { allowNull: true },
      through: 'restaurants_subscriptions',
    });
  };

  return Restaurants;
};