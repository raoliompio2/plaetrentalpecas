'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { allManufacturers, allProducts } from '@/lib/mock-data';

const categories = [...new Set(allProducts.map(p => p.category))];
const manufacturers = [...new Set(allManufacturers.map(m => m.name))];

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([50, 1000]);

  return (
    <div className="w-full lg:w-80 lg:shrink-0">
      <h2 className="text-xl font-headline font-bold mb-4">Filtros</h2>
      <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="font-semibold">Categoria</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`cat-${category}`} />
                  <Label htmlFor={`cat-${category}`} className="font-normal">{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="manufacturer">
          <AccordionTrigger className="font-semibold">Fabricante</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {manufacturers.map((manufacturer) => (
                <div key={manufacturer} className="flex items-center space-x-2">
                  <Checkbox id={`mfg-${manufacturer}`} />
                  <Label htmlFor={`mfg-${manufacturer}`} className="font-normal">{manufacturer}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="font-semibold">Faixa de Preço</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={priceRange}
                max={1500}
                step={10}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex justify-between text-sm">
                <Input
                  className="w-24 h-8"
                  value={`R$ ${priceRange[0]}`}
                  readOnly
                />
                <Input
                  className="w-24 h-8 text-right"
                  value={`R$ ${priceRange[1]}`}
                  readOnly
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="availability">
          <AccordionTrigger className="font-semibold">Disponibilidade 3D</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center space-x-2">
              <Switch id="3d-availability" />
              <Label htmlFor="3d-availability">Apenas produtos com modelo 3D</Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="w-full mt-6" variant="default">Aplicar Filtros</Button>
    </div>
  );
}
