'use client'


import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { University } from '@/types/card'
import { deleteUniversityAction } from './universityActions'

interface UniversityTableProps {
  universities: University[]
}

export default function UniversityTable({ universities }: UniversityTableProps) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this university?')) {
      await deleteUniversityAction(id)
      router.refresh()
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Acronym</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {universities.map((university) => (
          <TableRow key={university.id}>
            <TableCell>{university.name}</TableCell>
            <TableCell>{university.acronym}</TableCell>
            <TableCell>{university.email}</TableCell>
            <TableCell>{university.phone}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                className="mr-2"
                onClick={() => router.push(`/dashboard/edit/${university.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(university.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

