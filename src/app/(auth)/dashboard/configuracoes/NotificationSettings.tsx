import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [newsletterSubscription, setNewsletterSubscription] = useState(true)

  const handleSave = () => {
    // Handle saving notification settings (e.g., API call)
    console.log("Notification settings saved:", {
      emailNotifications,
      pushNotifications,
      newsletterSubscription
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between w-1/3">
        <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
          <span>Notificações por e-mail</span>
          <span className="font-normal text-sm text-muted-foreground">Receba notificações por e-mail</span>
        </Label>
        <Switch
          id="email-notifications"
          checked={emailNotifications}
          onCheckedChange={setEmailNotifications}
        />
      </div>
      <div className="flex items-center justify-between w-1/3">
        <Label htmlFor="push-notifications" className="flex flex-col space-y-1">
          <span>Notificações push</span>
          <span className="font-normal text-sm text-muted-foreground">Receba notificações no seu dispositivo</span>
        </Label>
        <Switch
          id="push-notifications"
          checked={pushNotifications}
          onCheckedChange={setPushNotifications}
        />
      </div>
      <div className="flex items-center justify-between w-1/3">
        <Label htmlFor="newsletter-subscription" className="flex flex-col space-y-1">
          <span>Assinatura Newsletter</span>
          <span className="font-normal text-sm text-muted-foreground">Receba nossa newsletter mensal</span>
        </Label>
        <Switch
          id="newsletter-subscription"
          checked={newsletterSubscription}
          onCheckedChange={setNewsletterSubscription}
        />
      </div>
      <Button onClick={handleSave}>Salvar configurações</Button>
    </div>
  )
}

