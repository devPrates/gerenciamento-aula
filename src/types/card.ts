export type ClassData = {
    id: string;
    courseName: string;
    classNumber: string;
    professorName: string;
    subjectName: string;
    location: string;
    schedule: string;
};

export const mockClasses: ClassData[] = [
    {
        id: "1",
        courseName: "Engenharia de Software",
        classNumber: "Turma 01",
        professorName: "Dr. Silva",
        subjectName: "Programação Orientada a Objetos",
        location: "Sala 101",
        schedule: "Segunda-feira, 14:00 - 16:00",
    },
    {
        id: "2",
        courseName: "Ciência da Computação",
        classNumber: "Turma 02",
        professorName: "Dra. Santos",
        subjectName: "Estruturas de Dados",
        location: "Laboratório 3",
        schedule: "Terça-feira, 10:00 - 12:00",
    },
    {
        id: "3",
        courseName: "Sistemas de Informação",
        classNumber: "Turma 03",
        professorName: "Prof. Oliveira",
        subjectName: "Banco de Dados",
        location: "Auditório 2",
        schedule: "Quarta-feira, 16:00 - 18:00",
    },
    {
        id: "4",
        courseName: "Engenharia de Software",
        classNumber: "Turma 04",
        professorName: "Dra. Lima",
        subjectName: "Engenharia de Requisitos",
        location: "Sala 205",
        schedule: "Quinta-feira, 08:00 - 10:00",
    },
    {
        id: "5",
        courseName: "Ciência da Computação",
        classNumber: "Turma 05",
        professorName: "Prof. Ferreira",
        subjectName: "Inteligência Artificial",
        location: "Laboratório 5",
        schedule: "Sexta-feira, 14:00 - 16:00",
    },
];

export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: 'disponivel' | 'indisponivel';
  }
  


export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'disponivel',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'indisponivel',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'disponivel',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    avatar: 'https://i.pravatar.cc/150?img=4',
    status: 'indisponivel',
  },
];


  
  

