import * as express from 'express';
import * as path from 'path';
import * as session from 'express-session';
import * as redis from 'redis';
import * as bodyParser from 'body-parser';
import * as Redis from 'connect-redis';

//might not work \/\/
const RedisStore = Redis(session);

// middleware
import { router } from './routes';

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

// routes
app.get('/', (req, res) => {
  res.send();
})

// ui-router catch all
app.all('/*', (req, res, next) => {
  console.log('suh dude');
  res.sendFile(path.join(__dirname, '../class-tracker-ui/angular/index.html'));
});

app.listen(4420, () => console.log('Example app listening on port 4420!'));
