module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImageUrl: DataTypes.STRING,
    followerCount: DataTypes.INTEGER,
  });

  Users.associate = (models) => {
    Users.belongsToMany(models.Recipes, {
      through: 'recipes_users',
    });
    Users.belongsToMany(models.Restaurants, {
      through: 'restaurants_users',
    });
<<<<<<< 89510c62e9117d76717884d8f41418afe5c4f6d0
    Users.hasMany(models.Comments, {
      as: 'poster',
    });
    Users.hasMany(models.Comments);
    Users.hasMany(models.FoodItems);
    Users.hasMany(models.ImagesRestaurants);
=======
    Users.hasMany(models.Subscriptions);
>>>>>>> Server controllers re-formatted and subscription controllers completed
  };

  return Users;
};
