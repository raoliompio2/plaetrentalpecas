'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Helper to convert hex to HSL string
function hexToHsl(hex: string): string | null {
    if (!hex.startsWith('#') || (hex.length !== 4 && hex.length !== 7)) {
        return null; // Invalid hex
    }

    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    
    // Format for CSS HSL variable
    return `${(h * 360).toFixed(1)} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%`;
}

export default function AdminConfiguracoesPage() {
    // These would typically be fetched from a database
    const [primaryColor, setPrimaryColor] = useState("#2563eb");
    const [accentColor, setAccentColor] = useState("#f97316");

    useEffect(() => {
        const primaryHsl = hexToHsl(primaryColor);
        if (primaryHsl) {
            document.documentElement.style.setProperty('--primary', primaryHsl);
        }
    }, [primaryColor]);

    useEffect(() => {
        const accentHsl = hexToHsl(accentColor);
        if (accentHsl) {
            document.documentElement.style.setProperty('--accent', accentHsl);
        }
    }, [accentColor]);

    // This function would handle saving the settings to the backend
    const handleSaveChanges = () => {
        console.log("Saving changes:", { primaryColor, accentColor });
        // Here you would call a server action to persist the settings
        alert("Configurações salvas (simulação).");
    };

    return (
        <div>
            <h1 className="text-3xl font-headline font-bold mb-6">Configurações</h1>

            <Tabs defaultValue="appearance">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="general">Geral</TabsTrigger>
                    <TabsTrigger value="appearance">Aparência</TabsTrigger>
                    <TabsTrigger value="integrations">Integrações</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Configurações Gerais</CardTitle>
                            <CardDescription>Gerencie as configurações básicas do site.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="site-name">Nome do Site</Label>
                                <Input id="site-name" defaultValue="MetaCraft Hub" />
                            </div>
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <Label htmlFor="maintenance-mode">Modo Manutenção</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Desativa o acesso público ao site para manutenção.
                                    </p>
                                </div>
                                <Switch id="maintenance-mode" />
                            </div>
                            <Button>Salvar Alterações</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="appearance" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personalização da Marca</CardTitle>
                            <CardDescription>Customize o logo e as cores do site. As alterações de cor são aplicadas em tempo real nesta sessão.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <div className="space-y-2">
                                <Label htmlFor="logo">Logo Principal</Label>
                                <Input id="logo" type="file" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="favicon">Favicon</Label>
                                <Input id="favicon" type="file" />
                            </div>
                             <div className="space-y-2">
                                <Label>Cores</Label>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2">
                                        <Label htmlFor="primary-color" className="text-sm">Primária</Label>
                                        <Input 
                                            id="primary-color" 
                                            type="color" 
                                            value={primaryColor}
                                            onChange={(e) => setPrimaryColor(e.target.value)}
                                            className="w-12 h-10 p-1" 
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Label htmlFor="accent-color" className="text-sm">Destaque</Label>
                                        <Input 
                                            id="accent-color" 
                                            type="color" 
                                            value={accentColor}
                                            onChange={(e) => setAccentColor(e.target.value)}
                                            className="w-12 h-10 p-1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button onClick={handleSaveChanges}>Salvar Aparência</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="integrations" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Integrações</CardTitle>
                            <CardDescription>Conecte serviços de terceiros à plataforma.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="ga-id">Google Analytics ID</Label>
                                <Input id="ga-id" placeholder="UA-XXXXX-Y" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="upstash-key">Upstash API Key</Label>
                                <Input id="upstash-key" type="password" />
                            </div>
                            <Button>Salvar Integrações</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
