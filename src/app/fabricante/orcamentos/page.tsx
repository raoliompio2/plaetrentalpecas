import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ListFilter, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { recentQuotes } from "@/lib/mock-data"

export default function ManufacturerOrcamentosPage() {
    return (
         <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-headline font-bold">Orçamentos Recebidos</h1>
                <p className="text-muted-foreground">Visualize e responda às solicitações de orçamento dos clientes.</p>
            </div>
            
            <Card>
                <CardHeader>
                     <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar por pedido ou empresa..." className="pl-8" />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="gap-1.5">
                                    <ListFilter className="h-4 w-4" />
                                    <span>Status</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filtrar por Status</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>Aguardando Resposta</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Respondido</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Em Negociação</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Concluído</DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentQuotes.map((quote) => (
                         <Card key={quote.id}>
                            <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex-1">
                                    <p className="font-semibold">{quote.id} - {quote.company}</p>
                                    <p className="text-sm text-muted-foreground">{quote.date}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge variant={quote.status === 'Respondido' ? 'secondary' : 'default'}>
                                        {quote.status}
                                    </Badge>
                                    <Button asChild variant="outline" size="sm">
                                        <Link href={`/fabricante/orcamentos/${quote.id}`}>
                                            Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                           </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
