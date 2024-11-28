import { Suspense } from 'react'
import { CampusTable } from './CampusTable'
import { getCampus } from './actions'

export default async function CampusPage() {
  const initialData = await getCampus(1)

  return (
    <div className="mx-6 py-10">
      <h1 className="text-2xl font-bold mb-5">Controle de Campus</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CampusTable />
      </Suspense>
    </div>
  )
}

