import { Suspense } from "react";

export default async function TurmaPage() {
  
    return (
      <div className="mx-6 py-10">
        <h1 className="text-2xl font-bold mb-5">Controle de Turmas</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>ola mundo</h1>
        </Suspense>
      </div>
    )
}