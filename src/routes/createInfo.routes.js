import { Router } from 'express';
import { createInfo } from '../controllers/createInfo.controller.js';

const router = Router();

router.get('/createInfo', createInfo);

export default router;