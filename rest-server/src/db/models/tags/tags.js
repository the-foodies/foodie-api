module.exports = (Sequelize, DataTypes) => {
  const Tags = Sequelize.define('Tags', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Tags.associate = (models) => {
    Tags.belongsToMany(models.Restaurants, {
      through: 'tags_restaurants',
    });
    Tags.belongsToMany(models.Recipes, {
      through: 'tags_recipes',
    });
  };

  return Tags;
};
