import { create } from 'zustand';
import { AuthState, User } from '@/types/user';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,

  login: async (email: string, password: string) => {
    // Mock login - aceita qualquer email/password válidos
    if (email && password.length >= 6) {
      const mockUser: User = {
        id: '1',
        name: 'Administrador BlueRise',
        email,
        role: 'Administrador do Sistema',
        status: 'active',
        department: 'Administração',
        createdAt: new Date().toISOString().split('T')[0],
      };

      set({
        isAuthenticated: true,
        user: mockUser,
      });

      return true;
    }
    
    return false;
  },

  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
    });
  },
}));