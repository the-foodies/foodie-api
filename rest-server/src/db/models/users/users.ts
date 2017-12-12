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
  });

  Users.associate = (models) => {
    Users.belongsToMany(models.Recipes, {
      through: 'recipes_users',
    });
    Users.belongsToMany(models.Restaurants, {
      through: 'restaurants_users',
    });
  };

  return Users;
};
