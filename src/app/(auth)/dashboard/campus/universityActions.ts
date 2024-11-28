'use server'

import { revalidatePath } from 'next/cache'

import { University } from '@/types/card'
import { addUniversity, deleteUniversity, getUniversities, updateUniversity } from '@/lib/universityData'

export async function fetchUniversities() {
  return getUniversities()
}

export async function createUniversity(data: Omit<University, 'id'>) {
  const newUniversity = addUniversity(data)
  revalidatePath('/dashboard')
  return newUniversity
}

export async function updateUniversityAction(id: string, data: Omit<University, 'id'>) {
  const updatedUniversity = updateUniversity(id, data)
  revalidatePath('/dashboard')
  return updatedUniversity
}

export async function deleteUniversityAction(id: string) {
  const result = deleteUniversity(id)
  revalidatePath('/dashboard')
  return result
}

