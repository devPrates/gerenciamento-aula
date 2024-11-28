import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ThemeSettings() {
  const [theme, setTheme] = useState("system")

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.className = theme
  }, [theme])

  const handleApplyTheme = () => {
    // Handle applying the theme (e.g., save to user preferences, update global state)
    console.log("Theme applied:", theme)
  }

  return (
    <div className="space-y-4">
      <RadioGroup value={theme} onValueChange={setTheme}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="light" />
          <Label htmlFor="light">Light</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dark" id="dark" />
          <Label htmlFor="dark">Dark</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="system" id="system" />
          <Label htmlFor="system">System</Label>
        </div>
      </RadioGroup>
      <Button onClick={handleApplyTheme}>Aplicar tema</Button>
    </div>
  )
}

