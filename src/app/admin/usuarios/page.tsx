'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, UserPlus, ListFilter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { allUsers } from "@/lib/mock-data";

const roles = [...new Set(allUsers.map(user => user.role))];

export default function AdminUsuariosPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilters, setRoleFilters] = useState<string[]>([]);

    const toggleRoleFilter = (role: string) => {
        setRoleFilters(prev => 
            prev.includes(role) 
                ? prev.filter(r => r !== role) 
                : [...prev, role]
        );
    };

    const filteredUsers = useMemo(() => {
        return allUsers.filter(user => 
            (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (roleFilters.length === 0 || roleFilters.includes(user.role))
        );
    }, [searchTerm, roleFilters]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-headline font-bold">Gerenciar Usuários</h1>
                    <p className="text-muted-foreground">Visualize, filtre e gerencie usuários da plataforma.</p>
                </div>
                 <div className="flex w-full sm:w-auto items-center gap-2">
                     <div className="relative flex-1 sm:flex-initial">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Buscar por nome ou email..." 
                            className="pl-8" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-9 gap-1">
                                <ListFilter className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Tipo
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filtrar por Tipo</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {roles.map(role => (
                                <DropdownMenuCheckboxItem
                                    key={role}
                                    checked={roleFilters.includes(role)}
                                    onSelect={(e) => e.preventDefault()}
                                    onClick={() => toggleRoleFilter(role)}
                                >
                                    {role}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button asChild>
                        <Link href="/admin/usuarios/novo">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Adicionar Usuário
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredUsers.map((user) => (
                    <Card key={user.id} className="flex flex-col text-center">
                        <CardContent className="p-6 flex-grow flex flex-col items-center">
                            <Avatar className="w-20 h-20 mb-4">
                                <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="professional headshot" />
                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-sm text-muted-foreground truncate w-full">{user.email}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex flex-col gap-4">
                             <Badge variant={user.role === 'Admin' ? 'destructive' : user.role === 'Fabricante' ? 'default' : 'secondary'}>
                                {user.role}
                            </Badge>
                             <div className="w-full flex justify-between items-center text-xs text-muted-foreground">
                                <span>Últ. atividade:</span>
                                <span>{user.lastActivity}</span>
                             </div>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full">
                                        Ações <MoreHorizontal className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <Link href={`/admin/usuarios/${user.id}`}>Ver Detalhes</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Redefinir Senha</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">
                                        Desativar
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
