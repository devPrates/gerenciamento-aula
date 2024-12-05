"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Janeiro", troca: 186, substituicao: 80 },
  { month: "Fevereiro", troca: 305, substituicao: 200 },
  { month: "Março", troca: 237, substituicao: 120 },
  { month: "Abril", troca: 73, substituicao: 190 },
  { month: "Maio", troca: 209, substituicao: 130 },
  { month: "Junho", troca: 214, substituicao: 140 },
]

const chartConfig = {
  troca: {
    label: "Troca",
    color: "hsl(var(--chart-1))",
  },
  substituicao: {
    label: "Substituição",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function ReplaceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Troca e Substituição de Aulas</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="troca" fill="var(--color-troca)" radius={4} />
            <Bar dataKey="substituicao" fill="var(--color-substituicao)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Dados das ultimas Trocas e Substiuições de Aulas
        </div>
        <div className="leading-none text-muted-foreground">
            Mostrando o total de Solicitações realizadas nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  )
}
