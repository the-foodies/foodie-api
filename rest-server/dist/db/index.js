"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config_1 = require("./config/config");
const sequelize = new Sequelize(config_1.sql.database, config_1.sql.username, config_1.sql.password, config_1.sql.options);
;
const db = {};
exports.db = db;
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
