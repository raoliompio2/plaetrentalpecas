
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, FileText, Send, User, Building, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { quoteDetailData } from "@/lib/mock-data"

export default function OrcamentoDetailPage({ params }: { params: { id: string } }) {
    // In a real app, you would fetch the quote data based on params.id
    const quote = quoteDetailData;

    return (
        <div className="space-y-6">
            <div>
                <Link href="/fabricante/orcamentos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para todos os orçamentos
                </Link>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-headline font-bold">Orçamento #{quote.id}</h1>
                    <div className="text-sm text-muted-foreground">Recebido em: {quote.date}</div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    {/* Items Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Itens Solicitados</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-16">Produto</TableHead>
                                        <TableHead>Descrição</TableHead>
                                        <TableHead className="text-right">Quantidade</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {quote.items.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <Image src={item.imageUrl} alt={item.name} width={48} height={48} className="rounded object-cover" data-ai-hint="industrial product" />
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-xs text-muted-foreground">SKU: {item.sku}</p>
                                            </TableCell>
                                            <TableCell className="text-right font-medium">{item.quantity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {quote.notes && (
                                <div className="mt-4 border-t pt-4">
                                     <h4 className="font-semibold mb-2">Observações do Cliente:</h4>
                                     <p className="text-sm text-muted-foreground italic">"{quote.notes}"</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                     {/* Response Form */}
                     <Card>
                        <CardHeader>
                            <CardTitle>Responder ao Cliente</CardTitle>
                            <CardDescription>Prepare sua proposta e envie diretamente ao cliente.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Textarea placeholder="Escreva sua mensagem aqui... informe preços, prazos, etc." rows={8}/>
                             <div className="space-y-2">
                                <Label htmlFor="attachment">Anexar Proposta (PDF)</Label>
                                <Input id="attachment" type="file" />
                            </div>
                            <Button className="w-full">
                                <Send className="mr-2 h-4 w-4"/>
                                Enviar Resposta
                            </Button>
                        </CardContent>
                     </Card>
                </div>
                {/* Customer Info */}
                <div className="md:col-span-1">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle>Informações do Cliente</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-3 text-muted-foreground" />
                                <span>{quote.customer.name}</span>
                            </div>
                            <div className="flex items-center">
                                <Building className="w-4 h-4 mr-3 text-muted-foreground" />
                                <span>{quote.customer.company}</span>
                            </div>
                            <Separator />
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-3 text-muted-foreground" />
                                <a href={`mailto:${quote.customer.email}`} className="text-primary hover:underline">{quote.customer.email}</a>
                            </div>
                             <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
                                <span>{quote.customer.phone}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
