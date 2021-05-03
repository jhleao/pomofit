import auth from '@routes/auth';
import challenge from '@routes/challenges';
import themes from '@routes/themes';

import cors from 'cors';
import express from 'express';
import testDatabse from '@utils/testDatabase';
import session from 'express-session';
import pool from '@models/.';
import checkValidJson from '@utils/checkValidJson';

const ConnectPG = require('connect-pg-simple')(session);

require('dotenv').config();

const app = express();

const { COOKIE_SECRET, COOKIE_NAME, NODE_ENV } = process.env;
const IN_PROD = NODE_ENV === 'production';
const CORS_ORIGIN = IN_PROD ? 'https://www.pomofit.app/' : 'http://localhost:3000';
const ONE_HOUR = 1000 * 60 * 60 * 1;

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  store: new ConnectPG({ pool }),
  name: COOKIE_NAME,
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ONE_HOUR,
    sameSite: 'lax',
    secure: IN_PROD,
  },
}));

app.use(checkValidJson);

app.use('/auth', auth);
app.use('/challenge', challenge);
app.use('/themes', themes);

const { PORT } = process.env;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  testDatabse(server);
});
