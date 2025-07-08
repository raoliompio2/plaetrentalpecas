import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { faqs } from "@/lib/mock-data"

export default function ContatoPage() {
  return (
    <div className="container py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground mt-2">Estamos aqui para ajudar com suas dúvidas e projetos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input placeholder="Seu nome" />
                            <Input type="email" placeholder="Seu email" />
                        </div>
                        <Input placeholder="Assunto" />
                        <Textarea placeholder="Sua mensagem..." rows={6} />
                        <Button type="submit" className="w-full" size="lg">Enviar Mensagem</Button>
                    </form>
                </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <h3 className="font-headline text-lg font-semibold">Nossas Informações</h3>
                        <div className="flex items-start space-x-4">
                            <MapPin className="h-5 w-5 mt-1 text-primary"/>
                            <div>
                                <p className="font-semibold">Endereço</p>
                                <p className="text-muted-foreground">Av. Industrial, 1234, São Paulo, SP, Brasil</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="h-5 w-5 mt-1 text-primary"/>
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-muted-foreground">contato@metacrafthub.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Phone className="h-5 w-5 mt-1 text-primary"/>
                            <div>
                                <p className="font-semibold">Telefone</p>
                                <p className="text-muted-foreground">+55 (11) 5555-1234</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image src="https://placehold.co/600x400.png" alt="Mapa da localização" layout="fill" objectFit="cover" data-ai-hint="city map" />
                 </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-headline font-bold">Perguntas Frequentes</h2>
                <p className="text-muted-foreground mt-2">Respostas rápidas para as dúvidas mais comuns.</p>
            </div>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </div>
  )
}
