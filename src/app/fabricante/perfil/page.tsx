
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ManufacturerPerfilPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Meu Perfil de Fabricante</CardTitle>
                <CardDescription>Mantenha as informações da sua empresa atualizadas para atrair mais clientes.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6">
                    <div className="flex items-center gap-6">
                        <Image src="https://placehold.co/128x128/1A237E/FFFFFF.png" alt="Logo" width={96} height={96} className="rounded-lg border bg-white p-2" data-ai-hint="logo" />
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="logo-upload">Atualizar Logo</Label>
                            <Input id="logo-upload" type="file" />
                            <p className="text-xs text-muted-foreground">PNG ou JPG, recomendado 256x256px.</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company-name">Nome da Empresa</Label>
                        <Input id="company-name" defaultValue="Alpha Dynamics" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company-description">Descrição</Label>
                        <Textarea id="company-description" rows={4} defaultValue="Líder em automação industrial e robótica avançada. Nossa missão é impulsionar a eficiência e a produtividade em todas as indústrias com tecnologia de ponta." />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="contact-email">Email de Contato</Label>
                            <Input id="contact-email" type="email" defaultValue="contato@alphadynamics.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contact-phone">Telefone</Label>
                            <Input id="contact-phone" defaultValue="+55 (11) 98765-4321" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" defaultValue="https://alphadynamics.com" />
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit">Salvar Alterações</Button>
                    </div>

                </form>
            </CardContent>
        </Card>
    )
}
