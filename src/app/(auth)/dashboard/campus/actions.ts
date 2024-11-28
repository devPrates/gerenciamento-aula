'use server'

import { revalidatePath } from 'next/cache'

// This is a mock database. In a real application, you would use a proper database.
let campus = [
  { id: '1', name: 'Campus Naviraí', acronym: 'IFMS-NV', email: 'john@example.com',phone: '(67) 3500-1500', address: 'Rua Hilda', director: 'Jane Smith' },
  { id: '2', name: 'Campus Dourados', acronym: 'IFMS-DD', email: 'smith@example.com',phone: '(67) 3500-3500', address: 'Av exemplo', director: 'Smith Santos' },
]

export async function getCampus(page: number = 1, pageSize: number = 10) {
  // In a real app, you would fetch campus from a database with pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedCampus = campus.slice(startIndex, endIndex);
  return {
    campus: paginatedCampus,
    totalCampus: campus.length,
    totalPages: Math.ceil(campus.length / pageSize)
  };
}

export async function addCampus(data: FormData) {
  const name = data.get('name') as string
  const acronym = data.get('acronym') as string
  const email = data.get('email') as string
  const phone = data.get('phone') as string
  const address = data.get('address') as string
  const director = data.get('director') as string

  if (!name || !email || !acronym) {
    return { error: 'All fields are required' }
  }

  const newCampus = {
    id: (campus.length + 1).toString(),
    name,
    acronym,
    email,
    phone,
    address,
    director,
  }

  campus.push(newCampus)
  revalidatePath('/campus')
  return { success: true }
}

export async function updateCampus(data: FormData) {
  const id = data.get('id') as string
  const name = data.get('name') as string
  const acronym = data.get('acronym') as string
  const email = data.get('email') as string
  const phone = data.get('phone') as string
  const address = data.get('address') as string
  const director = data.get('director') as string

  if (!id || !name || !email || !acronym) {
    return { error: 'All fields are required' }
  }

  const campusIndex = campus.findIndex(campus => campus.id === id)
  if (campusIndex === -1) {
    return { error: 'User not found' }
  }

  campus[campusIndex] = { id, name,acronym, email, phone, address, director }
  revalidatePath('/campus')
  return { success: true }
}

export async function deleteCampus(id: string) {
  campus = campus.filter(campus => campus.id !== id)
  revalidatePath('/campus')
  return { success: true }
}

