/**
 * @summary
 * Task business logic service
 * Implements task creation, storage, and status management
 *
 * @module services/task/taskRules
 * @type service
 */

import { v4 as uuidv4 } from 'uuid';
import {
  TaskEntity,
  TaskCreateRequest,
  TaskCreateResponse,
  TaskPriority,
  TaskStatus,
} from './taskTypes';
import { validateTaskCreate, TaskValidationError } from './taskValidation';

/**
 * @rule {fn-task-storage} In-memory task storage during session
 * Tasks are stored only in memory and will be lost when server restarts
 */
const taskStorage: Map<string, TaskEntity> = new Map();

/**
 * @summary
 * Converts priority string to enum value
 *
 * @function convertPriorityToEnum
 * @param {string} prioridade - Priority string value
 * @returns {TaskPriority} Priority enum value
 */
const convertPriorityToEnum = (prioridade: string): TaskPriority => {
  switch (prioridade) {
    case 'Baixa':
      return TaskPriority.Baixa;
    case 'Alta':
      return TaskPriority.Alta;
    default:
      return TaskPriority.Media;
  }
};

/**
 * @summary
 * Converts priority enum to string value
 *
 * @function convertPriorityToString
 * @param {TaskPriority} prioridade - Priority enum value
 * @returns {string} Priority string value
 */
const convertPriorityToString = (prioridade: TaskPriority): string => {
  switch (prioridade) {
    case TaskPriority.Baixa:
      return 'Baixa';
    case TaskPriority.Alta:
      return 'Alta';
    default:
      return 'Media';
  }
};

/**
 * @summary
 * Converts status enum to string value
 *
 * @function convertStatusToString
 * @param {TaskStatus} status - Status enum value
 * @returns {string} Status string value
 */
const convertStatusToString = (status: TaskStatus): string => {
  switch (status) {
    case TaskStatus.Concluida:
      return 'Concluida';
    case TaskStatus.Vencida:
      return 'Vencida';
    default:
      return 'Pendente';
  }
};

/**
 * @summary
 * Parses date string in DD/MM/YYYY format to Date object
 *
 * @function parseDateString
 * @param {string} dateString - Date in DD/MM/YYYY format
 * @returns {Date} Parsed date object
 */
const parseDateString = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

/**
 * @summary
 * Formats Date object to DD/MM/YYYY string
 *
 * @function formatDateString
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
const formatDateString = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * @summary
 * Checks if a task title already exists in storage
 *
 * @function checkDuplicateTitle
 * @param {string} titulo - Task title to check
 * @returns {boolean} True if title exists, false otherwise
 */
const checkDuplicateTitle = (titulo: string): boolean => {
  for (const task of taskStorage.values()) {
    if (task.titulo.toLowerCase() === titulo.toLowerCase()) {
      return true;
    }
  }
  return false;
};

/**
 * @summary
 * Determines task status based on due date
 *
 * @function determineTaskStatus
 * @param {Date} dataVencimento - Task due date
 * @returns {TaskStatus} Calculated task status
 */
const determineTaskStatus = (dataVencimento: Date): TaskStatus => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(dataVencimento);
  dueDate.setHours(0, 0, 0, 0);

  if (dueDate < today) {
    return TaskStatus.Vencida;
  }
  return TaskStatus.Pendente;
};

/**
 * @summary
 * Creates a new task with validation and storage
 *
 * @function taskCreate
 * @param {TaskCreateRequest} data - Task creation data
 * @returns {Promise<TaskCreateResponse>} Created task data
 * @throws {TaskValidationError} When validation fails
 */
export const taskCreate = async (data: TaskCreateRequest): Promise<TaskCreateResponse> => {
  /**
   * @validation Validate all task creation requirements
   * @throws {TaskValidationError}
   */
  validateTaskCreate(data);

  /**
   * @rule {BR-001} Check for duplicate task title
   */
  if (checkDuplicateTitle(data.titulo)) {
    throw new TaskValidationError('tituloDuplicado');
  }

  /**
   * @rule {RU-009} Generate unique task ID using UUID v4
   */
  const idTarefa = uuidv4();

  /**
   * @rule {RU-010} Set creation timestamp
   */
  const dataCriacao = new Date();

  /**
   * @rule {BR-002,BR-006} Determine initial status based on due date
   */
  const dataVencimento = parseDateString(data.dataVencimento);
  const status = determineTaskStatus(dataVencimento);

  const task: TaskEntity = {
    idTarefa,
    titulo: data.titulo,
    descricao: data.descricao || '',
    dataVencimento,
    prioridade: convertPriorityToEnum(data.prioridade),
    status,
    dataCriacao,
  };

  /**
   * @rule {BR-004} Store task in memory
   */
  taskStorage.set(idTarefa, task);

  return {
    idTarefa: task.idTarefa,
    titulo: task.titulo,
    descricao: task.descricao,
    dataVencimento: formatDateString(task.dataVencimento),
    prioridade: convertPriorityToString(task.prioridade),
    status: convertStatusToString(task.status),
    dataCriacao: task.dataCriacao.toISOString(),
  };
};

/**
 * @summary
 * Retrieves all tasks from storage
 *
 * @function taskList
 * @returns {Promise<TaskCreateResponse[]>} Array of all tasks
 */
export const taskList = async (): Promise<TaskCreateResponse[]> => {
  const tasks: TaskCreateResponse[] = [];

  for (const task of taskStorage.values()) {
    tasks.push({
      idTarefa: task.idTarefa,
      titulo: task.titulo,
      descricao: task.descricao,
      dataVencimento: formatDateString(task.dataVencimento),
      prioridade: convertPriorityToString(task.prioridade),
      status: convertStatusToString(task.status),
      dataCriacao: task.dataCriacao.toISOString(),
    });
  }

  return tasks;
};
