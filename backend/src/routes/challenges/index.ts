import { Router } from 'express';
import { start, complete, cancel } from '@controllers/challenges';

const router = Router();

router.get('/', start);

router.post('/complete', complete);

router.post('/cancel', cancel);

export default router;
