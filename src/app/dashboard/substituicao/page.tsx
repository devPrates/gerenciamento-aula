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
import UserAvailable  from '@/components/admin/UserAvailable'
import { ScrollArea } from '@/components/ui/scroll-area'

// Dados falsos
const courses = [
  { id: '1', name: 'AGRICULTURA' },
  { id: '2', name: 'TADS' },
  { id: '3', name: 'AGRONOMIA' },
]

const classes = [
  { id: '1', name: '1022', courseId: '1' },
  { id: '2', name: '1023', courseId: '1' },
  { id: '3', name: '1024', courseId: '1' },
  { id: '4', name: '2022', courseId: '2' },
  { id: '5', name: '2023', courseId: '2' },
  { id: '6', name: '2023', courseId: '2' },
  { id: '7', name: '3222', courseId: '3' },
  { id: '8', name: '3223', courseId: '3' },
  { id: '9', name: '3224', courseId: '3' },
]

export default function TeacherExchange() {
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>()
  const [selectedClass, setSelectedClass] = useState<string | undefined>()
  const [date, setDate] = useState<Date | undefined>()

  const filteredClasses = selectedCourse
    ? classes.filter(c => c.courseId === selectedCourse)
    : []

  
  const direitorioItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Substituição", href: "/dashboard/substituicao" },
  ];


  return (
    <section className='p-8 flex flex-col gap-2'>
      <BreadcrumbComponent items={direitorioItems} />
      <div className='flex justify-center gap-3 mt-2 p-4 border rounded-md bg-gray-100'>
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
          <h1>calendario</h1>
          
        </div>

        
        <div className="p-4 rounded border">
        <ScrollArea className="h-[65vh] ">
          <h1>Professores Disponíveis:</h1>
            <UserAvailable  /> 
        </ScrollArea>
        </div>
      </section>
    </section>
  )
}