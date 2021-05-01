import { Router } from 'express';
import { getSelf, googleLogin, isAuth, logout } from '@controllers/auth';

const router = Router();

router.get('/me', getSelf);
router.get('/', isAuth);
router.post('/google', googleLogin);
router.post('/logout', logout);

export default router;
