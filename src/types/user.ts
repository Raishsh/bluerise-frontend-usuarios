export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  department: string;
  createdAt: string;
  avatar?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface UserFormData {
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive';
}