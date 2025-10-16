/**
 * @types useTaskList
 * @summary Type definitions for useTaskList hook
 * @domain task
 * @type hook-types
 * @category task-management
 */

import type { Task, CreateTaskDto } from '../../types';

export interface UseTaskListReturn {
  tasks: Task[];
  pendingTasks: Task[];
  overdueTasks: Task[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  createTask: (data: CreateTaskDto) => Promise<Task>;
  isCreating: boolean;
}
