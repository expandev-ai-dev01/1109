/**
 * @component TaskForm
 * @summary Form for creating new tasks with validation
 * @domain task
 * @type domain-component
 * @category form
 *
 * @description
 * Provides a form interface for task creation with comprehensive validation
 * using React Hook Form and Zod. Handles all required and optional fields
 * according to the feature specification.
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/core/components/Input';
import { Button } from '@/core/components/Button';
import { Card } from '@/core/components/Card';
import { taskFormSchema, type TaskFormSchema } from '../../utils/validation';
import type { TaskFormProps } from './types';

export const TaskForm = ({ onSubmit, isSubmitting = false, onCancel }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormSchema>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      titulo: '',
      descricao: '',
      dataVencimento: '',
      prioridade: 'Media',
    },
  });

  const handleFormSubmit = async (data: TaskFormSchema) => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };

  return (
    <Card variant="bordered">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Nova Tarefa</h2>
          <p className="mt-1 text-sm text-gray-600">
            Preencha os campos abaixo para criar uma nova tarefa
          </p>
        </div>

        <Input
          label="Título"
          placeholder="Digite o título da tarefa"
          error={errors.titulo?.message}
          required
          fullWidth
          disabled={isSubmitting}
          {...register('titulo')}
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            placeholder="Digite uma descrição detalhada (opcional)"
            rows={4}
            disabled={isSubmitting}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            {...register('descricao')}
          />
          {errors.descricao && <p className="text-sm text-red-600">{errors.descricao.message}</p>}
        </div>

        <Input
          label="Data de Vencimento"
          placeholder="DD/MM/AAAA"
          error={errors.dataVencimento?.message}
          required
          fullWidth
          disabled={isSubmitting}
          {...register('dataVencimento')}
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Prioridade <span className="ml-1 text-red-500">*</span>
          </label>
          <select
            disabled={isSubmitting}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            {...register('prioridade')}
          >
            <option value="Baixa">Baixa</option>
            <option value="Media">Média</option>
            <option value="Alta">Alta</option>
          </select>
          {errors.prioridade && <p className="text-sm text-red-600">{errors.prioridade.message}</p>}
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Criando...' : 'Criar Tarefa'}
          </Button>
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
              Cancelar
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};
