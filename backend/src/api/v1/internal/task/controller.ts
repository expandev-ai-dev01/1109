/**
 * @summary
 * Task controller for CRUD operations
 * Handles HTTP requests for task creation and listing
 *
 * @module api/v1/internal/task/controller
 * @type controller
 */

import { Request, Response, NextFunction } from 'express';
import { taskCreate, taskList, TaskValidationError } from '@/services/task';
import { successResponse, errorResponse } from '@/utils/response';
import { HTTP_STATUS } from '@/constants';

/**
 * @api {post} /api/v1/internal/task Create Task
 * @apiName CreateTask
 * @apiGroup Task
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new task with validation
 *
 * @apiParam {String} titulo Task title (3-100 characters)
 * @apiParam {String} [descricao] Task description (max 500 characters)
 * @apiParam {String} dataVencimento Due date in DD/MM/YYYY format
 * @apiParam {String} prioridade Priority level: 'Baixa', 'Media', or 'Alta'
 *
 * @apiSuccess {String} idTarefa Task unique identifier
 * @apiSuccess {String} titulo Task title
 * @apiSuccess {String} descricao Task description
 * @apiSuccess {String} dataVencimento Due date
 * @apiSuccess {String} prioridade Priority level
 * @apiSuccess {String} status Task status
 * @apiSuccess {String} dataCriacao Creation timestamp
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} ServerError Internal server error
 */
export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await taskCreate(req.body);
    res.status(HTTP_STATUS.CREATED).json(successResponse(data));
  } catch (error: any) {
    if (error instanceof TaskValidationError) {
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse(error.message, 'VALIDATION_ERROR'));
    } else {
      next(error);
    }
  }
}

/**
 * @api {get} /api/v1/internal/task List Tasks
 * @apiName ListTasks
 * @apiGroup Task
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves all tasks from memory storage
 *
 * @apiSuccess {Array} tasks Array of task objects
 *
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await taskList();
    res.json(successResponse(data));
  } catch (error: any) {
    next(error);
  }
}
