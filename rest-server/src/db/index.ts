import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import sql from  './config/config';

const sequelize = new Sequelize(sql.database, sql.username, sql.password, sql.options);

type Model = Sequelize.Model;
interface DbConnection {
  Comments: Model,
  Recipes: Model,
  Directions: Model,
  ImagesRecipes: Model,
  Ingredients: Model,
  Restaurants: Model,
  FoodItems: Model,
  ImagesRestaurants: Model,
  Subscriptions: Model,
  Tags: Model,
  Users: Model,
}
const db = {};

const dir = path.join(__dirname, './models');
const walkModels = (directory) => {
  fs
    .readdirSync(directory)
    .filter(file => file.indexOf('.') !== 0)
    .forEach((file) => {
      if (fs.statSync(path.join(directory, file)).isDirectory()) {
        walkModels(path.join(directory, file));
      } else {
        const model = sequelize.import(path.join(directory, file));
        db[model.name] = model;
      }
    });
};
walkModels(dir);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return true;
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
    return false;
  });

db.sequelize.sync();

export default <DbConnection>db;
