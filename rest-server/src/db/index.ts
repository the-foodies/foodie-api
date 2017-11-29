import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import { sql } from './config/config';

const sequelize = new Sequelize(sql.database, sql.username, sql.password, sql.options);

interface sqlDB {
  [key: string]: any,
};

const db: sqlDB = {};

fs
  .readdirSync(path.join(__dirname, '/models'))
  .filter(file => file.indexOf('.') !== 0)
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, '/models', file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

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

export { db };
