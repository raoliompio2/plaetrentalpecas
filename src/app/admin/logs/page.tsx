'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { format } from "date-fns"
import { mockLogs } from "@/lib/mock-data";

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

export default function AdminLogsPage() {
    const [filter, setFilter] = useState('');
    const [levelFilter, setLevelFilter] = useState('all');
    
    const getBadgeVariant = (level: LogLevel) => {
        switch (level) {
            case 'ERROR': return 'destructive';
            case 'WARN': return 'default'; // Using default for a yellow-ish look with accent
            case 'INFO': return 'secondary';
            case 'DEBUG': return 'outline';
            default: return 'secondary';
        }
    };
    
    const filteredLogs = mockLogs.filter(log => {
        const matchesLevel = levelFilter === 'all' || log.level.toLowerCase() === levelFilter;
        const matchesText = log.message.toLowerCase().includes(filter.toLowerCase());
        return matchesLevel && matchesText;
    });

    return (
         <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-headline font-bold">Logs do Sistema</h1>
                <p className="text-muted-foreground">Visualize eventos importantes e erros que ocorrem na aplicação.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder="Buscar na mensagem do log..." 
                                className="pl-8" 
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                        </div>
                        <Select value={levelFilter} onValueChange={setLevelFilter}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filtrar por nível" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos os Níveis</SelectItem>
                                <SelectItem value="info">INFO</SelectItem>
                                <SelectItem value="warn">WARN</SelectItem>
                                <SelectItem value="error">ERROR</SelectItem>
                                <SelectItem value="debug">DEBUG</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {filteredLogs.map((log, index) => (
                        <Card key={index} className="font-mono text-xs">
                           <CardContent className="p-4 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                     <Badge 
                                        variant={getBadgeVariant(log.level)}
                                        className={log.level === 'WARN' ? 'bg-amber-500 text-black' : ''}
                                    >
                                        {log.level}
                                    </Badge>
                                    <span>{log.message}</span>
                                </div>
                                <span className="text-muted-foreground shrink-0">
                                    {format(log.timestamp, "dd/MM/yyyy HH:mm:ss")}
                                </span>
                           </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
