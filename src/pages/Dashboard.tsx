import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { useUserStore } from '@/store/useUserStore';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardFilters } from '@/components/dashboard/DashboardFilters';
import { UserList } from '@/components/dashboard/UserList';
import { UserModal } from '@/components/dashboard/UserModal';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { User } from '@/types/user';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { 
    filteredUsers, 
    isLoading, 
    fetchUsers, 
    searchTerm, 
    statusFilter,
    setSearchTerm,
    setStatusFilter 
  } = useUserStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleCreateUser = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        user={user} 
        onCreateUser={handleCreateUser}
      />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <StatsCards users={filteredUsers} />
        
        <DashboardFilters
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          onSearchChange={setSearchTerm}
          onStatusFilterChange={setStatusFilter}
        />
        
        <UserList
          users={filteredUsers}
          isLoading={isLoading}
          onEditUser={handleEditUser}
        />
      </main>

      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        editingUser={editingUser}
      />
    </div>
  );
};

export default Dashboard;