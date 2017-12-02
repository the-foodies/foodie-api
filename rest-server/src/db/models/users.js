module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    displayName: DataTypes.STRING,
    password: DataTypes.STRING,
    profileImageUrl: DataTypes.STRING,
  });

  Users.associate = (models) => {
    Users.belongsToMany(models.Subscriptions, {
      through: 'subscriptions_users',
    });
  };

  Users.associate = (models) => {
    Users.belongsToMany(models.Recipes, {
      through: 'categories_recipes',
    });
  };

  Users.associate = (models) => {
    Users.belongsToMany(models.Restaurants, {
      through: 'categories_restaurants',
    });
  };

  return Users;
};
