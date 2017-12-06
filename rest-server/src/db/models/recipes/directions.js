module.exports = (Sequelize, DataTypes) => {
  const Directions = Sequelize.define('Directions', {
    description: {
      type: DataTypes.STRING(1337),
      allowNull: false,
    },
    dirOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Directions.associate = (models) => {
    Directions.belongsTo(models.Recipes, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
  };

  return Directions;
};
