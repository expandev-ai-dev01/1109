/**
 * @types TaskList
 * @summary Type definitions for TaskList component
 * @domain task
 * @type component-types
 * @category task-management
 */

import type { Task } from '../../types';

export interface TaskListProps {
  tasks: Task[];
  title: string;
  emptyMessage?: string;
}
