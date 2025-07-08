
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, PlusCircle } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { productsData, allProducts } from '@/lib/mock-data';

const relatedProducts = allProducts.slice(0, 4);

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = productsData[id];

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-12">
        <Link href="/produtos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para todos os produtos
        </Link>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border mb-4">
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              fill
              className="object-cover"
              data-ai-hint="industrial product"
            />
             {product.has3d && (
              <Badge variant="default" className="absolute top-3 right-3 bg-accent text-accent-foreground">
                3D Disponível
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img: any) => (
              <div key={img.id} className="relative aspect-square w-full overflow-hidden rounded-md border hover:border-primary cursor-pointer">
                <Image src={img.url} alt={img.alt} fill className="object-cover" data-ai-hint="industrial component" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Link href={`/s/${product.manufacturerSlug}`} className="text-sm text-primary hover:underline">{product.manufacturer}</Link>
            <h1 className="text-3xl lg:text-4xl font-headline font-bold mt-1">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mt-4">R$ {product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          
          <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>

          <Button size="lg" className="w-full">
            <PlusCircle className="mr-2 h-5 w-5" />
            Adicionar ao Orçamento
          </Button>

          <Accordion type="single" collapsible defaultValue="specs">
            <AccordionItem value="specs">
              <AccordionTrigger className="text-lg font-semibold">Especificações Técnicas</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm">
                    {product.specifications.map((spec: any) => (
                        <li key={spec.key} className="flex justify-between border-b pb-2">
                            <span className="text-muted-foreground">{spec.key}</span>
                            <span className="font-medium text-right">{spec.value}</span>
                        </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
       {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Produtos Relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.filter(p => p.id !== id).slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
