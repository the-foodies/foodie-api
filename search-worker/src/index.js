const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./db');

const search = require('./controllers/searchKeyword');
const addTags = require('./controllers/addTags');

const app = express();

db.connect('mongodb://localhost/foodieSearch', { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/search', search);
app.post('/tags', addTags);

app.listen(4420, () => console.log('Example app listening on port 4420!'));
