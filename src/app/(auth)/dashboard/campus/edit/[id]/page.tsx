import { fetchUniversities } from "../../universityActions"
import UniversityForm from "../../UniversityForm"


export default async function EditUniversityPage({ params }: { params: { id: string } }) {
  const universities = await fetchUniversities()
  const university = universities.find(u => u.id === params.id)

  if (!university) {
    return <div>University not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit University</h1>
      <UniversityForm university={university} />
    </div>
  )
}
