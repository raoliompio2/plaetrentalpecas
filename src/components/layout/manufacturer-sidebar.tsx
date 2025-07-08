
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import { LayoutDashboard, Package, List, Settings, LogOut, Rocket } from 'lucide-react';
import { Separator } from '../ui/separator';
import { ModeToggle } from '../mode-toggle';

const manufacturerNavItems = [
  { href: '/fabricante/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/fabricante/produtos', label: 'Meus Produtos', icon: Package },
  { href: '/fabricante/orcamentos', label: 'Orçamentos', icon: List },
  { href: '/fabricante/perfil', label: 'Meu Perfil', icon: Settings },
];

export function ManufacturerSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-border/50"
    >
      <SidebarHeader>
        <div className={cn("flex items-center gap-2 p-2", open ? "justify-start" : "justify-center")}>
           <Link href="/" className='flex items-center gap-2'>
            <Rocket className="h-6 w-6 text-primary" />
            <span className={cn("font-bold font-headline text-lg", !open && "hidden")}>
                MetaCraft
            </span>
          </Link>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          {manufacturerNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href)}
                tooltip={{ children: item.label }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <Separator className="my-2" />

      <SidebarFooter className="p-2">
         <div className={cn("flex items-center gap-3", !open && "justify-center")}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://placehold.co/128x128/1A237E/FFFFFF.png" alt="Alpha Dynamics Logo" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className={cn("flex flex-col", !open && "hidden")}>
                <span className="text-sm font-semibold">Alpha Dynamics</span>
                <span className="text-xs text-muted-foreground">contato@alpha.com</span>
            </div>
          </div>
          <div className={cn("flex items-center mt-2", open ? "justify-between" : "justify-center flex-col gap-2")}>
            <ModeToggle />
            <Button variant="ghost" className={cn("w-full justify-start gap-2", !open && "px-2 w-auto")}>
              <LogOut className="h-4 w-4" />
              <span className={cn(!open && "hidden")}>Logout</span>
            </Button>
          </div>
      </SidebarFooter>
    </Sidebar>
  );
}
