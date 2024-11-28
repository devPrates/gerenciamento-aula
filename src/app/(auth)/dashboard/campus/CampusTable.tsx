'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CampusForm } from './CampusForm'
import { getCampus, deleteCampus } from './actions'
import { SquarePen, Trash2 } from 'lucide-react'

export function CampusTable() {
  const router = useRouter()
  const [campus, setCampus] = useState<any[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddCampusOpen, setIsAddCampusOpen] = useState(false)
  const [editingCampus, setEditingCampus] = useState<any | null>(null)
  const [deletingCampusId, setDeletingCampusId] = useState<string | null>(null)

  useEffect(() => {
    fetchCampus(currentPage)
  }, [currentPage])

  const fetchCampus = async (page: number) => {
    const result = await getCampus(page)
    setCampus(result.campus)
    setTotalPages(result.totalPages)
  }

  const handleDeleteCampus = async () => {
    if (deletingCampusId) {
      await deleteCampus(deletingCampusId)
      await fetchCampus(currentPage)
      setDeletingCampusId(null)
      router.refresh()
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className='container mx-auto'>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsAddCampusOpen(true)}>Adicionar Campus</Button>
      </div>
      <Table>
        <TableHeader className='bg-gray-100'>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Acrônimo</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Endereço</TableHead>
            <TableHead>Diretor</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campus.map((campus) => (
            <TableRow key={campus.id}>
              <TableCell>{campus.name}</TableCell>
              <TableCell>{campus.acronym}</TableCell>
              <TableCell>{campus.email}</TableCell>
              <TableCell>{campus.phone}</TableCell>
              <TableCell>{campus.address}</TableCell>
              <TableCell>{campus.director}</TableCell>
              <TableCell>
                <Button size={'icon'} className="mr-2 text-black bg-yellow-400 hover:bg-yellow-300 transition-colors" onClick={() => setEditingCampus(campus)}>
                  <SquarePen />
                </Button>
                <Button size={'icon'} variant="destructive" onClick={() => setDeletingCampusId(campus.id || null)}>
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <CampusForm
        isOpen={isAddCampusOpen}
        onClose={() => {
          setIsAddCampusOpen(false)
          fetchCampus(currentPage)
        }}
      />

      {editingCampus && (
        <CampusForm
          campus={editingCampus}
          isOpen={true}
          onClose={() => {
            setEditingCampus(null)
            fetchCampus(currentPage)
          }}
        />
      )}

      <AlertDialog open={!!deletingCampusId} onOpenChange={() => setDeletingCampusId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza de que deseja excluir este Campus?</AlertDialogTitle>
            <AlertDialogDescription>
            Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteCampus}>Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

