import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoUsuarioPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <Link href="/admin/usuarios" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para usuários
            </Link>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Adicionar Novo Usuário</CardTitle>
                    <CardDescription>Preencha os dados para criar um novo acesso à plataforma.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input id="name" placeholder="Ex: João Silva" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Ex: joao.silva@empresa.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="role">Tipo de Conta (Role)</Label>
                            <Select>
                                <SelectTrigger id="role">
                                    <SelectValue placeholder="Selecione o tipo de conta" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cliente">Cliente</SelectItem>
                                    <SelectItem value="fabricante">Fabricante</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha Temporária</Label>
                            <Input id="password" type="password" />
                        </div>
                        <div className="flex justify-end pt-4">
                            <Button type="submit">Salvar Usuário</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
