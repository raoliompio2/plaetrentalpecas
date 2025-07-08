import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type ManufacturerCardProps = {
  manufacturer: {
    slug: string;
    logoUrl: string;
    name: string;
    description: string;
    productCount: number;
    mainCategory: string;
  };
};

export default function ManufacturerCard({ manufacturer }: ManufacturerCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-4">
        <Image
          src={manufacturer.logoUrl}
          alt={`${manufacturer.name} logo`}
          width={64}
          height={64}
          className="w-16 h-16 object-contain border rounded-lg p-1 bg-white"
          data-ai-hint="logo"
        />
        <div className="flex-1">
          <CardTitle className="font-headline text-xl mb-1">{manufacturer.name}</CardTitle>
          <CardDescription className="line-clamp-3 text-sm">{manufacturer.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Package className="w-4 h-4 mr-2" />
            <span>{manufacturer.productCount} produtos</span>
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            <span>Principal: <Badge variant="secondary">{manufacturer.mainCategory}</Badge></span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/50">
        <Button asChild className="w-full" variant="default">
          <Link href={`/s/${manufacturer.slug}`}>
            Ver catálogo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
