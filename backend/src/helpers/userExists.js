const pool = require('../database');

async function userExists(id){
  return await pool.query(
    `SELECT * FROM users WHERE id = $1`, [id])
    .then(query => !!query.rows[0]);
}

module.exports = userExists;