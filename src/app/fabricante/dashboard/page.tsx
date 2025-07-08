
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, List, Package } from "lucide-react"

export default function ManufacturerDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-headline font-bold mb-6">Meu Dashboard</h1>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Novos Orçamentos</CardTitle>
                        <List className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">Aguardando sua resposta</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Produtos Ativos</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">125</div>
                         <p className="text-xs text-muted-foreground">Produtos no seu catálogo</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Visualizações (Mês)</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+1.2k</div>
                         <p className="text-xs text-muted-foreground">Nos seus produtos</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Orçamentos Recentes</CardTitle>
                    <CardDescription>Os últimos 5 pedidos recebidos.</CardDescription>
                </CardHeader>
                 <CardContent className="h-64 flex items-center justify-center bg-secondary rounded-b-lg">
                    <p className="text-muted-foreground">Nenhum orçamento recente.</p>
                </CardContent>
            </Card>
        </div>
    )
}
