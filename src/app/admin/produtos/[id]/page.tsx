
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart2, Eye, ListChecks, Percent, Link as LinkIcon } from 'lucide-react';
import { QuoteRequestsChart } from '@/components/admin/dashboard/quote-requests-chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { productsData } from '@/lib/mock-data';


export default function ProductDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = productsData[id];

    if (!product) {
        notFound();
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-start">
                 <div>
                    <Link href="/admin/produtos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para todos os produtos
                    </Link>
                    <div className="flex items-center gap-4">
                        <Image src={product.imageUrl} alt={product.name} width={64} height={64} className="rounded-lg border bg-white p-1" data-ai-hint="industrial product" />
                        <div>
                            <h1 className="text-3xl font-headline font-bold">{product.name}</h1>
                            <Link href={`/admin/fabricantes/${product.manufacturerSlug}`} className="text-sm text-muted-foreground hover:text-primary">{product.manufacturer}</Link>
                        </div>
                    </div>
                </div>
                 <Button variant="outline" asChild>
                    <Link href={`/produtos/${id}`} target="_blank">
                        Ver na Loja <LinkIcon className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Visualizações (30d)</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{product.stats.views.toLocaleString('pt-BR')}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Orçamentos (30d)</CardTitle>
                        <ListChecks className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{product.stats.quotes}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
                        <Percent className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{product.stats.conversion.toFixed(2)}%</div>
                    </CardContent>
                </Card>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                            <BarChart2 className="h-5 w-5" />
                            Performance
                        </CardTitle>
                        <CardDescription>Visualizações e solicitações de orçamento nos últimos meses.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {/* In a real app, this chart would receive product-specific data */}
                        <QuoteRequestsChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Orçamentos Recentes</CardTitle>
                        <CardDescription>Empresas que solicitaram este produto recentemente.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         {product.recentQuotes.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Empresa</TableHead>
                                        <TableHead className="text-right">Data</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {product.recentQuotes.map((quote: any) => (
                                        <TableRow key={quote.id}>
                                            <TableCell className="font-medium">{quote.company}</TableCell>
                                            <TableCell className="text-right">{quote.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         ) : (
                            <div className="flex items-center justify-center h-full text-sm text-muted-foreground py-10">
                                Nenhuma solicitação recente.
                            </div>
                         )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
