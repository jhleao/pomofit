import { Router } from 'express';
import { toggle } from '@controllers/theme';

const router = Router();

router.post('/toggle', toggle);

export default router;
