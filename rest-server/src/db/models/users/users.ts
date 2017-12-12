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
    Users.hasMany(models.Comments, {
      as: 'poster',
    });
    Users.hasMany(models.Comments);
    Users.hasMany(models.FoodItems);
  };

  return Users;
};
