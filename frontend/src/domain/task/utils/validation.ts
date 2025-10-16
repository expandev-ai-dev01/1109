/**
 * @utility validation
 * @summary Task validation utilities
 * @domain task
 * @type utility-function
 * @category validation
 */

import { z } from 'zod';

export const taskFormSchema = z.object({
  titulo: z
    .string()
    .min(3, 'O título deve ter pelo menos 3 caracteres')
    .max(100, 'O título não pode exceder 100 caracteres')
    .refine((val) => val.trim().length > 0, {
      message: 'O título não pode conter apenas espaços em branco',
    }),
  descricao: z.string().max(500, 'A descrição não pode exceder 500 caracteres').optional(),
  dataVencimento: z.string().refine(
    (val) => {
      const regex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!regex.test(val)) return false;
      const [day, month, year] = val.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
    {
      message:
        'A data de vencimento deve estar no formato DD/MM/AAAA e não pode ser anterior à data atual',
    }
  ),
  prioridade: z.enum(['Baixa', 'Media', 'Alta'], {
    errorMap: () => ({ message: 'A prioridade deve ser Baixa, Média ou Alta' }),
  }),
});

export type TaskFormSchema = z.infer<typeof taskFormSchema>;
