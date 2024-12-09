import { Card } from "@/components/ui/card"
import { ArrowUpRight, Clock, GraduationCap, Users, Wallet, Receipt, Award, MonitorCog, Wheat, Coffee, DatabaseBackup, TreePine } from 'lucide-react'
import { SearchBar } from "./SearchBar"

export default function Times() {
  const items = [
    {
      title: "Manutenção de Computadores",
      description: "Curso tecnico em manutenção de computadores",
      icon: MonitorCog,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
    },
    {
      title: "Agronomia",
      description: "Curso superior em Agronomia",
      icon: Wheat,
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500",
    },
    {
      title: "TADS",
      description: "Tecnoólogo em Análise e Desenvolvimento de Sistemas",
      icon: Coffee,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      title: "Informatica para Internet",
      description: "Curso técnico em informatica para interntet",
      icon: DatabaseBackup,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-500",
    },
    {
      title: "Agricultura",
      description: "Curso técnico em agricultura",
      icon: TreePine,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500",
    },
    {
      title: "Espanhol Básico",
      description: "Curso de espanhol basico 180 horas",
      icon: GraduationCap,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Quadro de Horários</h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        Horarios de troca ou substituição de aulas do seu campus
      </p>
      
      <SearchBar />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <Card
              key={index}
              className="relative p-6 hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground" />
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.iconBg}`}>
                <Icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

