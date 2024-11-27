'use server'

import { revalidatePath } from 'next/cache'

// This is a mock database. In a real application, you would use a proper database.
let users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

export async function getUsers(page: number = 1, pageSize: number = 10) {
  // In a real app, you would fetch users from a database with pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedUsers = users.slice(startIndex, endIndex);
  return {
    users: paginatedUsers,
    totalUsers: users.length,
    totalPages: Math.ceil(users.length / pageSize)
  };
}

export async function addUser(data: FormData) {
  const name = data.get('name') as string
  const email = data.get('email') as string
  const role = data.get('role') as string

  if (!name || !email || !role) {
    return { error: 'All fields are required' }
  }

  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    role,
  }

  users.push(newUser)
  revalidatePath('/users')
  return { success: true }
}

export async function updateUser(data: FormData) {
  const id = data.get('id') as string
  const name = data.get('name') as string
  const email = data.get('email') as string
  const role = data.get('role') as string

  if (!id || !name || !email || !role) {
    return { error: 'All fields are required' }
  }

  const userIndex = users.findIndex(user => user.id === id)
  if (userIndex === -1) {
    return { error: 'User not found' }
  }

  users[userIndex] = { id, name, email, role }
  revalidatePath('/users')
  return { success: true }
}

export async function deleteUser(id: string) {
  users = users.filter(user => user.id !== id)
  revalidatePath('/users')
  return { success: true }
}

