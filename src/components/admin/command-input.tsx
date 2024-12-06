"use client"

import * as React from "react"
import { Command } from "cmdk"
import { Search } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const commands = [
  {
    name: "New File",
    shortcut: ["⌘", "N"],
    action: () => console.log("New File"),
  },
  {
    name: "Open File",
    shortcut: ["⌘", "O"],
    action: () => console.log("Open File"),
  },
  {
    name: "Save",
    shortcut: ["⌘", "S"],
    action: () => console.log("Save"),
  },
  {
    name: "Close Tab",
    shortcut: ["⌘", "W"],
    action: () => console.log("Close Tab"),
  },
  {
    name: "Settings",
    shortcut: ["⌘", ","],
    action: () => console.log("Settings"),
  },
]

export default function InputCommand() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="relative w-full max-w-lg">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Type a command or search..."
          className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setOpen(true)}
        />
      </div>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="absolute top-full left-0 mt-2 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95"
      >
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
          <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
          {commands.map((command) => (
            <Command.Item
              key={command.name}
              onSelect={() => {
                command.action()
                setOpen(false)
              }}
              className="flex items-center justify-between px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer"
            >
              <span>{command.name}</span>
              <span className="text-muted-foreground">
                {command.shortcut.map((key, index) => (
                  <kbd
                    key={index}
                    className="ml-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-semibold"
                  >
                    {key}
                  </kbd>
                ))}
              </span>
            </Command.Item>
          ))}
        </Command.List>
      </Command.Dialog>
    </div>
  )
}

