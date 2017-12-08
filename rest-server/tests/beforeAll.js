const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

const sql = {
  username: '',
  password: '',
  options: {
    dialect: 'sqlite',
    operatorAliases: false,
    timestamps: false,
    storage: './travis.sqlite',
  },
};

const sequelize = new Sequelize(sql.database, sql.username, sql.password, sql.options);

const db = {};

const dir = path.join(__dirname, '../dist/db/models');
const walkModels = (directory) => {
  fs
    .readdirSync(directory)
    .filter(file => file.indexOf('.') !== 0)
    .forEach(async (file) => {
      if (fs.statSync(path.join(directory, file)).isDirectory()) {
        walkModels(path.join(directory, file));
      } else {
        const model = await sequelize.import(path.join(directory, file));
        db[model.name] = model;
      }
    });
};
walkModels(dir);

Object.keys(db).forEach(async (modelName) => {
  if (db[modelName].associate) {
    await db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
