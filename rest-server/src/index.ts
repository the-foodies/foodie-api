import * as express from 'express';
import * as path from 'path';
import * as session from 'express-session';
import * as redis from 'redis';
import * as bodyParser from 'body-parser';
import * as Redis from 'connect-redis';
import * as catalog from '../src/routes/catalog';

//might not work \/\/
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
    client,
  }),
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(path.join(__dirname, '../../../foodie-ui/build/')));

//middleware
app.use('/api', catalog);

app.listen(4420, () => console.log('Example app listening on port 4420!'));
