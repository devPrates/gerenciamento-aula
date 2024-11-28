import { Suspense } from "react";

export default async function CursosPage() {
  
    return (
      <div className="mx-6 py-10">
        <h1 className="text-2xl font-bold mb-5">Controle de Cursos</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>ola mundo</h1>
        </Suspense>
      </div>
    )
}