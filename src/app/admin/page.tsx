import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Package, Factory, ListChecks } from "lucide-react"
import { QuoteRequestsChart } from "@/components/admin/dashboard/quote-requests-chart"
import { RecentQuoteRequests } from "@/components/admin/dashboard/recent-quote-requests"

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-headline font-bold mb-6">Dashboard</h1>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Orçamentos Solicitados</CardTitle>
                        <ListChecks className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128</div>
                        <p className="text-xs text-muted-foreground">+15% em relação ao mês passado</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Novos Usuários</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+245</div>
                        <p className="text-xs text-muted-foreground">+180.1% em relação ao mês passado</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Produtos Ativos</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10.342</div>
                        <p className="text-xs text-muted-foreground">+19% em relação ao mês passado</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Fabricantes Ativos</CardTitle>
                        <Factory className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+213</div>
                        <p className="text-xs text-muted-foreground">+2 desde a última hora</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="font-headline">Visão Geral de Solicitações</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <QuoteRequestsChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Pedidos Recentes</CardTitle>
                        <CardDescription>Você recebeu 265 solicitações este mês.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentQuoteRequests />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
