"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, Clock } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactForm() {

  return (
    <div className="container mx-auto px-8 lg:px-36 py-12" id="contato">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Enhanced Contact Information */}
        <div className="space-y-8 p-4 border rounded-lg">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent">Entre em Contato</h1>
            <p className="mt-4 text-muted-foreground">
            Estamos aqui para ajudar e responder a qualquer dúvida que você possa ter. Estamos ansiosos para ouvir de você!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-semibold">Câmpus Naviraí</p>
                <p className="text-gray-500">545 rua, bairo - cidade</p>
              </div>
            </div>
            
            
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-500">mail@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-semibold">Horário de Atendimento</p>
                <p className="text-gray-500">Seg-Sex: 8AM - 11AM | 13PM - 17PM</p>
              </div>
            </div>
          </div>


          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Por que nos escolher?</AccordionTrigger>
              <AccordionContent>
                We offer unparalleled expertise, personalized solutions, and a commitment to your success. Our team of professionals is dedicated to delivering exceptional results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Que serviços oferecemos?</AccordionTrigger>
              <AccordionContent>
                We provide a wide range of services including consulting, software development, digital marketing, and customer support solutions tailored to your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right Column - Form (unchanged) */}
        <form className="space-y-6 p-4 border rounded-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                Nome
              </label>
              <Input id="firstName" placeholder="Digite seu nome..." required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Sobrenome
              </label>
              <Input id="lastName" placeholder="Digite seu sobrenome..." required />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="mail@example.com" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Assunto
            </label>
            <Input id="email" type="email" placeholder="Duvidas sobre login..." required />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensagem
            </label>
            <Textarea
              id="message"
              required
              className="min-h-[150px]"
              placeholder="Digite o conteudo aqui..."
            />
          </div>

          <Button type="submit" className=" w-full">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </div>
  )
}

