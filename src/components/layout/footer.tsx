import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Rocket, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">MetaCraft Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Conectando a indústria com inovação e tecnologia.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Twitter className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Linkedin className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Github className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/produtos" className="text-muted-foreground hover:text-primary">Produtos</Link></li>
              <li><Link href="/fabricantes" className="text-muted-foreground hover:text-primary">Fabricantes</Link></li>
              <li><Link href="/sobre" className="text-muted-foreground hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-muted-foreground hover:text-primary">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Termos de Serviço</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Fique por dentro das novidades da indústria.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Seu email" className="bg-background"/>
              <Button type="submit" variant="default">Inscrever</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MetaCraft Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
