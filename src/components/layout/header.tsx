
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, ShoppingCart, Rocket } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../mode-toggle';

const navLinks = [
  { href: '/produtos', label: 'Produtos' },
  { href: '/fabricantes', label: 'Fabricantes' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/fabricante/dashboard', label: 'Área do Fabricante' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">MetaCraft Hub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname.startsWith(link.href) && link.href !== '/' ? 'text-foreground' : 'text-foreground/60',
                  pathname === '/' && link.href === '/' ? 'text-foreground' : ''
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-4"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2 mb-6">
                <Rocket className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">MetaCraft Hub</span>
            </Link>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-foreground/80 pl-4 py-2 rounded-l-md',
                    pathname.startsWith(link.href) && link.href !== '/' ? 'bg-secondary text-foreground' : 'text-foreground/60',
                    pathname === '/' && link.href === '/' ? 'bg-secondary text-foreground' : ''
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">MetaCraft Hub</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="relative w-full max-w-sm hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos ou fabricantes..."
              className="pl-9 h-9"
            />
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/orcamento">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Solicitar Orçamento</span>
            </Link>
          </Button>
          <ModeToggle />
          <Button asChild size="sm">
            <Link href="/login">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
