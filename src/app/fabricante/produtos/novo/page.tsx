
'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { UploadCloud, X, PlusCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface SpecField {
    id: number;
    key: string;
    value: string;
}

export default function NovoProdutoPage() {
    const [specFields, setSpecFields] = useState<SpecField[]>([{ id: 1, key: '', value: '' }]);

    const addSpecField = () => {
        setSpecFields([...specFields, { id: Date.now(), key: '', value: '' }]);
    };

    const removeSpecField = (id: number) => {
        setSpecFields(specFields.filter(field => field.id !== id));
    };

    // This function would handle the form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to submit form data will go here
        console.log("Form submitted!");
    };

    return (
        <div className="space-y-6">
             <Link href="/fabricante/produtos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Meus Produtos
            </Link>
            
            <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 grid auto-rows-max gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Detalhes do Produto</CardTitle>
                            <CardDescription>Forneça as informações básicas do seu produto.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome do Produto</Label>
                                <Input id="name" placeholder="Ex: Sensor de Proximidade Indutivo" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Descrição</Label>
                                <Textarea id="description" rows={5} placeholder="Descreva os principais recursos e benefícios do produto." />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardHeader>
                            <CardTitle>Mídia</CardTitle>
                            <CardDescription>Faça upload das imagens do produto. A primeira será a principal.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <Label htmlFor="picture" className="sr-only">Imagens</Label>
                                <div className="border-2 border-dashed border-muted rounded-lg p-6 flex flex-col items-center text-center cursor-pointer hover:border-primary">
                                    <UploadCloud className="w-10 h-10 text-muted-foreground" />
                                    <p className="mt-2 text-sm text-muted-foreground">Arraste e solte ou clique para fazer upload</p>
                                    <Input id="picture" type="file" className="sr-only" multiple />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardHeader>
                            <CardTitle>Especificações Técnicas</CardTitle>
                             <CardDescription>Adicione detalhes técnicos como pares de chave-valor.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {specFields.map((field) => (
                                <div key={field.id} className="flex items-end gap-4">
                                    <div className="flex-1 space-y-2">
                                        <Label htmlFor={`spec-key-${field.id}`}>Característica</Label>
                                        <Input id={`spec-key-${field.id}`} placeholder="Ex: Tensão de Operação" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <Label htmlFor={`spec-value-${field.id}`}>Valor</Label>
                                        <Input id={`spec-value-${field.id}`} placeholder="Ex: 10-30 VDC" />
                                    </div>
                                    <Button type="button" variant="ghost" size="icon" className="mb-1 text-destructive hover:bg-destructive/10" onClick={() => removeSpecField(field.id)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" className="mt-2 justify-self-start" onClick={addSpecField}>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Adicionar Especificação
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1 space-y-6">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle>Publicação</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="flex items-center justify-between">
                                <Label htmlFor="published" className="text-sm font-medium">
                                    Publicado
                                </Label>
                                <Switch id="published" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                O produto aparecerá publicamente no catálogo.
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                           <Button type="button" variant="ghost">Salvar Rascunho</Button>
                           <Button type="submit">Salvar Produto</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Organização</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                             <div className="space-y-2">
                                <Label htmlFor="sku">SKU (Unidade de Manutenção de Estoque)</Label>
                                <Input id="sku" placeholder="Ex: AD-SN-IND-001" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="category">Categoria</Label>
                                <Input id="category" placeholder="Ex: Sensores" />
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Modelo 3D</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                             <div className="flex items-center justify-between">
                                <Label htmlFor="has3d" className="text-sm font-medium">
                                    Modelo 3D disponível
                                </Label>
                                <Switch id="has3d" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="3d-file">Arquivo do Modelo (.glb, .gltf)</Label>
                                <Input id="3d-file" type="file" accept=".glb,.gltf" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>
        </div>
    );
}
