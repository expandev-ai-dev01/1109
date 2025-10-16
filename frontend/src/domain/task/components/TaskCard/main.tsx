/**
 * @component TaskCard
 * @summary Individual task card display
 * @domain task
 * @type domain-component
 * @category display
 *
 * @description
 * Displays a single task with all its information including title,
 * description, due date, priority, and status with visual indicators.
 */

import { Card } from '@/core/components/Card';
import { formatDate } from '@/core/utils/formatDate';
import type { TaskCardProps } from './types';

const priorityColors = {
  Baixa: 'bg-green-100 text-green-800',
  Media: 'bg-yellow-100 text-yellow-800',
  Alta: 'bg-red-100 text-red-800',
};

const statusColors = {
  Pendente: 'bg-blue-100 text-blue-800',
  Concluida: 'bg-green-100 text-green-800',
  Vencida: 'bg-red-100 text-red-800',
};

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card variant="bordered" className="hover:shadow-md transition-shadow">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{task.titulo}</h3>
          <div className="flex gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                priorityColors[task.prioridade]
              }`}
            >
              {task.prioridade}
            </span>
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                statusColors[task.status]
              }`}
            >
              {task.status}
            </span>
          </div>
        </div>

        {task.descricao && <p className="text-sm text-gray-600">{task.descricao}</p>}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span>
              <strong>Vencimento:</strong> {task.dataVencimento}
            </span>
            <span>
              <strong>Criada em:</strong> {formatDate(task.dataCriacao, 'dd/MM/yyyy HH:mm')}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
