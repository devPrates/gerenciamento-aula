import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', solicitacoes: 20 },
  { name: 'Fev', solicitacoes: 15 },
  { name: 'Mar', solicitacoes: 30 },
  { name: 'Abr', solicitacoes: 22 },
  { name: 'Mai', solicitacoes: 18 },
  { name: 'Jun', solicitacoes: 25 },
  { name: 'Jul', solicitacoes: 28 },
]

export default function ClassChangeChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Solicitações de Troca de Aulas</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="solicitacoes" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

