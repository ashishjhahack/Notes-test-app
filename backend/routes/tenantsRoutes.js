import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/:slug/upgrade').post(protect, admin, upgradeTenant);

export default router;