"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const session = require("express-session");
const redis = require("redis");
const bodyParser = require("body-parser");
const Redis = require("connect-redis");
const RedisStore = Redis(session);
const app = express();
const client = redis.createClient();
app.use(session({
    secret: 'get dat paper yo',
    saveUninitialized: false,
    resave: false,
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client,
    }),
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static(path.join(__dirname, '../class-tracker-ui/angular')));
app.get('/', (req, res) => {
    res.send();
});
app.all('/*', (req, res, next) => {
    console.log('suh dude');
    res.sendFile(path.join(__dirname, '../class-tracker-ui/angular/index.html'));
});
app.listen(4420, () => console.log('Example app listening on port 4420!'));
