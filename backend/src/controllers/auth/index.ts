import { Controller } from '@types';
import getGoogleAccountFromCode from '@utils/googleAuth';
import accountHandler from '@utils/accountHandler';
import { userExists } from '@models/users';
import pool from '@models/.';

export const googleLogin: Controller = async (req, res) => {
  const { code } = req.body;
  const googleData = await getGoogleAccountFromCode(code);
  const user = await accountHandler(googleData);

  const {
    id, name, img, xp,
    theme_name: themeName,
    completed_count: completedCount,
  } = user;

  req.session.userId = user.id;
  res.send({
    id, name, img, xp, themeName, completedCount,
  });
};

export const isAuth: Controller = async (req, res) => {
  const { userId } = req.session;
  if (!userId) return res.send(false);

  const exists = await userExists(userId);
  if (!exists) return res.send(false);

  return res.send(true);
};

export const getSelf: Controller = async (req, res) => {
  const { userId } = req.session;

  const userData = await pool.query(
    'SELECT * FROM users WHERE id = $1', [userId],
  )
    .then((query) => query.rows[0]);

  const {
    id, name, img, xp,
    completed_count: completedCount,
    theme_name: themeName,
  } = userData;

  return res.send({
    id, name, img, xp, completedCount, themeName,
  });
};

export const logout: Controller = async (req, res) => {
  req.session.destroy();
  res.send();
};
