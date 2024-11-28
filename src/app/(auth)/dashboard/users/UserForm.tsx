'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addUser, updateUser } from './actions';

type UserFormProps = {
  user?: { id: string; name: string; email: string; role: string };
  isOpen: boolean;
  onClose: () => void;
};

export function UserForm({ user, isOpen, onClose }: UserFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null | undefined >(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = user
      ? await updateUser(formData)
      : await addUser(formData);

    if ('error' in result) {
      setError(result.error);
    } else {
      onClose();
      router.refresh();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user ? 'Editar usuário' : 'Adicionar novo usuário'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {user && <input type="hidden" name="id" value={user.id} />}
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" defaultValue={user?.name} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" defaultValue={user?.email} required />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select name="role" defaultValue={user?.role ?? 'User'}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">{user ? 'Atualizar' : 'Adicionar'} usuário</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
