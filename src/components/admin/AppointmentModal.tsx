import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Appointment } from '@/types/schedule'
import { Button } from "../ui/button"

interface AppointmentModalProps {
  appointment: Appointment | null
  isOpen: boolean
  onClose: () => void
}

export function AppointmentModal({ appointment, isOpen, onClose }: AppointmentModalProps) {
  if (!appointment) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes da Aula</DialogTitle>
          <DialogDescription>Informações detalhadas sobre a Aula selecionada.</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold">Disciplina:</dt>
              <dd>{appointment.subject}</dd>
            </div>
            <div>
              <dt className="font-semibold">Turma:</dt>
              <dd>{appointment.class}</dd>
            </div>
            <div>
              <dt className="font-semibold">Horário:</dt>
              <dd>{`${appointment.startTime} - ${appointment.endTime}`}</dd>
            </div>
            <div>
              <dt className="font-semibold">Sala:</dt>
              <dd>{appointment.room}</dd>
            </div>
            {appointment.notes && (
              <div>
                <dt className="font-semibold">Observações:</dt>
                <dd>{appointment.notes}</dd>
              </div>
            )}
          </dl>
          
          <Button className="mt-4">Buscar Professor</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

