"use client"

import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { BreadcrumbComponent } from '@/components/admin/BreadcrumbComponent'
import RadialChart from '@/components/admin/RadialChart'
import { users } from '@/types/card'
import { UserAvailable } from '@/components/admin/UserAvailable'
import { ScrollArea } from '@/components/ui/scroll-area'

// Dados falsos
const courses = [
  { id: '1', name: 'Matemática' },
  { id: '2', name: 'Português' },
  { id: '3', name: 'História' },
]

const classes = [
  { id: '1', name: '1º Ano A', courseId: '1' },
  { id: '2', name: '1º Ano B', courseId: '1' },
  { id: '3', name: '2º Ano A', courseId: '1' },
  { id: '4', name: '1º Ano A', courseId: '2' },
  { id: '5', name: '1º Ano B', courseId: '2' },
  { id: '6', name: '2º Ano A', courseId: '2' },
  { id: '7', name: '1º Ano A', courseId: '3' },
  { id: '8', name: '1º Ano B', courseId: '3' },
  { id: '9', name: '2º Ano A', courseId: '3' },
]

const teachers = [
  { id: '1', name: 'João Silva', subject: 'Matemática' },
  { id: '2', name: 'Maria Santos', subject: 'Português' },
  { id: '3', name: 'Carlos Oliveira', subject: 'História' },
  { id: '4', name: 'Ana Rodrigues', subject: 'Matemática' },
  { id: '5', name: 'Pedro Alves', subject: 'Português' },
  { id: '6', name: 'Lúcia Ferreira', subject: 'História' },
]

export default function TeacherExchange() {
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>()
  const [selectedClass, setSelectedClass] = useState<string | undefined>()
  const [date, setDate] = useState<Date | undefined>()

  const filteredClasses = selectedCourse
    ? classes.filter(c => c.courseId === selectedCourse)
    : []

  const selectedCourseObj = courses.find(c => c.id === selectedCourse)
  const availableTeachers = selectedCourse && selectedClass && date
    ? teachers.filter(t => t.subject === selectedCourseObj?.name)
    : []
  const direitorioItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Substituição", href: "/substituicao" },
  ];


  return (
    <section className='p-8 flex flex-col gap-2'>
      <BreadcrumbComponent items={direitorioItems} />
      <div className='flex justify-center gap-3 mt-2 p-4 border rounded-md bg-gray-200'>
        <Select
          value={selectedCourse}
          onValueChange={(value) => {
            setSelectedCourse(value)
            setSelectedClass(undefined)
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione um curso" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.id}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={selectedClass}
          onValueChange={setSelectedClass}
          disabled={!selectedCourse}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione uma turma" />
          </SelectTrigger>
          <SelectContent>
            {filteredClasses.map((class_) => (
              <SelectItem key={class_.id} value={class_.id}>
                {class_.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
              disabled={!selectedClass}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Selecione uma data</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <section className='grid grid-cols-1  gap-4 w-full md:grid-cols-2'>
        <div className="p-4 text-black rounded border">
          <h3 className="text-lg font-semibold mb-2">Professores Disponíveis:</h3>
          {availableTeachers.length > 0 ? (
            <div className="mt-4">
              <ul className="space-y-2">
                {availableTeachers.map((teacher) => (
                  <li key={teacher.id} className="bg-secondary p-2 rounded">
                    <span className="font-medium">{teacher.name}</span> - {teacher.subject}
                  </li>
                ))}
              </ul>
            </div>
          ) : (selectedCourse && selectedClass && date) ? (
            <div className="mt-4 text-center text-muted-foreground">
              Nenhum professor disponível para a data selecionada.
            </div>
          ) : null}
          
        </div>

        
        <div className="p-4 text-black rounded border">
        <ScrollArea className="h-[65vh] ">
          <RadialChart />
          {users.map(user => (
            <UserAvailable key={user.id} user={user} />
          ))}
        </ScrollArea>
        </div>
      </section>
    </section>
  )
}