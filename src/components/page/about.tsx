import Image from 'next/image'

export default function About() {
  return (
    <section className="min-h-screen flex justify-center items-center py-16" id='sobre'>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 flex flex-col item-center">
            <h2 className={`text-4xl md:text-5xl font-bold`}>Sobre Nossa Empresa</h2>
            <p className="text-lg text-gray-600">
              Nossa empresa é dedicada a fornecer soluções inovadoras que transformam a maneira como as pessoas
              trabalham e vivem. Com anos de experiência e uma equipe apaixonada, estamos comprometidos em
              fazer a diferença em cada projeto que realizamos.
            </p>
            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold`}>Nossa Essência</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">Missão:</span> Capacitar nossos clientes com tecnologias de ponta para alcançar seus objetivos de negócio.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">Visão:</span> Ser reconhecida como líder global em inovação e excelência em soluções tecnológicas.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">Valores:</span> Integridade, Inovação, Colaboração, Excelência e Responsabilidade Social.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center">
            <Image
              src="/about.png"
              alt="Imagem representativa da nossa empresa"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}