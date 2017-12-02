module.exports = (Sequelize, DataTypes) => {
  const Directions = Sequelize.define('Directions', {
    description: {
      type: DataTypes.STRING,
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
