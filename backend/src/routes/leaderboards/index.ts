import { Router } from 'express';
import { getLeaderboardData } from '@controllers/leaderboards';
import loggedOnly from 'middlewares/loggedOnly';

const router = Router();

router.get('/', loggedOnly, getLeaderboardData);

export default router;
