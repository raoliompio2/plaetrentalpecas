
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const sections = [
    { id: 'visao-geral', title: 'Visão Geral' },
    { id: 'papeis', title: 'Papéis de Usuário' },
    { id: 'fluxo-orcamento', title: 'Fluxo de Orçamento' },
    { id: 'painel-admin', title: 'Painel do Admin' },
    { id: 'painel-fabricante', title: 'Painel do Fabricante' },
    { id: 'ia', title: 'Funcionalidades de IA' },
]

export default function DocumentationPage() {
    const [activeSection, setActiveSection] = useState('visao-geral');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -70% 0px" } // Adjust margin to trigger highlight sooner
        );

        sections.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => {
             sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-4xl font-headline font-bold">Documentação & Ajuda</h1>
                <p className="text-muted-foreground">Um guia central para entender e operar a plataforma MetaCraft Hub.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <aside className="lg:col-span-1 lg:sticky top-24 self-start">
                    <h3 className="font-headline font-semibold mb-4">Tópicos</h3>
                    <ul className="space-y-2">
                        {sections.map(section => (
                             <li key={section.id}>
                                <a 
                                    href={`#${section.id}`}
                                    className={cn(
                                        "block text-sm text-muted-foreground hover:text-primary transition-colors pl-4 border-l-2",
                                        activeSection === section.id ? "border-primary text-primary font-semibold" : "border-transparent"
                                    )}
                                >
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="lg:col-span-3 space-y-12">
                    <section id="visao-geral">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Visão Geral da Plataforma</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p>O <strong>MetaCraft Hub</strong> é uma plataforma B2B (Business-to-Business) projetada para ser o elo central entre fabricantes de componentes industriais e as empresas que necessitam desses produtos.</p>
                                <p>O objetivo principal é simplificar o processo de descoberta, cotação e aquisição de peças e equipamentos, oferecendo um catálogo centralizado, ferramentas de busca avançadas e um canal de comunicação direto para solicitações de orçamento.</p>
                            </CardContent>
                        </Card>
                    </section>

                     <section id="papeis">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Papéis de Usuário</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p>A plataforma opera com três papéis principais:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Cliente:</strong> Qualquer usuário que navega no site, busca produtos e solicita orçamentos. Pode ser um visitante ou um usuário registrado.</li>
                                    <li><strong>Fabricante:</strong> Um parceiro da plataforma que possui uma "vitrine" (página de catálogo), gerencia seus próprios produtos, e recebe e responde a solicitações de orçamento.</li>
                                    <li><strong>Administrador:</strong> O superusuário que gerencia toda a plataforma. Tem acesso ao painel de administração para supervisionar fabricantes, usuários, produtos e configurações gerais.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="fluxo-orcamento">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Fluxo de Orçamento</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p>O fluxo de negócio central da plataforma segue estes passos:</p>
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li>O <strong>Cliente</strong> navega pelo catálogo e adiciona um ou mais produtos a uma "Solicitação de Orçamento".</li>
                                    <li>Na página de orçamento, o Cliente preenche seus dados de contato e envia a solicitação.</li>
                                    <li>A plataforma notifica os <strong>Fabricantes</strong> cujos produtos foram incluídos no pedido.</li>
                                    <li>O Fabricante acessa seu painel, visualiza os detalhes do pedido e envia uma resposta (proposta comercial) para o Cliente.</li>
                                    <li>O <strong>Administrador</strong> pode monitorar a atividade de orçamentos, mas não interfere diretamente na negociação.</li>
                                </ol>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="painel-admin">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Painel do Admin</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p>A seção <code>/admin</code> é o centro de controle da plataforma. Suas responsabilidades incluem:</p>
                                 <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Dashboard:</strong> Visão geral da atividade da plataforma.</li>
                                    <li><strong>Fabricantes:</strong> Gerenciar parceiros (adicionar, editar, remover).</li>
                                    <li><strong>Produtos:</strong> Supervisionar o catálogo global de produtos.</li>
                                    <li><strong>Usuários:</strong> Gerenciar contas de usuários (clientes e fabricantes).</li>
                                    <li><strong>Configurações:</strong> Customizar a aparência e comportamento do site.</li>
                                    <li><strong>Logs & Backup:</strong> Monitorar a saúde do sistema e garantir a segurança dos dados.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="painel-fabricante">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Painel do Fabricante</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p>A seção <code>/fabricante</code> é a área exclusiva para parceiros. Cada fabricante tem acesso a:</p>
                                 <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Dashboard:</strong> Resumo de sua atividade (novos orçamentos, produtos mais vistos).</li>
                                    <li><strong>Meus Produtos:</strong> Gerenciar seu próprio catálogo de produtos (adicionar, editar, remover).</li>
                                    <li><strong>Orçamentos:</strong> Visualizar e responder às solicitações de orçamento recebidas.</li>
                                    <li><strong>Meu Perfil:</strong> Atualizar as informações públicas de sua empresa.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="ia">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Funcionalidades de IA</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p>Utilizamos a IA Generativa do Google (via Genkit) para otimizar tarefas de conteúdo.</p>
                                <p>Atualmente, a principal funcionalidade está no painel do admin, em <strong>Fabricantes &gt; Adicionar Novo</strong>. A ferramenta "Gerador de Descrição com IA" pode criar textos de marketing otimizados para novos fabricantes com base em seu nome e tema de branding, economizando tempo e garantindo consistência.</p>
                            </CardContent>
                        </Card>
                    </section>
                </main>
            </div>
        </div>
    )
}
