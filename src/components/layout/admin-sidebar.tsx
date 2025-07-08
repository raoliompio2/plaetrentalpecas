
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard, Factory, Package, Users, Settings, Rocket, LogOut, ScrollText, DatabaseBackup, BookText, LineChart } from 'lucide-react';

const adminNavItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/reports', label: 'Relatórios', icon: LineChart },
  { href: '/admin/fabricantes', label: 'Fabricantes', icon: Factory },
  { href: '/admin/produtos', label: 'Produtos', icon: Package },
  { href: '/admin/usuarios', label: 'Usuários', icon: Users },
  { href: '/admin/configuracoes', label: 'Configurações', icon: Settings },
];

const adminSystemItems = [
    { href: '/admin/logs', label: 'Logs', icon: ScrollText },
    { href: '/admin/backup', label: 'Backup', icon: DatabaseBackup },
    { href: '/admin/documentacao', label: 'Documentação', icon: BookText },
]

export function AdminSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-border/50"
    >
      <SidebarHeader>
        <div className={cn("flex items-center gap-2 p-2", open ? "justify-start" : "justify-center")}>
          <Rocket className="h-6 w-6 text-primary" />
          <span className={cn("font-bold font-headline text-lg", !open && "hidden")}>
            MetaCraft
          </span>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          {adminNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))}
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
        <Separator className="my-2"/>
         <SidebarMenu>
          {adminSystemItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || pathname.startsWith(item.href)}
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
              <AvatarImage src="https://placehold.co/100x100.png" alt="Admin User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className={cn("flex flex-col", !open && "hidden")}>
                <span className="text-sm font-semibold">Admin</span>
                <span className="text-xs text-muted-foreground">admin@metacraft.com</span>
            </div>
          </div>
          <Button variant="ghost" className={cn("w-full justify-start gap-2 mt-2", !open && "px-2")}>
            <LogOut className="h-4 w-4" />
            <span className={cn(!open && "hidden")}>Logout</span>
          </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
