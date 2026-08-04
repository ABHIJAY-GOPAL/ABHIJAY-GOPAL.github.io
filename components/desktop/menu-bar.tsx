"use client"

import { useEffect, useState } from "react"
import { Wifi, BatteryFull, Search, Apple } from "lucide-react"
import { OWNER } from "@/lib/portfolio-data"

const MENUS = ["File", "Edit", "View", "Work", "Help"]

export function MenuBar() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000 * 15)
    return () => clearInterval(id)
  }, [])

  const time = now
    ? now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    : ""
  const day = now
    ? now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })
    : ""

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex h-8 items-center justify-between bg-menubar px-3 text-menubar-foreground backdrop-blur-xl md:px-4"
      role="banner"
    >
      <div className="flex items-center gap-4 text-[13px]">
        <Apple className="h-4 w-4" aria-hidden />
        <span className="font-semibold">{OWNER.name}</span>
        <nav className="hidden items-center gap-4 sm:flex" aria-label="Menu">
          {MENUS.map((m) => (
            <span key={m} className="cursor-default text-menubar-foreground/85 hover:text-menubar-foreground">
              {m}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 text-[13px]">
        <Wifi className="h-4 w-4" aria-hidden />
        <BatteryFull className="hidden h-4 w-4 sm:block" aria-hidden />
        <Search className="h-4 w-4" aria-hidden />
        <span className="hidden tabular-nums sm:inline">{day}</span>
        <span className="tabular-nums font-medium">{time}</span>
      </div>
    </header>
  )
}
