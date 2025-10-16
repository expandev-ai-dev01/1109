/**
 * @utility formatDate
 * @summary Date formatting utilities
 * @domain core
 * @type utility-function
 * @category formatting
 */

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date: string | Date, formatStr: string = 'dd/MM/yyyy'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: ptBR });
};

export const formatDateTime = (date: string | Date): string => {
  return formatDate(date, 'dd/MM/yyyy HH:mm');
};

export const formatDateToISO = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};
