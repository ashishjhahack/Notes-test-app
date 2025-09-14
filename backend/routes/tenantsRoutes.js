import express from 'express';
import { upgradeTenant } from '../controllers/tenantsController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:slug/upgrade').post(protect, admin, upgradeTenant);

export default router;