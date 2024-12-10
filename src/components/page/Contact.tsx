"use client"

import { Headset, MailCheck, MapPinCheck, MessageSquareDashed } from "lucide-react"

const contactOptions = [
  {
    id: 1,
    icon: <MailCheck />,
    title: "Enviar Email",
    description: "Fale com a nossa equipa.",
    contact: "example@gmail.com",
  },
  {
    id: 2,
    icon: <MessageSquareDashed />,
    title: "Bate-papo para suporte",
    description: "Estamos aqui para ajudar.",
    contact: "Iniciar novo bate-papo",
  },
  {
    id: 3,
    icon: <MapPinCheck />,
    title: "Visite-nos",
    description: "Visite a sede da nossa instituição.",
    contact: "Rua Exemplo, 123 - Naviraí",
  },
  {
    id: 4,
    icon: <Headset />,
    title: "Ligue para nós",
    description: "Seg a Sex das 8h às 17h.",
    contact: "(67) 1234-5678",
  },
];



export default function ContactForm() {

  return (
    <section className=" min-h-screen flex items-center" id="contato">
      <div className="container px-36 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-primary ">Contate-nos</p>

          <h1 className="mt-2 text-2xl font-semibold md:text-3xl">Adoraríamos ouvir de você</h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">Nossa equipe está sempre aqui para conversar.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contactOptions.map((option) => (
              <div
                key={option.id}
                className="p-4 rounded-lg md:p-6 bg-green-100/80 dark:bg-card"
              >
                <span className="inline-block p-3 text-green-500 rounded-lg bg-green-200/80">
                  {option.icon}
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{option.title}</h2>
                <p className="mt-2 text-sm text-gray-500 ">{option.description}</p>
                <p className="mt-2 text-sm underline">{option.contact}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

