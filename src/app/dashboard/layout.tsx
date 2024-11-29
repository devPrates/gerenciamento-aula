import { Metadata } from "next";
import AppSidebar from "@/components/admin/AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ToggleDarkMode";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accessibility, Bell, ChartArea } from "lucide-react";




export const metadata: Metadata = {
  title: "Admin Painel",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex justify-end gap-2 items-center">
              <form action="" className="flex max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Pesquisar..." />
                <Button type="submit">Buscar</Button>
              </form>
              <Bell />
              <Accessibility />
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className="mx-10 border h-full">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>



  );
}
