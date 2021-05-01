import pool from '@models/.';
import { GoogleAccount, Account } from '@types';
import { v4 as uuid } from 'uuid';

const createAccountFromGoogleData = async (data: GoogleAccount) => {
  const { googleId, name, email, img } = data;
  const id = uuid();

  const createdUser = await pool.query(
    `INSERT INTO users (id, google_id, name, email, img)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [id, googleId, name, email, img],
  ).then((query) => query.rows[0]);

  console.log('Account created. Returning.');

  return createdUser;
};

const googleAccountHandler = async (data: GoogleAccount) => {
  console.log('Handling google account...');

  const { googleId } = data;

  const existingUser = await pool.query(
    'SELECT * FROM users WHERE google_id = $1', [googleId],
  ).then((query) => query.rows[0]);
  if (!existingUser) return createAccountFromGoogleData(data);

  console.log('Account already exists. Returning.');
  return existingUser;
};

const accountHandler = async (data: Account) => {
  console.log('accountHandler called...');
  if (data.googleId) return googleAccountHandler(data as GoogleAccount);
  return null;
};

export default accountHandler;
