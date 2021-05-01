const cors = require('cors');
const express = require('express');
const app = express();
const checkValidJson = require('./util/checkValidJson');
const testDatabse = require('./util/testDatabase');
const session = require('express-session');
const connectPG = require('connect-pg-simple')(session);
const pool = require('./database');
require('dotenv').config();

const auth = require('./api/auth');
const challenge = require('./api/challenge');
const actions = require('./api/actions');
const theme = require('./api/theme');

const { COOKIE_SECRET, COOKIE_NAME, NODE_ENV } = process.env;
const IN_PROD = NODE_ENV === 'production';
const CORS_ORIGIN = IN_PROD ? 'https://www.pomofit.app/' : 'http://localhost:3000';
const ONE_HOUR = 1000 * 60 * 60 * 1;

app.use(cors({origin: CORS_ORIGIN, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  store: new connectPG({pool}),
  name: COOKIE_NAME,
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ONE_HOUR,
    sameSite: 'lax',
    secure: IN_PROD,
  }
}));


app.use(checkValidJson);

app.use('/auth', auth);
app.use('/challenge', challenge);
app.use('/actions', actions);
app.use('/theme', theme);

const { PORT } = process.env;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  testDatabse(server);
})