import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { quoteItems } from "@/lib/mock-data"


export default function OrcamentoPage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Solicitação de Orçamento</h1>
                <p className="text-lg text-muted-foreground mt-2">Revise seus itens e envie sua solicitação. Responderemos em breve.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Items Summary */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Itens no seu pedido</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Produto</TableHead>
                                        <TableHead>Descrição</TableHead>
                                        <TableHead className="text-center">Quantidade</TableHead>
                                        <TableHead className="text-right">Ação</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {quoteItems.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <Image src={item.imageUrl} alt={item.name} width={64} height={64} className="rounded-md object-cover" data-ai-hint="industrial product" />
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-sm text-muted-foreground">{item.manufacturer}</p>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Input type="number" defaultValue={item.quantity} className="w-20 mx-auto text-center" />
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="icon">
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* Request Form */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle className="font-headline">Seus Dados</CardTitle>
                            <CardDescription>Preencha para recebermos seu pedido.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <Input placeholder="Nome completo" />
                                <Input type="email" placeholder="Email corporativo" />
                                <Input placeholder="Nome da Empresa" />
                                <Input placeholder="Telefone / WhatsApp" />
                                <Textarea placeholder="Detalhes do projeto ou observações adicionais..." />
                            </form>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" size="lg">Enviar Solicitação</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
