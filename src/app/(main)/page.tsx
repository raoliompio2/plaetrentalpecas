import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Factory, Package, Users } from 'lucide-react';
import ManufacturerCard from '@/components/manufacturer-card';
import { featuredManufacturers, benefits } from '@/lib/mock-data';

const benefitIcons: { [key: string]: React.ElementType } = {
  Package,
  Factory,
  Users,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container grid md:grid-cols-2 gap-8 items-center py-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
              O Futuro da Indústria Começa Aqui.
            </h1>
            <p className="text-lg text-muted-foreground">
              MetaCraft Hub é a sua plataforma central para encontrar componentes industriais,
              tecnologia de ponta e os melhores fabricantes do setor.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link href="/produtos">Explorar Produtos <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fabricantes">Ver Fabricantes</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 w-full hidden md:block">
            <Image
              src="https://placehold.co/600x400/1A237E/FFFFFF.png"
              alt="Industrial machinery"
              fill
              className="object-cover rounded-lg shadow-xl"
              data-ai-hint="industrial machinery"
            />
          </div>
        </div>
      </section>

      {/* Featured Manufacturers */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-headline font-bold text-center mb-2">Fabricantes em Destaque</h2>
          <p className="text-muted-foreground text-center mb-12">Conheça alguns dos nossos principais parceiros.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredManufacturers.map((m) => (
              <ManufacturerCard key={m.slug} manufacturer={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[benefit.iconName];
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold font-headline text-accent">10k+</p>
              <p className="text-lg">Produtos Cadastrados</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-headline text-accent">200+</p>
              <p className="text-lg">Fabricantes Parceiros</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-headline text-accent">5k+</p>
              <p className="text-lg">Empresas Atendidas</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-headline text-accent">99%</p>
              <p className="text-lg">Satisfação de Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for Partners */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-headline font-bold mb-4">É um Fabricante?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se à nossa plataforma e exponha seus produtos para milhares de compradores qualificados.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link href="/contato">Seja nosso parceiro <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
