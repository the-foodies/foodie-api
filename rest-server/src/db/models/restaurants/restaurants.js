module.exports = (Sequelize, DataTypes) => {
  const Restaurants = Sequelize.define('Restaurants', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: DataTypes.STRING,
    website: DataTypes.STRING,
  });

  Restaurants.associate = (models) => {
    Restaurants.belongsToMany(models.Users, {
      through: 'restaurants_users',
    });
    Restaurants.belongsToMany(models.Tags, {
      through: 'tags_restaurants',
    });
    Restaurants.hasMany(models.ImagesRestaurants);
    Restaurants.hasMany(models.FoodItems);
  };

  return Restaurants;
};
