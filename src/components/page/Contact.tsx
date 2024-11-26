import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="min-h-screen flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8" id='contato'>
    <div className="max-w-7xl mx-auto">
      <h2 className={`text-5xl font-bold text-center mb-12`} >Entre em Contato</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
              <p>Rua Exemplo, 123 - Bairro, Cidade - Estado, 12345-678</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <p>(11) 1234-5678</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <p>contato@suaempresa.com</p>
            </div>
          </div>
          <h4 className="text-lg font-semibold mt-8 mb-4">Horário de Atendimento</h4>
          <p>Segunda a Sexta: 9h às 18h</p>
          <p>Sábado: 9h às 13h</p>
          <h4 className="text-lg font-semibold mt-8 mb-4">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6">Envie-nos uma mensagem</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <Input id="name" placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <Textarea id="message" placeholder="Sua mensagem" rows={4} />
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
