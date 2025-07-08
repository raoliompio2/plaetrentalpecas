'use client';

import { useState, useMemo, useTransition } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, PlusCircle, Search, ListFilter } from "lucide-react"
import Link from "next/link"
import { DeleteManufacturerDialog } from "@/components/admin/delete-manufacturer-dialog";
import { deleteManufacturer } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { allManufacturers } from "@/lib/mock-data";

const statuses = ['Ativo', 'Pendente', 'Inativo'];

export default function AdminFabricantesPage() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [manufacturerToDelete, setManufacturerToDelete] = useState<string | null>(null);
    const { toast } = useToast();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilters, setStatusFilters] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const toggleStatusFilter = (status: string) => {
        setStatusFilters(prev => 
            prev.includes(status) 
                ? prev.filter(s => s !== status) 
                : [...prev, status]
        );
    };

    const filteredManufacturers = useMemo(() => {
        // In a real app, filtering would ideally be done on the server.
        // For this mock, we filter the static list.
        return allManufacturers.filter(m => {
            const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilters.length === 0 || statusFilters.includes(m.status);
            return matchesSearch && matchesStatus;
        });
    }, [searchTerm, statusFilters]);

    const handleDeleteClick = (name: string) => {
        setManufacturerToDelete(name);
        setDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        if (!manufacturerToDelete) return;
        
        startTransition(async () => {
            const result = await deleteManufacturer(manufacturerToDelete);
            
            if (result.success) {
                toast({
                    title: "Sucesso!",
                    description: result.message,
                });
            } else {
                 toast({
                    title: "Erro",
                    description: "Não foi possível excluir o fabricante.",
                    variant: "destructive",
                });
            }
            
            setDialogOpen(false);
            setManufacturerToDelete(null);
        });
    };

    return (
        <>
            <DeleteManufacturerDialog 
                isOpen={dialogOpen} 
                onOpenChange={setDialogOpen}
                manufacturerName={manufacturerToDelete || ''}
                onConfirm={handleConfirmDelete}
                isPending={isPending}
            />
            <div className="space-y-6">
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-headline font-bold">Gerenciar Fabricantes</h1>
                        <p className="text-muted-foreground">Adicione, edite ou remova fabricantes parceiros.</p>
                    </div>
                    <div className="flex w-full sm:w-auto items-center gap-2">
                         <div className="relative flex-1 sm:flex-initial">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder="Buscar..." 
                                className="pl-8" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Status</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filtrar por Status</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {statuses.map(status => (
                                    <DropdownMenuCheckboxItem
                                        key={status}
                                        checked={statusFilters.includes(status)}
                                        onSelect={(e) => e.preventDefault()}
                                        onClick={() => toggleStatusFilter(status)}
                                    >
                                        {status}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button asChild>
                            <Link href="/admin/fabricantes/novo">
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Adicionar Novo
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredManufacturers.map((m) => (
                        <Card key={m.slug} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{m.name}</CardTitle>
                                <CardDescription>{m.productCount} produtos cadastrados</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {/* Can add more details here in the future */}
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <Badge variant={m.status === 'Ativo' ? 'default' : m.status === 'Pendente' ? 'secondary' : 'destructive'}>
                                    {m.status}
                                </Badge>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem asChild>
                                            <Link href={`/admin/fabricantes/${m.slug}`}>Ver Detalhes</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>Ver Produtos</DropdownMenuItem>
                                        <DropdownMenuItem 
                                            className="text-destructive"
                                            onSelect={() => handleDeleteClick(m.name)}
                                        >
                                            Excluir
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}
