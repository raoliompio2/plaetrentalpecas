'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ListFilter } from 'lucide-react';
import { quoteActivity, allUsers } from '@/lib/mock-data';


const quoteStatuses = [...new Set(quoteActivity.map(q => q.status))];
const userTypes = [...new Set(allUsers.map(u => u.role))];

export default function AdminReportsPage() {
    const [quoteStatusFilters, setQuoteStatusFilters] = useState<string[]>([]);
    const [userTypeFilters, setUserTypeFilters] = useState<string[]>([]);

    const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
        setter(prev => 
            prev.includes(value) 
                ? prev.filter(v => v !== value) 
                : [...prev, value]
        );
    };

    const filteredQuotes = useMemo(() => {
        return quoteActivity.filter(q => quoteStatusFilters.length === 0 || quoteStatusFilters.includes(q.status));
    }, [quoteStatusFilters]);

    const filteredUsers = useMemo(() => {
        return allUsers.filter(u => userTypeFilters.length === 0 || userTypeFilters.includes(u.role));
    }, [userTypeFilters]);


  return (
    <div>
        <h1 className="text-3xl font-headline font-bold mb-6">Relatórios</h1>
        <Tabs defaultValue="quotes">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
                <TabsTrigger value="quotes">Orçamentos</TabsTrigger>
                <TabsTrigger value="engagement">Engajamento</TabsTrigger>
                <TabsTrigger value="catalog">Catálogo</TabsTrigger>
            </TabsList>

            <TabsContent value="quotes" className="mt-6">
                <Card>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle>Atividade de Orçamentos</CardTitle>
                                <CardDescription>Visualize o status de todas as solicitações de orçamento na plataforma.</CardDescription>
                            </div>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-9 gap-1">
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span>Status</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Filtrar por Status</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {quoteStatuses.map(status => (
                                        <DropdownMenuCheckboxItem
                                            key={status}
                                            checked={quoteStatusFilters.includes(status)}
                                            onSelect={e => e.preventDefault()}
                                            onClick={() => toggleFilter(setQuoteStatusFilters, status)}
                                        >
                                            {status}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {filteredQuotes.map(quote => (
                            <Card key={quote.id}>
                                <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div>
                                        <p className="font-semibold">{quote.id} - {quote.company}</p>
                                        <p className="text-sm text-muted-foreground">Fabricante: {quote.manufacturer}</p>
                                    </div>
                                    <Badge variant={quote.status === 'Respondido' ? 'secondary' : 'default'}>{quote.status}</Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="engagement" className="mt-6">
                 <Card>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle>Engajamento de Usuários</CardTitle>
                                <CardDescription>Monitore a atividade recente dos usuários na plataforma.</CardDescription>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-9 gap-1">
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span>Tipo</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Filtrar por Tipo</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {userTypes.map(type => (
                                        <DropdownMenuCheckboxItem
                                            key={type}
                                            checked={userTypeFilters.includes(type)}
                                            onSelect={e => e.preventDefault()}
                                            onClick={() => toggleFilter(setUserTypeFilters, type)}
                                        >
                                            {type}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {filteredUsers.map(user => (
                           <Card key={user.name}>
                               <CardContent className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="professional headshot" />
                                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">{user.name}</p>
                                            <p className="text-sm text-muted-foreground">{user.company}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={user.role === 'Admin' ? 'destructive' : user.role === 'Fabricante' ? 'default' : 'secondary'}>
                                            {user.role}
                                        </Badge>
                                        <p className="text-xs text-muted-foreground mt-1">{user.lastActivity}</p>
                                    </div>
                               </CardContent>
                           </Card>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
            
            <TabsContent value="catalog" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Relatório do Catálogo</CardTitle>
                        <CardDescription>Em breve: Análises sobre os produtos mais vistos, categorias populares e mais.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-64 flex items-center justify-center bg-secondary rounded-b-lg">
                        <p className="text-muted-foreground">Em desenvolvimento...</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  )
}
