/**
 * @summary
 * Internal (authenticated) API routes configuration
 * Handles protected endpoints that require authentication
 *
 * @module routes/v1/internalRoutes
 * @type router-configuration
 */

import { Router } from 'express';
import taskRoutes from './taskRoutes';

const router = Router();

// Task management routes
router.use('/task', taskRoutes);

export default router;
