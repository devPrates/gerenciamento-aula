'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ClassData, mockClasses } from '@/types/card'
import { Button } from '../ui/button'

export default function Rooms() {
  // Estado para o termo de busca e a lista de turmas
  const [searchTerm, setSearchTerm] = useState('')
  const [classes, setClasses] = useState<ClassData[]>(mockClasses)

  // Função para filtrar as turmas com base no termo de busca
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase() // Normaliza o termo de busca
    setSearchTerm(term) // Atualiza o estado do termo de busca

    // Filtra as turmas baseando-se nos campos relevantes
    const filteredClasses = mockClasses.filter(classItem =>
      [classItem.courseName, classItem.classNumber, classItem.professorName, classItem.subjectName, classItem.location, classItem.schedule]
        .some(field => field.toLowerCase().includes(term))
    )

    setClasses(filteredClasses) // Atualiza o estado das turmas
  }

  return (
    <div 
      className="min-h-screen container mx-auto flex flex-col justify-center items-center p-6" 
      id="horários"
    >
      {/* Título do quadro de horários */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        Quadro de Horários de Troca ou Substituição
      </h1>

      {/* Barra de pesquisa */}
      <div className="flex gap-3 justify-center items-center mb-6">
        <Input
          type="text"
          placeholder="Pesquisar turmas..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-40"
          aria-label="Campo de pesquisa de turmas"
        />
        <Button onClick={() => console.log('Botão Pesquisar clicado')}>
          Pesquisar
        </Button>
      </div>

      {/* Área de scroll para exibir as turmas */}
      <ScrollArea className="flex-grow rounded-lg shadow-lg bg-white/50 backdrop-blur-sm w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* Renderização das turmas filtradas */}
          {classes.map(classItem => (
            <Card 
              key={classItem.id} 
              className="w-full transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader className="bg-gray-300 text-black rounded-t-lg">
                <CardTitle className="text-lg">
                  {classItem.courseName}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-2">
                  <span className="font-semibold">Turma:</span> {classItem.classNumber}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Professor:</span> {classItem.professorName}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Disciplina:</span> {classItem.subjectName}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Local:</span> {classItem.location}
                </p>
                <p>
                  <span className="font-semibold">Horário:</span> {classItem.schedule}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}