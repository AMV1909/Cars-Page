import { Router } from 'express';
import { createInfo, deteleAll } from '../controllers/createInfo.controller.js';

const router = Router();

router.get('/createInfo', createInfo);
router.get('/deleteAll', deteleAll);

export default router;