import { Router } from 'express';
import { toggle } from '@controllers/themes';
import loggedOnly from 'middlewares/loggedOnly';

const router = Router();

router.post('/toggle', loggedOnly, toggle);

export default router;
