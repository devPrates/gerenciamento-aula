import { Suspense } from 'react'
import { UserTable } from './UserTable'
import { getUsers } from './actions'

export default async function UsersPage() {
  const initialData = await getUsers(1)

  return (
    <div className="mx-6 py-10">
      <h1 className="text-2xl font-bold mb-5">Controle de Usuários</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable />
      </Suspense>
    </div>
  )
}

