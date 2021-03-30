const { Pool } = require('pg');

const pool = new Pool({
  database: 'pomofit',
  user: 'postgres',
  password: '7420',
  host: 'localhost',
  port: 5432
})

module.exports = pool;