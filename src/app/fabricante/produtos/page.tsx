'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
    DropdownMenu, 
    DropdownMenuCheckboxItem, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, PlusCircle, Search, ListFilter, File, Box } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { allProducts } from '@/lib/mock-data'

// In a real app, this would be filtered by the logged-in manufacturer
const myProducts = allProducts.filter(p => ['Alpha Dynamics', 'Gamma Tech', 'Delta Solutions', 'Omega Industries'].includes(p.manufacturer));

const categories = [...new Set(myProducts.map(p => p.category))];
const statuses = [...new Set(myProducts.map(p => p.status))];


export default function ManufacturerProdutosPage() {
    // In a real app, filter state would be managed with search params or a state manager
    const [searchTerm, setSearchTerm] = useState('');

    const statusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Publicado': return 'default';
            case 'Rascunho': return 'secondary';
            case 'Arquivado': return 'outline';
            default: return 'secondary';
        }
    }
    
    const filteredProducts = useMemo(() => {
         return myProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);

    return (
        <div className="space-y-6">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-headline font-bold">Meus Produtos</h1>
                    <p className="text-muted-foreground">Gerencie e filtre seu catálogo de produtos na plataforma.</p>
                </div>
                <div className="flex w-full sm:w-auto items-center gap-2">
                    <Button size="sm" variant="outline" className="h-9 gap-1 w-full sm:w-auto">
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Exportar</span>
                    </Button>
                    <Button asChild size="sm" className="h-9 gap-1 w-full sm:w-auto">
                        <Link href="/fabricante/produtos/novo">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Adicionar Produto</span>
                        </Link>
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
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
                                <Button variant="outline" className="gap-1.5">
                                    <ListFilter className="h-4 w-4" />
                                    <span>Filtros</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-64">
                                <DropdownMenuLabel>Filtrar Por</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                
                                <DropdownMenuLabel className="font-normal text-muted-foreground px-2">Status</DropdownMenuLabel>
                                {statuses.map(status => (
                                    <DropdownMenuCheckboxItem key={status}>
                                        {status}
                                    </DropdownMenuCheckboxItem>
                                ))}
                                
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel className="font-normal text-muted-foreground px-2">Setor / Categoria</DropdownMenuLabel>
                                {categories.map(category => (
                                    <DropdownMenuCheckboxItem key={category}>
                                        {category}
                                    </DropdownMenuCheckboxItem>
                                ))}

                                <DropdownMenuSeparator />
                                <div className='relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
                                    <Checkbox id="has3d-filter" className='mr-2'/>
                                    <Label htmlFor='has3d-filter' className='w-full cursor-pointer'>Apenas com modelo 3D</Label>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((p) => (
                            <Card key={p.id} className="flex flex-col">
                                <CardHeader className="p-0 relative">
                                    <Badge variant={statusBadgeVariant(p.status)} className="absolute top-2 left-2 z-10">
                                        {p.status}
                                    </Badge>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="absolute top-1 right-1 z-10 h-8 w-8 bg-black/20 hover:bg-black/40 text-white">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Editar</DropdownMenuItem>
                                            <DropdownMenuItem>Ver na loja</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">Excluir</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <div className="aspect-square relative">
                                         <Image src={p.imageUrl} alt={p.name} fill className="rounded-t-lg object-cover" data-ai-hint="industrial product" />
                                         {p.has3d && <Box className="h-5 w-5 absolute bottom-2 right-2 text-white" title="Modelo 3D disponível" />}
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 flex-grow">
                                     <p className="text-xs text-muted-foreground">{p.category}</p>
                                    <h3 className="font-semibold line-clamp-2" title={p.name}>{p.name}</h3>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <p className="text-xs text-muted-foreground font-mono">{p.sku}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
