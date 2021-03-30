const pool = require('../database');

async function testDatabase(server){
  try{
    await pool.query('SELECT NOW()');
    console.log('\x1b[36m%s\x1b[0m', 'Sucessfully connected to the database.');
  } catch {
    console.log('\x1b[31m', 'Connection to the database failed. Gracefully shutting down...', '\x1b[37m');
    server.close();
    process.exit(0);
  }
}

module.exports = testDatabase;