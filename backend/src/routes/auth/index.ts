import { Router } from 'express';
import { getSelf, googleLogin, isAuth, logout } from '@controllers/auth';
import loggedOnly from 'middlewares/loggedOnly';

const router = Router();

router.get('/me', loggedOnly, getSelf);
router.get('/', loggedOnly, isAuth);
router.post('/google', googleLogin);
router.post('/logout', loggedOnly, logout);

export default router;
