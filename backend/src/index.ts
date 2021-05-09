import auth from '@routes/auth';
import challenges from '@routes/challenges';
import themes from '@routes/themes';
import leaderboards from '@routes/leaderboards';

import cors from 'cors';
import express from 'express';
import testDatabase from '@utils/testDatabase';
import session from 'express-session';
import pool from '@models/.';
import checkValidJson from '@utils/checkValidJson';
import https from 'https';
import fs from 'fs';

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
app.use('/challenges', challenges);
app.use('/leaderboards', leaderboards);
app.use('/themes', themes);

const { PORT } = process.env;

const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/api.pomofit.app/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/api.pomofit.app/fullchain.pem'),
}, app);

const server = IN_PROD
  ? httpsServer.listen(PORT, () => console.log(`HTTPS Server running on port ${PORT}`))
  : app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

testDatabase(server);
