
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const salesData = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+R$1.999,00", avatar: "https://placehold.co/100x100.png" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+R$39,00", avatar: "https://placehold.co/100x100.png" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+R$299,00", avatar: "https://placehold.co/100x100.png" },
    { name: "William Kim", email: "will@email.com", amount: "+R$99,00", avatar: "https://placehold.co/100x100.png" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+R$39,00", avatar: "https://placehold.co/100x100.png" },
];

export function RecentSales() {
  return (
    <div className="space-y-8">
        {salesData.map((sale, index) => (
            <div key={index} className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src={sale.avatar} alt="Avatar" data-ai-hint="professional headshot" />
                    <AvatarFallback>{sale.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{sale.name}</p>
                    <p className="text-sm text-muted-foreground">{sale.email}</p>
                </div>
                <div className="ml-auto font-medium">{sale.amount}</div>
            </div>
        ))}
    </div>
  )
}
