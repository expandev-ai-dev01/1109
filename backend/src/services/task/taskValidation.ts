/**
 * @summary
 * Task validation service
 * Provides validation functions for task data
 *
 * @module services/task/taskValidation
 * @type validation
 */

import { TaskCreateRequest } from './taskTypes';

export class TaskValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TaskValidationError';
  }
}

/**
 * @validation Validates task title requirements
 * @throws {TaskValidationError}
 */
export const validateTitle = (titulo: string): void => {
  if (!titulo || titulo.trim().length === 0) {
    throw new TaskValidationError('tituloObrigatorio');
  }

  if (titulo.trim().length < 3) {
    throw new TaskValidationError('tituloMuitoCurto');
  }

  if (titulo.length > 100) {
    throw new TaskValidationError('tituloMuitoLongo');
  }

  if (titulo.trim().length === 0) {
    throw new TaskValidationError('tituloApenasEspacos');
  }
};

/**
 * @validation Validates task description requirements
 * @throws {TaskValidationError}
 */
export const validateDescription = (descricao?: string): void => {
  if (descricao && descricao.length > 500) {
    throw new TaskValidationError('descricaoMuitoLonga');
  }
};

/**
 * @validation Validates task due date requirements
 * @throws {TaskValidationError}
 */
export const validateDueDate = (dataVencimento: string): void => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(dataVencimento)) {
    throw new TaskValidationError('dataVencimentoInvalida');
  }

  const [day, month, year] = dataVencimento.split('/').map(Number);
  const dueDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (dueDate < today) {
    throw new TaskValidationError('dataVencimentoPassado');
  }
};

/**
 * @validation Validates task priority value
 * @throws {TaskValidationError}
 */
export const validatePriority = (prioridade: string): void => {
  const validPriorities = ['Baixa', 'Media', 'Alta'];
  if (!validPriorities.includes(prioridade)) {
    throw new TaskValidationError('prioridadeInvalida');
  }
};

/**
 * @validation Validates complete task creation request
 * @throws {TaskValidationError}
 */
export const validateTaskCreate = (data: TaskCreateRequest): void => {
  validateTitle(data.titulo);
  validateDescription(data.descricao);
  validateDueDate(data.dataVencimento);
  validatePriority(data.prioridade);
};
