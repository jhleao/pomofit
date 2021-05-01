const { Router } = require('express');
import { start, cancel } from '@controllers/actions';

const router = Router();

router.post('/start', start);
router.post('/cancel', cancel);

export default router;