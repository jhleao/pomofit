import { Controller } from '@types';
import getGoogleAccountFromCode from '@utils/googleAuth';
import accountHandler from '@models/accountHandler';
import { getUser } from '@models/users';

export const googleLogin: Controller = async (req, res) => {
  const { code } = req.body;

  const googleData = await getGoogleAccountFromCode(code);
  const newUserId = await accountHandler(googleData);
  const newUser = await getUser(newUserId);

  req.session.userId = newUser.id;
    
  res.json(newUser);
};

export const isAuth: Controller = async (req, res) => res.sendStatus(200);

export const getSelf: Controller = async (req, res) => {
  const { userId } = req.session;
  const userData = await getUser(userId);
  return res.json(userData);
};

export const logout: Controller = async (req, res) => {
  req.session.destroy(() => {});
  res.send();
};
