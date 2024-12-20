'use client'

import AcessChart from '@/components/admin/AcessChart';
import { BreadcrumbComponent } from '@/components/admin/BreadcrumbComponent'
import ReplaceChart from '@/components/admin/ReplaceChart';

import StatCard from '@/components/admin/StatCard'
import { Building2, GraduationCap, Users, UserSquare2 } from 'lucide-react'

const direitorioItems = [
  { label: "Dashboard", href: "/dashboard" },
];


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <BreadcrumbComponent items={direitorioItems} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Campus Cadastrados" value={5} icon={<Building2 className="h-6 w-6 text-muted-foreground font-extrabold" />} />
        <StatCard title="Cursos Cadastrados" value={25} icon={<GraduationCap className="h-6 w-6 text-muted-foreground font-extrabold" />} />
        <StatCard title="Turmas Cadastradas" value={50} icon={<Users className="h-6 w-6 text-muted-foreground font-extrabold" />} />
        <StatCard title="Professores Cadastrados" value={100} icon={<UserSquare2 className="h-6 w-6 text-muted-foreground font-extrabold" />} />
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <ReplaceChart />
        <AcessChart />
      </div>
    </div>
  )
}


