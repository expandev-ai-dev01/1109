/**
 * @summary
 * Task routes configuration
 * Defines routes for task management operations
 *
 * @module routes/v1/taskRoutes
 * @type router-configuration
 */

import { Router } from 'express';
import * as taskController from '@/api/v1/internal/task/controller';

const router = Router();

// Task routes - /api/v1/internal/task
router.post('/', taskController.postHandler);
router.get('/', taskController.getHandler);

export default router;
