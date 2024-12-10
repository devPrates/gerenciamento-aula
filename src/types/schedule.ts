export interface Appointment {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  subject: string;
  class: string;
  room: string;
  notes?: string;
}

export const fakeAppointments: Appointment[] = [
  {
    id: '1',
    date: '2024-12-10',
    startTime: '07:00',
    endTime: '07:45',
    subject: 'Matemática',
    class: '2º Ano A',
    room: 'Sala 101',
    notes: 'Revisão para a prova'
  },
  {
    id: '2',
    date: '2024-12-10',
    startTime: '07:45',
    endTime: '08:30',
    subject: 'Física',
    class: '3º Ano B',
    room: 'Laboratório 2',
    notes: 'Experimento de óptica'
  },
  {
    id: '3',
    date: '2024-12-10',
    startTime: '08:30',
    endTime: '09:15',
    subject: 'Química',
    class: '1º Ano C',
    room: 'Sala 205',
  },
  {
    id: '4',
    date: '2024-12-09',
    startTime: '09:15',
    endTime: '10:00',
    subject: 'Biologia',
    class: '2º Ano B',
    room: 'Laboratório 1',
    notes: 'Dissecação de plantas'
  },
  {
    id: '5',
    date: '2024-12-09',
    startTime: '10:00',
    endTime: '10:45',
    subject: 'História',
    class: '3º Ano A',
    room: 'Sala 302',
    notes: 'Apresentação de seminários'
  },
];

