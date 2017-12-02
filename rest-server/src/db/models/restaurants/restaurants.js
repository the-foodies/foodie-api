module.exports = (Sequelize, DataTypes) => {
  const Restaurants = Sequelize.define('Restaurants', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Restaurants.associate = (models) => {
    Restaurants.belongsToMany(models.Users, {
      through: 'restaurants_users',
    });
    Restaurants.belongsToMany(models.Categories, {
      through: 'categories_restaurants',
    });
    Restaurants.belongsToMany(models.Subscriptions, {
      foreignKey: { allowNull: true },
      through: 'restaurants_subscriptions',
    });
  };

  return Restaurants;
};
