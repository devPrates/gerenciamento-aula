"use client"

import { BreadcrumbComponent } from '@/components/admin/BreadcrumbComponent'
import UserAvailable from '@/components/admin/UserAvailable'
import { TeacherSchedule } from '@/components/admin/TeacherSchedule'


export default function TeacherExchange() {
  const direitorioItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Substituição", href: "/dashboard/substituicao" },
  ];


  return (
    <section className='p-8 flex flex-col gap-2'>
      <BreadcrumbComponent items={direitorioItems} />

      <section className='grid grid-cols-1 gap-4 w-full md:grid-cols-[3fr_1fr]'>
        <div className="p-4 text-black rounded border">
          <TeacherSchedule />
        </div>

        <div className="px-2 rounded border">
          <h1 className='my-4 text-center font-bold text-xl'>Professores do Curso</h1>
            <UserAvailable />
        </div>
      </section>
    </section>
  )
}