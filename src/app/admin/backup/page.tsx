'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Loader2, PlayCircle, Trash2 } from "lucide-react"
import { backupHistory } from '@/lib/mock-data';

export default function AdminBackupPage() {
    const [isBackingUp, setIsBackingUp] = useState(false);

    const handleBackup = () => {
        setIsBackingUp(true);
        // Simulate backup process
        setTimeout(() => {
            setIsBackingUp(false);
        }, 3000);
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-headline font-bold">Backup e Restauração</h1>
            
            <Card>
                <CardHeader>
                    <CardTitle>Backup Manual</CardTitle>
                    <CardDescription>Crie um backup instantâneo de todos os dados da aplicação.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <div className="flex-1">
                            <p className="text-sm font-medium">Último backup automático:</p>
                            <p className="text-sm text-muted-foreground">Hoje às 03:00 - Sucesso</p>
                        </div>
                        <Button onClick={handleBackup} disabled={isBackingUp}>
                            {isBackingUp ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Em andamento...
                                </>
                            ) : (
                                <>
                                    <PlayCircle className="mr-2 h-4 w-4" />
                                    Iniciar Novo Backup
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Histórico de Backups</CardTitle>
                    <CardDescription>Veja e gerencie os backups recentes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {backupHistory.map((backup) => (
                        <Card key={backup.id}>
                           <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex-1">
                                    <p className="font-medium">{backup.id}</p>
                                    <p className="text-sm text-muted-foreground">{backup.date} - {backup.size}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                     <Badge variant={backup.status === 'Completo' ? 'default' : 'destructive'}>
                                        {backup.status}
                                    </Badge>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" disabled={backup.status !== 'Completo'}>
                                            <Download className="h-4 w-4" />
                                            <span className="sr-only">Download</span>
                                        </Button>
                                         <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                                            <Trash2 className="h-4 w-4" />
                                             <span className="sr-only">Excluir</span>
                                        </Button>
                                    </div>
                                </div>
                           </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
