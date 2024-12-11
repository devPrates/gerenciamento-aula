import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import UserAuthForm from "./AuthForm"
import { UserRound } from "lucide-react"
import Darkmode from "@/components/admin/darkmode"


export const metadata: Metadata = {
  title: "Autenticação - Class Exchange",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center md:grid lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Class Exchange
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Ambiente para troca e substituição de aulas do IFMS.
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-2">
              <Darkmode />
              <Link href='/' >
                <Button variant='outline'>
                  Página inicial
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto flex flex-col justify-center px-4 space-y-6 sm:w-[350px] md:px-0">
            <div className="flex flex-col justify-center items-center space-y-2 text-center">
              <div className="p-5 rounded-full border">
                <UserRound className="w-16 h-16" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Acesso ao Sistema
              </h1>
              <p className="text-sm text-muted-foreground">
                Faça login para ter acesso ao sistema
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Ao clicar em continuar, você concorda com nossos{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}