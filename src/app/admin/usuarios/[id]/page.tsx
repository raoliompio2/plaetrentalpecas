
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation";
import { getUserById } from "@/lib/mock-data"

export default function EditUsuarioPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const user = getUserById(id);

    if (!user) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link href="/admin/usuarios" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para todos os usuários
            </Link>
            
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="font-headline">Editar Usuário</CardTitle>
                        <CardDescription>Atualize as informações e permissões do usuário.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input id="name" defaultValue={user.name} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue={user.email} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Tipo de Conta (Role)</Label>
                                <Select defaultValue={user.role}>
                                    <SelectTrigger id="role">
                                        <SelectValue placeholder="Selecione o tipo de conta" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Cliente">Cliente</SelectItem>
                                        <SelectItem value="Fabricante">Fabricante</SelectItem>
                                        <SelectItem value="Admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button type="submit">Salvar Alterações</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Informações</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                            <p><strong>Empresa:</strong> {user.company}</p>
                            <p><strong>Membro desde:</strong> {user.createdAt}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Ações Rápidas</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <Button variant="outline">Redefinir Senha</Button>
                             <Button variant="destructive">Desativar Usuário</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
