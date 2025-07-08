import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoFabricantePage() {
    return (
        <div className="max-w-2xl mx-auto">
            <Link href="/admin/fabricantes" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para fabricantes
            </Link>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Adicionar Novo Fabricante</CardTitle>
                    <CardDescription>Preencha os dados para cadastrar um novo parceiro na plataforma.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome do Fabricante</Label>
                            <Input id="name" placeholder="Ex: Epsilon Drives" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug (URL)</Label>
                            <Input id="slug" placeholder="Ex: epsilon-drives" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select>
                                <SelectTrigger id="status">
                                    <SelectValue placeholder="Selecione o status inicial" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ativo">Ativo</SelectItem>
                                    <SelectItem value="pendente">Pendente</SelectItem>
                                    <SelectItem value="inativo">Inativo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex justify-end pt-4">
                            <Button type="submit">Salvar Fabricante</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
