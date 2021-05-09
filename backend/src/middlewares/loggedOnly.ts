import { userExists } from '@models/users';
import { Middleware } from '@types';
import { notLoggedIn } from '@utils/problems';

const loggedOnly: Middleware = (req, res, next) => {
  const { userId } = req.session;
  if (!userId) return notLoggedIn.send(res);

  const exists = userExists(userId);

  if (exists) return next();
  return notLoggedIn.send(res);
};

export default loggedOnly;
