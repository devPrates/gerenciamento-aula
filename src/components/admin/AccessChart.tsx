import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', acessos: 400 },
  { name: 'Fev', acessos: 300 },
  { name: 'Mar', acessos: 500 },
  { name: 'Abr', acessos: 280 },
  { name: 'Mai', acessos: 200 },
  { name: 'Jun', acessos: 450 },
  { name: 'Jul', acessos: 380 },
]

export default function AccessChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Acessos ao Sistema</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="acessos" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

