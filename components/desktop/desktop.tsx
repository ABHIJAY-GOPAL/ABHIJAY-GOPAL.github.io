"use client"

import { useCallback, useState } from "react"
import { ITEMS, OWNER } from "@/lib/portfolio-data"
import { MenuBar } from "./menu-bar"
import { DesktopIcon } from "./desktop-icon"
import { Dock } from "./dock"
import { StickyNote } from "./sticky-note"
import { Window, type WindowState } from "./window"

export function Desktop() {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [topZ, setTopZ] = useState(10)

  const openItem = useCallback(
    (id: string) => {
      const item = ITEMS.find((i) => i.id === id)
      if (!item) return
      setWindows((prev) => {
        const nextZ = topZ + 1
        setTopZ(nextZ)
        const existing = prev.find((w) => w.item.id === id)
        if (existing) {
          return prev.map((w) => (w.item.id === id ? { ...w, z: nextZ } : w))
        }
        const offset = prev.length * 28
        const baseX =
          typeof window !== "undefined" ? Math.max(24, window.innerWidth / 2 - 380 + offset) : 80 + offset
        return [...prev, { item, x: baseX, y: 90 + offset, z: nextZ }]
      })
    },
    [topZ],
  )

  const closeItem = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.item.id !== id))
  }, [])

  const focusItem = useCallback(
    (id: string) => {
      setWindows((prev) => {
        const nextZ = topZ + 1
        setTopZ(nextZ)
        return prev.map((w) => (w.item.id === id ? { ...w, z: nextZ } : w))
      })
    },
    [topZ],
  )

  const moveItem = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.item.id === id ? { ...w, x, y } : w)))
  }, [])

  return (
    <main
      className="relative h-dvh w-full overflow-hidden bg-wallpaper"
      style={{
        backgroundImage:
          "linear-gradient(var(--wallpaper-line) 1px, transparent 1px), linear-gradient(90deg, var(--wallpaper-line) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <MenuBar />

      {/* Hero copy + sticky note */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col gap-6 px-6 pt-12 md:px-12 md:pt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-white/80 drop-shadow md:text-base">{OWNER.role}</p>
          <h1 className="mt-2 text-pretty text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] md:text-5xl">
            {OWNER.headline}
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-white/85 drop-shadow md:text-base">
            {OWNER.tagline}
          </p>
        </div>
        <div className="pointer-events-auto hidden md:block">
          <StickyNote />
        </div>
      </div>

      {/* Desktop icon grid: below hero on mobile, right-side column on desktop */}
      <div className="absolute inset-x-4 top-56 grid grid-cols-4 gap-x-1 gap-y-3 sm:top-52 md:inset-x-auto md:right-4 md:top-12 md:max-h-[calc(100dvh-7rem)] md:grid-flow-col md:grid-cols-none md:grid-rows-3 md:gap-y-3">
        {ITEMS.filter((item) => !item.onlyDock).map((item) => (
          <DesktopIcon key={item.id} item={item} onOpen={openItem} />
        ))}
      </div>

      {/* Windows */}
      {windows.map((w) => (
        <Window key={w.item.id} state={w} onClose={closeItem} onFocus={focusItem} onMove={moveItem} />
      ))}

      <Dock onOpen={openItem} openIds={windows.map((w) => w.item.id)} />
    </main>
  )
}
