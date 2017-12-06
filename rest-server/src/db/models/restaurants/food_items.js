module.exports = (Sequelize, DataTypes) => {
  const FoodItems = Sequelize.define('FoodItems', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: DataTypes.FLOAT,
    description: DataTypes.STRING,
  });

  FoodItems.associate = (models) => {
    FoodItems.belongsTo(models.Restaurants, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
  };

  return FoodItems;
};
