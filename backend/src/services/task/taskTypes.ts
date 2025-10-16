/**
 * @summary
 * Task service type definitions
 * Defines interfaces and types for task management operations
 *
 * @module services/task/taskTypes
 * @type types
 */

export enum TaskPriority {
  Baixa = 0,
  Media = 1,
  Alta = 2,
}

export enum TaskStatus {
  Pendente = 0,
  Concluida = 1,
  Vencida = 2,
}

export interface TaskEntity {
  idTarefa: string;
  titulo: string;
  descricao: string;
  dataVencimento: Date;
  prioridade: TaskPriority;
  status: TaskStatus;
  dataCriacao: Date;
}

export interface TaskCreateRequest {
  titulo: string;
  descricao?: string;
  dataVencimento: string;
  prioridade: 'Baixa' | 'Media' | 'Alta';
}

export interface TaskCreateResponse {
  idTarefa: string;
  titulo: string;
  descricao: string;
  dataVencimento: string;
  prioridade: string;
  status: string;
  dataCriacao: string;
}
