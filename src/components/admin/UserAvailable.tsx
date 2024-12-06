import { ListCollapse,Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from '../ui/separator'

interface TeamMember {
  name: string
  email: string
  image: string
  isAvailable: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "Jane Cooper",
    email: "example@ifms.edu.br",
    image: "/user.png",
    isAvailable: true,
  },
  {
    name: "Cody Fisher",
    email: "example@ifms.edu.br",
    image: "/user.png",
    isAvailable: false,
  },
  {
    name: "Esther Howard",
    email: "example@ifms.edu.br",
    image: "/user.png",
    isAvailable: true,
  },
]

export default function UserAvailable() {
  return (
    <div className="container mx-auto py-6 px-10 ">
      <div className="grid gap-6 grid-cols-1">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{member.name}</span>
                  {member.isAvailable 
                    ?
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                      Disponível
                    </Badge>
                    :
                    <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
                      Indisponivel
                    </Badge>
                  }
                </div>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src={member.image} alt={`${member.name}'s profile picture`} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
            <Separator className='my-3'/>
              <div className="grid grid-cols-2 gap-2">
                <Button className="w-full" disabled={member.isAvailable === false} >
                  <Send className="mr-2 h-4 w-4" />
                  Solicitar Substituição
                </Button>
                <Button variant="outline" className="w-full">
                  <ListCollapse className="mr-2 h-4 w-4" />
                  Mais Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

