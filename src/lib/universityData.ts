import { University } from "@/types/card"

let universities: University[] = [
  {
    id: '1',
    name: 'Universidade de São Paulo',
    acronym: 'USP',
    email: 'contato@usp.br',
    phone: '(11) 3091-3500',
    address: 'Rua da Reitoria, 374 - Cidade Universitária, São Paulo - SP, 05508-220',
    director: 'Carlos Gilberto Carlotti Junior'
  },
  {
    id: '2',
    name: 'Universidade Estadual de Campinas',
    acronym: 'UNICAMP',
    email: 'contato@unicamp.br',
    phone: '(19) 3521-2121',
    address: 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970',
    director: 'Antonio José de Almeida Meirelles'
  }
]

export function getUniversities(): University[] {
  return universities
}

export function getUniversityById(id: string): University | undefined {
  return universities.find(u => u.id === id)
}

export function addUniversity(university: Omit<University, 'id'>): University {
  const newUniversity = { ...university, id: (universities.length + 1).toString() }
  universities.push(newUniversity)
  return newUniversity
}

export function updateUniversity(id: string, updatedUniversity: Omit<University, 'id'>): University | undefined {
  const index = universities.findIndex(u => u.id === id)
  if (index !== -1) {
    universities[index] = { ...updatedUniversity, id }
    return universities[index]
  }
  return undefined
}

export function deleteUniversity(id: string): boolean {
  const initialLength = universities.length
  universities = universities.filter(u => u.id !== id)
  return universities.length < initialLength
}

