/**
 * @hook useTaskList
 * @summary Manages task list with intelligent caching and creation
 * @domain task
 * @type domain-hook
 * @category data
 *
 * @description
 * Provides task list management with automatic categorization of pending
 * and overdue tasks. Uses TanStack Query for caching and optimistic updates.
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { taskService } from '../../services/taskService';
import type { UseTaskListReturn } from './types';
import type { CreateTaskDto } from '../../types';

export const useTaskList = (): UseTaskListReturn => {
  const queryClient = useQueryClient();
  const queryKey = ['tasks'];

  const {
    data: tasks = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: () => taskService.list(),
    staleTime: 2 * 60 * 1000,
  });

  const { mutateAsync: createTask, isPending: isCreating } = useMutation({
    mutationFn: (data: CreateTaskDto) => taskService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const pendingTasks = useMemo(() => {
    return tasks.filter((task) => task.status === 'Pendente');
  }, [tasks]);

  const overdueTasks = useMemo(() => {
    return tasks.filter((task) => task.status === 'Vencida');
  }, [tasks]);

  return {
    tasks,
    pendingTasks,
    overdueTasks,
    isLoading,
    error: error as Error | null,
    refetch,
    createTask,
    isCreating,
  };
};
