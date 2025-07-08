'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { month: "Jan", requests: 186 },
  { month: "Fev", requests: 205 },
  { month: "Mar", requests: 207 },
  { month: "Abr", requests: 173 },
  { month: "Mai", requests: 209 },
  { month: "Jun", requests: 214 },
  { month: "Jul", requests: 258 },
  { month: "Ago", requests: 190 },
  { month: "Set", requests: 220 },
  { month: "Out", requests: 245 },
  { month: "Nov", requests: 260 },
  { month: "Dez", requests: 289 },
]

const chartConfig = {
  requests: {
    label: "Pedidos",
    color: "hsl(var(--primary))",
  },
}

export function QuoteRequestsChart() {
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
                formatter={(value) => `${value} pedidos`}
            />}
          />
          <Bar dataKey="requests" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
    </ChartContainer>
  )
}
