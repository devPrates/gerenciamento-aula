import { FileText, Mails, Replace, ReplaceAll } from 'lucide-react'

const features = [
  {
    name: 'Substituição de Aulas',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: Replace,
  },
  {
    name: 'Documentação Digital',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: FileText,
  },
  {
    name: 'Troca de Aulas',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ReplaceAll,
  },
  {
    name: 'Notificação aos Alunos',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: Mails,
  },
]

export default function Services() {
  return (
    <div className="py-24 sm:py-32" id="serviços" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-500">Troca ou Substituição em Minutos</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            Tudo que você precisa para Trocar ou Substituir sua aula
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 dark:text-white">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  <span className='dark:text-white'>{feature.name}</span>
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
