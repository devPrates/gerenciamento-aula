"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Repeat, UserPlus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"

const ScheduleCard = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Calendar className="mr-2" />
        Quadro de Horários
      </CardTitle>
      <CardDescription>Visualize e gerencie os horários das aulas</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Acesse o quadro de horários atualizado para todas as turmas e professores.</p>
      <ul className="mt-2 list-disc list-inside">
        <li>Horários semanais</li>
        <li>Visualização por turma ou professor</li>
        <li>Exportação em PDF</li>
      </ul>

      <Button className="mt-4" size={'sm'}>Mais Informações</Button>
    </CardContent>
  </Card>
)

const ClassSwapCard = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Repeat className="mr-2" />
        Troca de Aulas
      </CardTitle>
      <CardDescription>Solicite e gerencie trocas de aulas</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Sistema fácil para solicitar e aprovar trocas de aulas entre professores.</p>
      <ul className="mt-2 list-disc list-inside">
        <li>Solicitação rápida</li>
        <li>Aprovação da coordenação</li>
        <li>Notificações automáticas</li>
      </ul>

      <Button className="mt-4" size={'sm'}>Mais Informações</Button>
    </CardContent>
  </Card>
)

const SubstitutionCard = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center">
        <UserPlus className="mr-2" />
        Substituição de Aulas
      </CardTitle>
      <CardDescription>Gerencie substituições de professores</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Organize substituições de professores de forma rápida e eficiente.</p>
      <ul className="mt-2 list-disc list-inside">
        <li>Banco de professores substitutos</li>
        <li>Matching automático</li>
        <li>Histórico de substituições</li>
      </ul>

      <Button className="mt-4" size={'sm'}>Mais Informações</Button>
    </CardContent>
  </Card>
)

export default function ServicesComponent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center" id="serviços">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[ScheduleCard, ClassSwapCard, SubstitutionCard].map((Card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="transform transition-all duration-300 ease-in-out"
          >
            <div className={`h-full ${hoveredCard === index ? 'shadow-lg' : 'shadow'} rounded-lg overflow-hidden`}>
              <Card />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

