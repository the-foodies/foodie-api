import * as Sequelize from 'sequelize';

module.exports = (Sequelize, DataTypes) => {
  const Subscriptions = Sequelize.define('Subscriptions', {
    typeSubscriptions: DataTypes.STRING,
  });

  Subscriptions.associate = (models) => {
    Subscriptions.belongsTo(models.Users, {
      onDelete: 'CASCADE',
      foreignKey: {allowNull: false, },
    });
  };

  return Subscriptions;
}
