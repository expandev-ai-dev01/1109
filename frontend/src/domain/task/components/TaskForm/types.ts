/**
 * @types TaskForm
 * @summary Type definitions for TaskForm component
 * @domain task
 * @type component-types
 * @category task-management
 */

import type { CreateTaskDto } from '../../types';

export interface TaskFormProps {
  onSubmit: (data: CreateTaskDto) => Promise<void>;
  isSubmitting?: boolean;
  onCancel?: () => void;
}
