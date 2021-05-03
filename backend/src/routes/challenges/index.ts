import { Router } from 'express';
import { start, complete, cancel } from '@controllers/challenges';
import loggedOnly from 'middlewares/loggedOnly';

const router = Router();

router.get('/', loggedOnly, start);

router.post('/complete', loggedOnly, complete);

router.post('/cancel', loggedOnly, cancel);

export default router;
