'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, PlusCircle, Search, ListFilter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { allProducts, allManufacturers } from '@/lib/mock-data';

const manufacturers = [...new Set(allManufacturers.map(m => m.name))];
const statuses = [...new Set(allProducts.map(p => p.status))];

export default function AdminProdutosPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilters, setStatusFilters] = useState<string[]>([]);
    const [manufacturerFilters, setManufacturerFilters] = useState<string[]>([]);

    const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
        setter(prev => 
            prev.includes(value) 
                ? prev.filter(v => v !== value) 
                : [...prev, value]
        );
    };

    const filteredProducts = useMemo(() => {
        return allProducts.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilters.length === 0 || statusFilters.includes(p.status);
            const matchesManufacturer = manufacturerFilters.length === 0 || manufacturerFilters.includes(p.manufacturer);
            return matchesSearch && matchesStatus && matchesManufacturer;
        });
    }, [searchTerm, statusFilters, manufacturerFilters]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-headline font-bold">Gerenciar Produtos</h1>
                    <p className="text-muted-foreground">Adicione, edite ou remova produtos do catálogo.</p>
                </div>
                <div className="flex w-full sm:w-auto items-center gap-2">
                    <div className="relative flex-1 sm:flex-initial">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Buscar por nome ou SKU..." 
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
                                    Filtros
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>Filtrar por Status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {statuses.map(status => (
                                <DropdownMenuCheckboxItem 
                                    key={status}
                                    checked={statusFilters.includes(status)}
                                    onSelect={(e) => e.preventDefault()}
                                    onClick={() => toggleFilter(setStatusFilters, status)}
                                >
                                    {status}
                                </DropdownMenuCheckboxItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Filtrar por Fabricante</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {manufacturers.map(manufacturer => (
                                <DropdownMenuCheckboxItem 
                                    key={manufacturer}
                                    checked={manufacturerFilters.includes(manufacturer)}
                                    onSelect={(e) => e.preventDefault()}
                                    onClick={() => toggleFilter(setManufacturerFilters, manufacturer)}
                                >
                                    {manufacturer}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size="sm" className="h-9 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Adicionar Produto</span>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((p) => (
                    <Card key={p.id} className="flex flex-col">
                        <CardHeader className="p-0">
                            <div className="relative aspect-square">
                                <Image src={p.imageUrl} alt={p.name} fill className="rounded-t-lg object-cover" data-ai-hint="industrial product" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-grow">
                            <Badge variant={p.status === 'Publicado' ? 'default' : p.status === 'Rascunho' ? 'secondary' : 'outline'} className="mb-2">
                                {p.status}
                            </Badge>
                            <h3 className="font-semibold line-clamp-2">{p.name}</h3>
                            <p className="text-sm text-muted-foreground">{p.manufacturer}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between items-center">
                            <p className="font-bold">R$ {p.price.toFixed(2)}</p>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <Link href={`/admin/produtos/${p.id}`}>Ver Detalhes</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={`/produtos/${p.id}`} target="_blank">Ver na loja</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Excluir</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
