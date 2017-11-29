#Controllers
Controllers should deal solely with a single table
Controller functions for 1:n should go on the belongsTo model controller
Controller functions for n:m should go on whichever model controller makes grammatical sense
Any multi-model controller function should be in an api controller utilizing each model controller

#Models
###example sequelize model

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Task);
  };
  return User;
};

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
  });

  Task.associate = function (models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Task.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Task;
};

###When using n:m relation ships use the following format
Students.associate = (models) => {
    Students.belongsToMany(models.Classes);
  };
Classes.associate = (models) => {
  Classes.belongsToMany(models.Classes);
};
