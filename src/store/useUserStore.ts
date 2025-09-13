import { create } from 'zustand';
import { User, UserFormData } from '@/types/user';
import { mockUsers } from '@/lib/mockData';

interface UserStore {
  users: User[];
  filteredUsers: User[];
  searchTerm: string;
  statusFilter: 'all' | 'active' | 'inactive';
  isLoading: boolean;
  
  setUsers: (users: User[]) => void;
  addUser: (userData: UserFormData) => void;
  updateUser: (id: string, userData: UserFormData) => void;
  deleteUser: (id: string) => void;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: 'all' | 'active' | 'inactive') => void;
  filterUsers: () => void;
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  filteredUsers: [],
  searchTerm: '',
  statusFilter: 'all',
  isLoading: false,

  setUsers: (users) => {
    set({ users });
    get().filterUsers();
  },

  addUser: (userData) => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`,
    };
    
    const updatedUsers = [...get().users, newUser];
    set({ users: updatedUsers });
    get().filterUsers();
  },

  updateUser: (id, userData) => {
    const updatedUsers = get().users.map(user =>
      user.id === id ? { ...user, ...userData } : user
    );
    set({ users: updatedUsers });
    get().filterUsers();
  },

  deleteUser: (id) => {
    const updatedUsers = get().users.filter(user => user.id !== id);
    set({ users: updatedUsers });
    get().filterUsers();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterUsers();
  },

  setStatusFilter: (status) => {
    set({ statusFilter: status });
    get().filterUsers();
  },

  filterUsers: () => {
    const { users, searchTerm, statusFilter } = get();
    
    let filtered = users;

    // Filtrar por status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    // Filtrar por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    set({ filteredUsers: filtered });
  },

  fetchUsers: async () => {
    set({ isLoading: true });
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    set({ 
      users: mockUsers,
      isLoading: false 
    });
    
    get().filterUsers();
  },
}));