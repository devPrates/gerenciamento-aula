"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ClassData, mockClasses } from '@/types/card'
import { Button } from '../ui/button'

export default function Rooms() {
  const [searchTerm, setSearchTerm] = useState('')
  const [classes, setClasses] = useState<ClassData[]>(mockClasses)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)

    const filteredClasses = mockClasses.filter(classItem => 
      classItem.courseName.toLowerCase().includes(term) ||
      classItem.classNumber.toLowerCase().includes(term) ||
      classItem.professorName.toLowerCase().includes(term) ||
      classItem.subjectName.toLowerCase().includes(term) ||
      classItem.location.toLowerCase().includes(term) ||
      classItem.schedule.toLowerCase().includes(term)
    )

    setClasses(filteredClasses)
  }

  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center p-6" id='horários'>
      <h1 className="text-3xl font-bold mb-8 text-center">Quadro de Horários de troca ou Substituição</h1>
      <div className="flex gap-3 justify-center items-center mb-6">
        <Input
          type="text"
          placeholder="Pesquisar turmas..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-40"
        />
        <Button> Pesquisar </Button>
      </div>
      <ScrollArea className="flex-grow rounded-lg shadow-lg bg-white/50 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {classes.map(classItem => (
            <Card key={classItem.id} className="w-full transition-all duration-300 hover:shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="text-lg">{classItem.courseName}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-2"><span className="font-semibold">Turma:</span> {classItem.classNumber}</p>
                <p className="mb-2"><span className="font-semibold">Professor:</span> {classItem.professorName}</p>
                <p className="mb-2"><span className="font-semibold">Disciplina:</span> {classItem.subjectName}</p>
                <p className="mb-2"><span className="font-semibold">Local:</span> {classItem.location}</p>
                <p><span className="font-semibold">Horário:</span> {classItem.schedule}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

