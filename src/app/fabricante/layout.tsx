
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { ManufacturerSidebar } from '@/components/layout/manufacturer-sidebar';

export default function ManufacturerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ManufacturerSidebar />
      <SidebarInset>
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
