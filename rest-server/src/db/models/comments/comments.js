module.exports = (Sequelize, DataTypes) => {
  const Comments = Sequelize.define('Comments', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Users, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
    Comments.belongsTo(models.Recipes, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: true },
    });
    Comments.belongsTo(models.Restaurants, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: true },
    });
  };

  return Comments;
};
