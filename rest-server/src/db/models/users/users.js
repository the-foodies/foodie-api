module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
