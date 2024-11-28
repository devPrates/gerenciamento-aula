"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProfileSettings } from "./ProfileSettings"
import { NotificationSettings } from "./NotificationSettings"
import { ThemeSettings } from "./ThemeSettings"


export default function UserSettings() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Configurações do usuário</CardTitle>
        <CardDescription>Gerencie as configurações e preferências da sua conta.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Perfil</h2>
          <ProfileSettings />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Notificações</h2>
          <NotificationSettings />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Tema</h2>
          <ThemeSettings />
        </section>
      </CardContent>
    </Card>
  )
}


  
  