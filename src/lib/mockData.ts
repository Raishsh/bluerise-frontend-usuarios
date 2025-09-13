import { User } from '@/types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Ana Silva',
    email: 'ana.silva@bluerise.com.br',
    role: 'Médica Cardiologista',
    status: 'active',
    department: 'Cardiologia',
    createdAt: '2024-01-15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana'
  },
  {
    id: '2',
    name: 'João Santos',
    email: 'joao.santos@bluerise.com.br',
    role: 'Enfermeiro',
    status: 'active',
    department: 'UTI',
    createdAt: '2024-02-20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Joao'
  },
  {
    id: '3',
    name: 'Dr. Maria Costa',
    email: 'maria.costa@bluerise.com.br',
    role: 'Neurologista',
    status: 'inactive',
    department: 'Neurologia',
    createdAt: '2024-01-10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
  },
  {
    id: '4',
    name: 'Carlos Oliveira',
    email: 'carlos.oliveira@bluerise.com.br',
    role: 'Técnico em Radiologia',
    status: 'active',
    department: 'Radiologia',
    createdAt: '2024-03-05',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos'
  },
  {
    id: '5',
    name: 'Dra. Paula Ferreira',
    email: 'paula.ferreira@bluerise.com.br',
    role: 'Pediatra',
    status: 'active',
    department: 'Pediatria',
    createdAt: '2024-02-28',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Paula'
  },
  {
    id: '6',
    name: 'Roberto Lima',
    email: 'roberto.lima@bluerise.com.br',
    role: 'Administrador',
    status: 'inactive',
    department: 'Administração',
    createdAt: '2024-01-20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto'
  }
];

export const departments = [
  'Cardiologia',
  'Neurologia', 
  'Pediatria',
  'UTI',
  'Radiologia',
  'Administração',
  'Emergência',
  'Oncologia'
];

export const roles = [
  'Médico',
  'Enfermeiro',
  'Técnico',
  'Administrador',
  'Recepcionista',
  'Farmacêutico'
];