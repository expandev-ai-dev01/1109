/**
 * @page TasksPage
 * @summary Task management page with creation and listing
 * @domain task
 * @type page-component
 * @category task-management
 *
 * @routing
 * - Path: /tasks
 * - Params: none
 * - Query: none
 *
 * @layout
 * - Layout: MainLayout
 * - Sections: Form, Pending Tasks, Overdue Tasks
 *
 * @data
 * - Sources: Task API
 * - Loading: Skeleton loading states
 * - Caching: 2 minutes stale time
 */

import { useState } from 'react';
import { useTaskList } from '@/domain/task/hooks/useTaskList';
import { TaskForm } from '@/domain/task/components/TaskForm';
import { TaskList } from '@/domain/task/components/TaskList';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { Card } from '@/core/components/Card';
import type { CreateTaskDto } from '@/domain/task/types';

const TasksPage = () => {
  const { pendingTasks, overdueTasks, isLoading, createTask, isCreating } = useTaskList();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCreateTask = async (data: CreateTaskDto) => {
    try {
      await createTask(data);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gerenciador de Tarefas</h1>
        <p className="mt-2 text-gray-600">Crie e organize suas tarefas de forma eficiente</p>
      </div>

      {showSuccessMessage && (
        <Card variant="bordered" className="bg-green-50 border-green-200">
          <p className="text-green-800 font-medium">✓ Tarefa criada com sucesso!</p>
        </Card>
      )}

      <TaskForm onSubmit={handleCreateTask} isSubmitting={isCreating} />

      {overdueTasks.length > 0 && (
        <TaskList
          tasks={overdueTasks}
          title="Tarefas Vencidas"
          emptyMessage="Nenhuma tarefa vencida"
        />
      )}

      <TaskList
        tasks={pendingTasks}
        title="Tarefas Pendentes"
        emptyMessage="Nenhuma tarefa pendente. Crie uma nova tarefa acima!"
      />
    </div>
  );
};

export default TasksPage;
