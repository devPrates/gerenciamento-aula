import Image from 'next/image'

export default function About() {
  return (
    <section 
      className="min-h-screen flex justify-center items-center py-16" 
      id="sobre"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Seção de texto com informações sobre a empresa */}
          <div className="space-y-6 flex flex-col items-center">
            {/* Título da seção */}
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre Nossa Empresa
            </h2>

            {/* Parágrafo descritivo */}
            <p className="text-lg text-justify">
              Nossa empresa é dedicada a fornecer soluções inovadoras que transformam a maneira como as pessoas trabalham e vivem. 
              Com anos de experiência e uma equipe apaixonada, estamos comprometidos em fazer a diferença em cada projeto que realizamos.
            </p>

            {/* Informações de missão, visão e valores */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Nossa Essência
              </h3>
              <ul className="space-y-2">
                {[
                  {
                    title: "Missão:",
                    description: "Capacitar nossos clientes com tecnologias de ponta para alcançar seus objetivos de negócio."
                  },
                  {
                    title: "Visão:",
                    description: "Ser reconhecida como líder global em inovação e excelência em soluções tecnológicas."
                  },
                  {
                    title: "Valores:",
                    description: "Integridade, Inovação, Colaboração, Excelência e Responsabilidade Social."
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    {/* Ícone de check */}
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {/* Conteúdo de cada item */}
                    <div>
                      <span className="font-medium">{item.title}</span> {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imagem representativa */}
          <div className="mt-8 md:mt-0 flex justify-center">
            <Image
              src="/about.png"
              alt="Imagem representativa da nossa empresa"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
              priority={true} // Carrega a imagem mais rapidamente
            />
          </div>
        </div>
      </div>
    </section>
  )
}
