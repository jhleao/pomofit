import { Router } from 'express';
import { toggle } from '@controllers/themes';

const router = Router();

router.post('/toggle', toggle);

export default router;
