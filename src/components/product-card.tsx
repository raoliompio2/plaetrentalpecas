'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

type ProductCardProps = {
  product: {
    id: string;
    imageUrl: string;
    name: string;
    manufacturer: string;
    price: number;
    has3d: boolean;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Futuramente, aqui irá a lógica para adicionar ao orçamento
    console.log(`Adicionar ${product.name} ao orçamento`);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group flex flex-col h-full">
      <Link href={`/produtos/${product.id}`} className="flex-grow">
        <div className="relative aspect-square bg-secondary overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            data-ai-hint="industrial product"
          />
          {product.has3d && (
            <Badge
              variant="default"
              className="absolute top-2 right-2 bg-accent text-accent-foreground"
            >
              3D Disponível
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">{product.manufacturer}</p>
          <h3 className="font-headline font-semibold text-lg truncate" title={product.name}>
            {product.name}
          </h3>
          <p className="text-xl font-bold text-primary mt-2">
            R$ {product.price.toFixed(2)}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline" onClick={handleButtonClick}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar ao Orçamento
        </Button>
      </CardFooter>
    </Card>
  );
}
