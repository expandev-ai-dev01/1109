/**
 * @types Task
 * @summary Type definitions for task domain
 * @domain task
 * @type type-definitions
 * @category task-management
 */

export interface Task {
  idTarefa: string;
  titulo: string;
  descricao?: string;
  dataVencimento: string;
  prioridade: 'Baixa' | 'Media' | 'Alta';
  status: 'Pendente' | 'Concluida' | 'Vencida';
  dataCriacao: string;
}

export interface CreateTaskDto {
  titulo: string;
  descricao?: string;
  dataVencimento: string;
  prioridade: 'Baixa' | 'Media' | 'Alta';
}

export interface TaskFormData {
  titulo: string;
  descricao?: string;
  dataVencimento: string;
  prioridade: 'Baixa' | 'Media' | 'Alta';
}

export interface TaskListResponse {
  data: Task[];
}

export interface TaskCreateResponse {
  data: Task;
}
