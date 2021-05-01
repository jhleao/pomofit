import { Router } from 'express';
import pool from '../../models';
const router = Router();
import { googleLogin } from '@controllers/auth';

router.post('/google', googleLogin);

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

export default router;