'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { allUsers } from "@/lib/mock-data";

const quoteData = [
    { name: "Carlos Mendes", company: "Indústrias Acme", items: 5, avatar: allUsers[0].avatar },
    { name: "Juliana Lima", company: "Soluções Técnicas Z", items: 2, avatar: allUsers[1].avatar },
    { name: "Ricardo Alves", company: "Engenharia Alfa", items: 8, avatar: "https://placehold.co/100x100.png" },
    { name: "Beatriz Souza", company: "Construtora Forte", items: 1, avatar: allUsers[4].avatar },
    { name: "Fernando Costa", company: "Manufatura Global", items: 12, avatar: "https://placehold.co/100x100.png" },
];

export function RecentQuoteRequests() {
  return (
    <div className="space-y-6">
        {quoteData.map((quote, index) => (
            <div key={index} className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src={quote.avatar} alt="Avatar" data-ai-hint="professional headshot" />
                    <AvatarFallback>{quote.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{quote.name}</p>
                    <p className="text-sm text-muted-foreground">{quote.company}</p>
                </div>
                <div className="ml-auto font-medium text-right">
                    <p className="text-sm font-bold">{quote.items} {quote.items > 1 ? 'itens' : 'item'}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
