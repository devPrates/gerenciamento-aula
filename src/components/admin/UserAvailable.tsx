import React from 'react';

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User } from '@/types/card';

interface UserCardProps {
    user: User;
}

export const UserAvailable: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <div className='flex items-center gap-1'>
                <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </div>
            <Badge variant={user.status === 'disponivel' ? 'default' : 'destructive'}>
                {user.status}
            </Badge>
            <Button disabled={user.status === 'indisponivel'}>
                Solicitar
            </Button>
        </div>
    );
};

