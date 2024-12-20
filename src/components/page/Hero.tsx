'use client'

import Link from "next/link"
import { Button } from "../ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Rolagem suave até a seção
    }
  };
  return (
    <div className="mx-auto flex flex-col justify-start min-h-screen max-w-3xl py-32" id="home">
      {/* Banner superior para destacar uma chamada de atenção */}
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white">
          Venha conhecer nossos serviços.{' '}
          <a 
            href="#" 
            className="font-semibold text-primary dark:text-[#22c55e]" 
            aria-label="Leia mais sobre nossos serviços"
          >
            <span aria-hidden="true" className="absolute inset-0" />
            Ler mais <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Seção principal do Hero */}
      <div className="text-center">
        {/* Título do sistema */}
        <h1 className="text-balance text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          Sistema de <span className="text-primary dark:text-[#22c55e]">Troca & Substituição</span> de aulas
        </h1>

        {/* Descrição do sistema */}
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-white">
          Solução para reduzir e facilitar o tempo de troca e substituição de aulas através da nossa base de dados.
        </p>

        {/* Botões de ação */}
        <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
          <Link href="#">
            <Button size="lg" onClick={() => window.location.href = "/login"}>
              Fazer Login
            </Button>
          </Link>
          <Link href="#">
            <Button variant="outline" size="lg" className="bg-transparent" onClick={() => scrollToSection("sobre")}>
              Ler mais
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
