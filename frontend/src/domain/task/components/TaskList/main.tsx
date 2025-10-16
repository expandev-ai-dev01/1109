/**
 * @component TaskList
 * @summary Displays a list of tasks with categorization
 * @domain task
 * @type domain-component
 * @category display
 *
 * @description
 * Renders a list of tasks with visual indicators for priority and status.
 * Supports empty states and automatic categorization.
 */

import { Card } from '@/core/components/Card';
import { TaskCard } from '../TaskCard';
import type { TaskListProps } from './types';

export const TaskList = ({
  tasks,
  title,
  emptyMessage = 'Nenhuma tarefa encontrada',
}: TaskListProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {tasks.length === 0 ? (
        <Card variant="bordered">
          <p className="text-center text-gray-500">{emptyMessage}</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.idTarefa} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};
