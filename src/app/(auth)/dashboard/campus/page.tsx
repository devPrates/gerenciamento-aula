import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { fetchUniversities } from './universityActions'
import UniversityTable from './UniversityTable'

export default async function DashboardPage() {
  const universities = await fetchUniversities()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">University Dashboard</h1>
      <Link href="/dashboard/campus/new">
        <Button className="mb-4">Add New University</Button>
      </Link>
      <UniversityTable universities={universities} />
    </div>
  )
}

