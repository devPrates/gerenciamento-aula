import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">Página não encontrada</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">Ops! A página que você está procurando não existe.</p>
        <Button asChild className="mt-4">
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="w-4 h-4" />
            <span>Voltar para a página inicial</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

