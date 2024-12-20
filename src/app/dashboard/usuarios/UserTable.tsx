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
import { UserForm } from './UserForm'
import { getUsers, deleteUser } from './actions'
import { FileText, Filter, PenLine, Trash2 } from 'lucide-react'

export function UserTable() {
  const router = useRouter()
  const [users, setUsers] = useState<any[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<any | null>(null)
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers(currentPage)
  }, [currentPage])

  const fetchUsers = async (page: number) => {
    const result = await getUsers(page)
    setUsers(result.users)
    setTotalPages(result.totalPages)
  }

  const handleDeleteUser = async () => {
    if (deletingUserId) {
      await deleteUser(deletingUserId)
      await fetchUsers(currentPage)
      setDeletingUserId(null)
      router.refresh()
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className='container mx-auto'>
      <div className="flex gap-2 mb-4 w-full justify-end">
        <Button variant={'outline'} size={'icon'}>
          <Filter />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <FileText />
        </Button>
        <Button onClick={() => setIsAddUserOpen(true)}>Adicionar Usuário</Button>
      </div>

      <div className='border rounded-lg shadow-sm'>
        <Table>
          <TableHeader className='bg-gray-100 dark:bg-gray-500 dark:text-white rounded-lg'>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button size={'icon'} variant="outline" className="mr-2 text-yellow-500" onClick={() => setEditingUser(user)}>
                    <PenLine className='text-yellow-500'/>
                  </Button>
                  <Button size={'icon'} variant="outline" className="mr-2 text-red-500" onClick={() => setDeletingUserId(user.id || null)}>
                    <Trash2 className='text-red-500'/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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

      <UserForm
        isOpen={isAddUserOpen}
        onClose={() => {
          setIsAddUserOpen(false)
          fetchUsers(currentPage)
        }}
      />

      {editingUser && (
        <UserForm
          user={editingUser}
          isOpen={true}
          onClose={() => {
            setEditingUser(null)
            fetchUsers(currentPage)
          }}
        />
      )}

      <AlertDialog open={!!deletingUserId} onOpenChange={() => setDeletingUserId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza de que deseja excluir este usuário?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteUser}>Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}
