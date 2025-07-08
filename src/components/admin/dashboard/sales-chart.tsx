
'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { month: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Fev", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Abr", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Mai", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Ago", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Set", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Out", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { month: "Dez", total: Math.floor(Math.random() * 5000) + 1000 },
]

const chartConfig = {
  total: {
    label: "Total",
    color: "hsl(var(--primary))",
  },
}

export function SalesChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-80">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            stroke="hsl(var(--muted-foreground))"
            tickFormatter={(value) => value.slice(0, 3)}
          />
           <YAxis 
                stroke="hsl(var(--muted-foreground))"
           />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent 
                formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR')}`}
            />}
          />
          <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
    </ChartContainer>
  )
}
