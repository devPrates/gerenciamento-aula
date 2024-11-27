import { Suspense } from 'react'
import { UserTable } from './UserTable'
import { getUsers } from './actions'

export default async function UsersPage() {
  const initialData = await getUsers(1)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">User Management</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable />
      </Suspense>
    </div>
  )
}

