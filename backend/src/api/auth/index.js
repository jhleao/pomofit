const { Router } = require('express');
const pool = require('../../database');
const userExists = require('../../helpers/userExists');
const router = Router();

const google = require('./google');

router.use('/google', google);

router.get('/', async (req, res) => {
  const { userId } = req.session;
  if(!userId) return res.send(false);

  const exists = await userExists(userId);
  if(!exists) return res.send(false);

  return res.send(true);
})

router.post('/logout', async (req, res) => {
  req.session.destroy();
  res.send();
})

router.get('/me', async (req, res) => {
  const { userId } = req.session;
  const userData = await pool.query(
    `SELECT * FROM users WHERE id = $1`, [userId])
    .then(query => query.rows[0]);
  const {id, name, img, xp, completed_count: completedCount, theme_name: themeName} = userData;
  return res.send({id, name, img, xp, completedCount, themeName})
})

module.exports = router;