import { User } from '@/types/user';
import { useUserStore } from '@/store/useUserStore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical, Edit, Trash2, Mail, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
}

export const UserCard = ({ user, onEdit }: UserCardProps) => {
  const deleteUser = useUserStore(state => state.deleteUser);
  const { toast } = useToast();

  const handleDelete = () => {
    deleteUser(user.id);
    toast({
      title: "Usuário removido",
      description: `${user.name} foi removido do sistema.`,
    });
  };

  return (
    <Card className="shadow-card hover:shadow-medical transition-all duration-200 group">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground truncate">{user.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{user.role}</p>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(user)} className="gap-2">
                <Edit className="w-4 h-4" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={handleDelete} 
                className="gap-2 text-destructive focus:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span className="truncate">{user.email}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building className="w-4 h-4" />
            <span>{user.department}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Badge 
            variant={user.status === 'active' ? 'default' : 'secondary'}
            className={user.status === 'active' 
              ? 'bg-success hover:bg-success/80 text-success-foreground' 
              : 'bg-warning hover:bg-warning/80 text-warning-foreground'
            }
          >
            {user.status === 'active' ? 'Ativo' : 'Inativo'}
          </Badge>
          
          <span className="text-xs text-muted-foreground">
            Desde {new Date(user.createdAt).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};