'use client'

import { useState, useMemo } from 'react'
import { format, addMinutes, parse, isSameDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DatePicker } from '@/components/ui/date-picker'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Appointment, fakeAppointments } from '@/types/schedule'
import { AppointmentModal } from './AppointmentModal'

export function TeacherSchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const timeSlots = useMemo(() => {
    const slots = []
    let currentTime = parse('07:00', 'HH:mm', new Date())
    const endTime = parse('22:15', 'HH:mm', new Date())

    while (currentTime <= endTime) {
      const endSlot = addMinutes(currentTime, 45)
      slots.push({
        start: format(currentTime, 'HH:mm'),
        end: format(endSlot, 'HH:mm')
      })
      currentTime = endSlot
    }
    return slots
  }, [])

  const filteredAppointments = useMemo(() => {
    if (!date) return []
    return fakeAppointments.filter(appointment => 
      isSameDay(parse(appointment.date, 'yyyy-MM-dd', new Date()), date)
    )
  }, [date])

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedAppointment(null)
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <Card className="w-full">
        <CardContent className="p-4">
          <DatePicker
            selected={date}
            onSelect={setDate}
            locale={ptBR}
          />
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-4">
            Agenda do dia {date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ''}
          </h2>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-2">
              {timeSlots.map((slot) => {
                const appointment = filteredAppointments.find(
                  (app) => app.startTime >= slot.start && app.startTime < slot.end
                )
                return (
                  <div key={slot.start} className="flex items-center ">
                    <span className="w-24 text-[12px] text-gray-800">{`${slot.start} - ${slot.end}`}</span>
                    {appointment ? (
                      <button
                        className="flex-1 p-2 bg-green-100 rounded-md text-left hover:bg-green-200 transition-colors"
                        onClick={() => handleAppointmentClick(appointment)}
                      >
                        <p className="font-semibold">{appointment.subject}</p>
                        <p className="text-sm text-gray-600">{appointment.class}</p>
                      </button>
                    ) : (
                      <div className="flex-1 p-2 border border-dashed border-gray-300 rounded-md">
                        <p className="text-sm text-gray-400">Livre</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <AppointmentModal
        appointment={selectedAppointment}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

