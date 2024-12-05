"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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
  { month: "Janeiro", visitantes: 186 },
  { month: "Fevereiro", visitantes: 305 },
  { month: "Março", visitantes: 237 },
  { month: "Abril", visitantes: 73 },
  { month: "Maio", visitantes: 209 },
  { month: "Junho", visitantes: 214 },
]

const chartConfig = {
  visitantes: {
    label: "Visitantes",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function AcessChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acessos ao Sistema</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitantes" fill="var(--color-visitantes)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Dados dos ultimos acessos ao sistema 
        </div>
        <div className="leading-none text-muted-foreground">
            Mostrando o total de visitantes dos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  )
}
