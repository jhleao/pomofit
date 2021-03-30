const pool = require('../database');
const { v4: uuid } = require('uuid');

async function accountHandler(data) {
  console.log('accountHandler called...');
  if(data.googleId) return await googleAccountHandler(data);
}

async function googleAccountHandler(data){
  console.log('Handling google account...');
  const { googleId } = data;
  const existingUser = await pool.query(
    `SELECT * FROM users WHERE google_id = $1`, [googleId])
    .then(query => query.rows[0]);
    if(!existingUser) return await createAccountFromGoogleData(data);
  console.log('Account already exists. Returning.');
  return existingUser;
}

async function createAccountFromGoogleData(data){
  const { googleId, name, email, img } = data;
  const id = uuid();
  const createdUser = await pool.query(
    `INSERT INTO users (id, google_id, name, email, img)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [id, googleId, name, email, img])
    .then(query => query.rows[0]);
  console.log('Account created. Returning.');
  return createdUser;
}

module.exports = accountHandler;