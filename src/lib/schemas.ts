import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export const userFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  role: z.string().min(1, 'Função é obrigatória'),
  department: z.string().min(1, 'Departamento é obrigatório'),
  status: z.enum(['active', 'inactive'], {
    message: 'Status é obrigatório',
  }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type UserFormData = z.infer<typeof userFormSchema>;