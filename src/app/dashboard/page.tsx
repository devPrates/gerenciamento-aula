'use client'

import AccessChart from '@/components/admin/AccessChart'
import ClassChangeChart from '@/components/admin/ClassChangeChart'
import StatCard from '@/components/admin/StatCard'
import { Building2, GraduationCap, Users, UserSquare2 } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Campus Cadastrados" value={5} icon={<Building2 className="h-4 w-4 text-muted-foreground" />} />
        <StatCard title="Cursos Cadastrados" value={25} icon={<GraduationCap className="h-4 w-4 text-muted-foreground" />} />
        <StatCard title="Turmas Cadastradas" value={50} icon={<Users className="h-4 w-4 text-muted-foreground" />} />
        <StatCard title="Professores Cadastrados" value={100} icon={<UserSquare2 className="h-4 w-4 text-muted-foreground" />} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <AccessChart />
        <ClassChangeChart />
      </div>
    </div>
  )
}


