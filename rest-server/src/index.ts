import * as express from 'express';
import * as path from 'path';
import * as session from 'express-session';
import * as redis from 'redis';
import * as bodyParser from 'body-parser';
import * as Redis from 'connect-redis';

import isLoggedIn from './middleware/isLoggedIn';

import catalog from './routes/catalog';
import login from './routes/login';
import signup from './routes/signup';
import logout from './routes/logout';

const RedisStore = Redis(session);

const app = express();
const client = redis.createClient();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(session({
  secret: 'get dat paper yo',
  saveUninitialized: false,
  resave: false,
  store: new RedisStore({
    host: 'localhost',
    port: 6379,
    ttl: 3600,
    client,
  }),
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

<<<<<<< 19f314cf6ae8541cd09af2794d2aa35d3ae5c5a9
// routes
app.post('/login', login);
app.post('/logout', logout);
app.post('/signup', signup);
app.use('/api', isLoggedIn, catalog);

app.use((req, res) => {
  res.status(404).send('LUL wrong page');
})

=======
>>>>>>> pull commit
app.listen(4420, () => console.log('Example app listening on port 4420!'));
