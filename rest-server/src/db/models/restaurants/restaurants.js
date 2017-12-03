module.exports = (Sequelize, DataTypes) => {
  const Restaurants = Sequelize.define('Restaurants', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetAddress1: DataTypes.STRING,
    streetAddress2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Restaurants.associate = (models) => {
    Restaurants.belongsToMany(models.Users, {
      through: 'restaurants_users',
    });
    Restaurants.belongsToMany(models.Categories, {
      through: 'categories_restaurants',
    });
  };

  return Restaurants;
};
