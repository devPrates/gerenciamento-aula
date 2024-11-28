'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addCampus , updateCampus } from './actions';

type CampusFormProps = {
  campus?: { 
    id: string;
    name: string;
    acronym: string;
    email: string;
    phone: string;
    address: string;
    director: string;
  };
  isOpen: boolean;
  onClose: () => void;
};

export function CampusForm({ campus, isOpen, onClose }: CampusFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null | undefined >(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = campus
      ? await updateCampus(formData)
      : await addCampus(formData);

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
          <DialogTitle>{campus ? 'Editar campus' : 'Adicionar novo campus'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {campus && <input type="hidden" name="id" value={campus.id} />}
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" defaultValue={campus?.name} required />
          </div>
          <div>
            <Label htmlFor="acronym">Acrônimo</Label>
            <Input id="acronym" name="acronym" type="text" defaultValue={campus?.acronym} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" defaultValue={campus?.email} required />
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" name="phone" type="text" defaultValue={campus?.phone} required />
          </div>

          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" name="address" type="text" defaultValue={campus?.address} required />
          </div>

          <div>
            <Label htmlFor="director">Diretor</Label>
            <Input id="director" name="director" type="email" defaultValue={campus?.director} required />
          </div>
          
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">{campus ? 'Atualizar' : 'Adicionar'} Campus</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
