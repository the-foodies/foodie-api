module.exports = (Sequelize, DataTypes) => {
  const Subscriptions = Sequelize.define('Subscriptions', {
    typeSubscriptions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Subscriptions.associate = (models) => {
    Subscriptions.belongsTo(models.Users, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
    Subscriptions.belongsTo(models.Users, {
      as: 'userSubscribedTo',
      onDelete: 'CASCADE',
      foreignKey: { allowNull: true },
    });
    Subscriptions.belongsTo(models.Restaurants, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: true },
    });
    Subscriptions.belongsTo(models.Recipes, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: true },
    });
  };

  return Subscriptions;
};
