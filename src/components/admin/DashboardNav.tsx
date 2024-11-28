"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Users, BarChart2, Settings, Replace, School, GraduationCap, BookType, WalletCards } from 'lucide-react'

export function DashboardNav() {
  const pathname = usePathname()

  const items = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Campus",
      href: "/dashboard/campus",
      icon: School,
    },
    {
      title: "Cursos",
      href: "/dashboard/cursos",
      icon: WalletCards,
    },
    {
      title: "Turmas",
      href: "/dashboard/turmas",
      icon: BookType,
    },
    {
      title: "Professores",
      href: "/dashboard/users",
      icon: GraduationCap,
    },
    {
      title: "Substituição",
      href: "/dashboard/substituicao",
      icon: Replace,
    },
    {
      title: "Troca de Aula",
      href: "/dashboard/troca",
      icon: BarChart2,
    },
    {
      title: "Configurações",
      href: "/dashboard/configuracoes",
      icon: Settings,
    },
  ]

  return (
    <ScrollArea className="flex-1">
      <div className="space-y-1 p-2 border-r-[1px] min-h-[90vh]">
        {items.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === item.href && "bg-green-300 font-bold hover:bg-green-200"
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-8 w-8" />
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
    </ScrollArea>
  )
}

