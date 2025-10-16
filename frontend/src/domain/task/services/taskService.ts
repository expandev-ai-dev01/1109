/**
 * @service taskService
 * @summary Task management service for authenticated endpoints
 * @domain task
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/task/...
 */

import { authenticatedClient } from '@/core/lib/api';
import { API_ENDPOINTS } from '@/core/constants';
import type { Task, CreateTaskDto, TaskListResponse, TaskCreateResponse } from '../types';

export const taskService = {
  /**
   * @endpoint GET /api/v1/internal/task
   * @summary Fetches list of tasks
   */
  async list(): Promise<Task[]> {
    const response = await authenticatedClient.get<TaskListResponse>(API_ENDPOINTS.TASK);
    return response.data.data;
  },

  /**
   * @endpoint POST /api/v1/internal/task
   * @summary Creates new task
   */
  async create(data: CreateTaskDto): Promise<Task> {
    const response = await authenticatedClient.post<TaskCreateResponse>(API_ENDPOINTS.TASK, data);
    return response.data.data;
  },
};
