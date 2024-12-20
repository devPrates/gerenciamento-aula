import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className=" py-12 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4 flex flex-col items-center">
            <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo da ClassExchange"  // Adicionando uma descrição mais clara
                width={200}
                height={100}
              />
            </Link>
            <p className="text-sm mt-2">
              Fornecendo soluções inovadoras e serviços de qualidade desde 2010.
            </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className='flex flex-col items-center'>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                <li><Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
                <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
              </ul>
            </div>
          </div>

          {/* Contato */}
          <div className='flex flex-col items-center'>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>Rua Exemplo, 123 - São Paulo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={18} />
                  <span>(11) 1234-5678</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={18} />
                  <span>contato@suaempresa.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className='flex flex-col items-center'>
            <div>
              <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} ClassExchange. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
