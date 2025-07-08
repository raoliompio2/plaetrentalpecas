import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Target, Users, Zap } from "lucide-react"
import { teamMembers, timelineEvents } from "@/lib/mock-data"

export default function SobrePage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-secondary relative">
                <div className="container py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Nossa História</h1>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Inovando a forma como a indústria se conecta, projeta e constrói o futuro.
                    </p>
                </div>
            </section>
            
            {/* Mission and Vision */}
            <section className="py-16">
                <div className="container grid md:grid-cols-2 gap-12">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary text-primary-foreground rounded-full">
                           <Target className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-headline font-bold mb-2">Nossa Missão</h2>
                            <p className="text-muted-foreground">
                                Facilitar o acesso à tecnologia e componentes industriais de ponta, conectando fabricantes e compradores de forma eficiente, transparente e inovadora.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary text-primary-foreground rounded-full">
                           <Rocket className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-headline font-bold mb-2">Nossa Visão</h2>
                            <p className="text-muted-foreground">
                                Ser a principal plataforma digital global para a indústria 4.0, impulsionando o progresso tecnológico e a colaboração em todo o ecossistema de manufatura.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-secondary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold">Nossa Jornada</h2>
                        <p className="text-muted-foreground mt-2">Marcos importantes que moldaram quem somos hoje.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
                        {timelineEvents.map((item, index) => (
                            <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center relative mb-8">
                                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                    <h3 className="text-2xl font-headline font-bold text-primary">{item.year}</h3>
                                </div>
                                <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden md:block top-1"></div>
                                    <p className="p-4 rounded-lg md:ml-8 md:mr-8 bg-card border">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold">Nossa Equipe</h2>
                        <p className="text-muted-foreground mt-2">Os rostos por trás da inovação no MetaCraft Hub.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="relative h-40 w-40 md:h-48 md:w-48 mx-auto mb-4">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        layout="fill"
                                        className="rounded-full object-cover"
                                        data-ai-hint="professional headshot"
                                    />
                                </div>
                                <h3 className="font-headline font-semibold text-lg">{member.name}</h3>
                                <p className="text-sm text-primary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
