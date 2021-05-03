import { Router } from 'express';
import { start, complete } from '@controllers/challenges';
import loggedOnly from 'middlewares/loggedOnly';

const router = Router();

router.get('/', loggedOnly, start);
router.post('/complete', loggedOnly, complete);

export default router;
