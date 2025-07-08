'use client';

import { useState, useMemo } from 'react';
import ManufacturerCard from '@/components/manufacturer-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allManufacturers } from '@/lib/mock-data';

const allCategories = ['Todos', ...Array.from(new Set(allManufacturers.map((m) => m.mainCategory)))];

export default function FabricantesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredManufacturers = useMemo(() => {
    return allManufacturers.filter((manufacturer) => {
      const matchesSearch = manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || manufacturer.mainCategory === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold">Nossos Fabricantes</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore nossa rede de parceiros confiáveis, líderes em inovação e qualidade no setor industrial.
        </p>
      </div>

      <div className="mb-12 space-y-6">
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar fabricante por nome..." 
              className="pl-9" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {filteredManufacturers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredManufacturers.map((m) => (
            <ManufacturerCard key={m.slug} manufacturer={m} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-headline font-bold">Nenhum fabricante encontrado</h3>
          <p className="text-muted-foreground mt-2">Tente ajustar seus filtros de busca.</p>
        </div>
      )}
    </div>
  );
}
