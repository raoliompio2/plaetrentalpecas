
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart2, Eye, ListChecks, Package } from 'lucide-react';
import { QuoteRequestsChart } from '@/components/admin/dashboard/quote-requests-chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { manufacturersData, allProducts, productsData } from '@/lib/mock-data';

export default function ManufacturerDetailsPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const manufacturer = manufacturersData[slug];

    if (!manufacturer) {
        notFound();
    }
    
    const manufacturerProducts = allProducts.filter(p => p.manufacturerSlug === slug);

    return (
        <div className="space-y-8">
            <div>
                <Link href="/admin/fabricantes" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para todos os fabricantes
                </Link>
                <div className="flex items-center gap-4">
                    <Image src={manufacturer.logoUrl} alt={manufacturer.name} width={64} height={64} className="rounded-lg border bg-white p-1" data-ai-hint="logo" />
                    <div>
                        <h1 className="text-3xl font-headline font-bold">{manufacturer.name}</h1>
                        <p className="text-muted-foreground">Membro desde {manufacturer.joinDate}</p>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Produtos no Catálogo</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{manufacturer.stats.products}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Orçamentos Recebidos</CardTitle>
                        <ListChecks className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{manufacturer.stats.quoteRequests}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Visualizações Totais</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{manufacturer.stats.totalViews.toLocaleString('pt-BR')}</div>
                    </CardContent>
                </Card>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                            <BarChart2 className="h-5 w-5" />
                            Performance de Orçamentos
                        </CardTitle>
                        <CardDescription>Volume de solicitações de orçamento recebidas por mês.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <QuoteRequestsChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Produtos Populares</CardTitle>
                        <CardDescription>Produtos com mais visualizações e orçamentos.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Produto</TableHead>
                                    <TableHead className="text-right">Visualizações</TableHead>
                                    <TableHead className="text-right">Orçamentos</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {manufacturerProducts.map((product: any) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="font-medium">{product.name}</TableCell>
                                        <TableCell className="text-right">{productsData[product.id]?.stats.views.toLocaleString('pt-BR') || 0}</TableCell>
                                        <TableCell className="text-right">{productsData[product.id]?.stats.quotes || 0}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
