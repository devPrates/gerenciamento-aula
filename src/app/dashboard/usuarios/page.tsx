import { Suspense } from 'react'
import { UserTable } from './UserTable'

export default async function UsersPage() {

  return (
    <div className="mx-6 py-10">
      <h1 className="text-2xl font-bold mb-5">Controle de Usuários</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable />
      </Suspense>
    </div>
  )
}
