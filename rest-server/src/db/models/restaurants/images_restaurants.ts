module.exports = (Sequelize, DataTypes) => {
  const ImagesRestaurants = Sequelize.define('ImagesRestaurants', {
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
  });

  ImagesRestaurants.associate = (models) => {
    ImagesRestaurants.belongsTo(models.Restaurants, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
    ImagesRestaurants.belongsTo(models.Users);
  };

  return ImagesRestaurants;
};
