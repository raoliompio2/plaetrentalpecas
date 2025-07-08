'use client';

import { useState, useMemo, use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/product-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Globe, Search, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import ProductFilters from '@/components/product-filters';
import { manufacturersData, allProducts } from '@/lib/mock-data';

type SortOption = 'name-asc' | 'price-asc' | 'price-desc';
const sortLabels: Record<SortOption, string> = {
    'name-asc': 'Nome (A-Z)',
    'price-asc': 'Preço (Menor)',
    'price-desc': 'Preço (Maior)',
};

export default function ManufacturerCatalog({ slug }: { slug: string }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('name-asc');
  
  const manufacturer = manufacturersData[slug];

  if (!manufacturer) {
    notFound();
  }
  
  const filteredAndSortedProducts = useMemo(() => {
    let products = allProducts.filter((p: any) => p.manufacturerSlug === slug);

    if (searchTerm) {
      products = products.filter((p: any) => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    products.sort((a: any, b: any) => {
        switch (sortOption) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'name-asc':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    return products;
  }, [slug, searchTerm, sortOption]);

  return (
    <div>
      <header className="relative h-48 md:h-64 bg-secondary flex items-center justify-center">
        <Image
          src={manufacturer.coverUrl}
          alt={`${manufacturer.name} cover image`}
          fill
          className="object-cover opacity-20"
          data-ai-hint="abstract texture"
        />
        <div className="relative w-64 h-24">
            <Image
            src={manufacturer.logoUrl.replace('128x128', '256x64')}
            alt={`${manufacturer.name} logo`}
            fill
            className="object-contain"
            data-ai-hint="logo"
            />
        </div>
      </header>

      <div className="container py-12">
        <Card className="mb-12">
            <CardContent className="p-6">
                <h2 className="text-2xl font-headline font-bold mb-2">{manufacturer.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{manufacturer.description}</p>
                 <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href={`mailto:${manufacturer.email}`} className="hover:text-primary">{manufacturer.email}</a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{manufacturer.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href={manufacturer.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{manufacturer.website}</a>
                  </div>
                </div>
              </CardContent>
        </Card>

        <div className="flex flex-col lg:flex-row gap-8">
            <ProductFilters />

            <div className="flex-1">
                <h3 className="text-3xl font-headline font-bold mb-6">Catálogo de Produtos</h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
                <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Buscar nos produtos..." 
                        className="pl-9" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Ordenar por:</span>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-48 justify-between">
                        {sortLabels[sortOption]} <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => setSortOption('name-asc')}>Nome (A-Z)</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setSortOption('price-asc')}>Preço (Menor)</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setSortOption('price-desc')}>Preço (Maior)</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                </div>

                {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredAndSortedProducts.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                ) : (
                    <div className="text-center py-16 border-2 border-dashed rounded-lg bg-secondary/50">
                        <h3 className="text-xl font-headline font-bold">Nenhum produto encontrado</h3>
                        <p className="text-sm text-muted-foreground mt-1">Não há produtos que correspondam à sua busca.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
