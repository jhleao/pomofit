import { Controller } from '@types';
import { toggleTheme } from '@models/users';

export const toggle: Controller = async (req, res) => {
  const { userId } = req.session;
  await toggleTheme(userId);
  res.sendStatus(200);
};
