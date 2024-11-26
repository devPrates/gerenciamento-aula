'use client'

import Link from "next/link"
import { Button } from "../ui/button"

export default function Hero() {

  return (
      <div className="mx-auto flex flex-col justify-start min-h-screen max-w-3xl py-32" id="home">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Venha conhecer nossos serviços.{' '}
            <a href="#" className="font-semibold text-primary">
              <span aria-hidden="true" className="absolute inset-0" />
              Ler mais <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Sistema de Troca & Substituição de aulas
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Solução para reduzir e facilitar o tempo de troca e substituição de aulas atravéz da nossa base de dados.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
            <Link href='#'>
              <Button size={'lg'}>
                Fazer Login
              </Button>
            </Link>
            <Link href='#'>
              <Button variant={'outline'} size={'lg'}>
                Ler mais
              </Button>
            </Link>
          </div>
        </div>
      </div>
  )
}
