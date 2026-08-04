"use client"

import { DOCK_ITEM_IDS, ITEMS } from "@/lib/portfolio-data"

export function Dock({
  onOpen,
  openIds,
}: {
  onOpen: (id: string) => void
  openIds: string[]
}) {
  const dockItems = DOCK_ITEM_IDS.map((id) => ITEMS.find((i) => i.id === id)!).filter(Boolean)

  return (
    <nav
      aria-label="Dock"
      className="fixed bottom-2 left-1/2 z-40 flex -translate-x-1/2 items-end gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-xl md:bottom-3 md:gap-3 md:px-4"
    >
      {dockItems.map((item) => {
        const Icon = item.icon
        const isFolder = item.type === "folder"
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onOpen(item.id)}
            title={item.name}
            aria-label={item.name}
            className="group relative flex flex-col items-center"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-md ring-1 ring-black/10 transition group-hover:-translate-y-1.5 group-active:scale-90 md:h-12 md:w-12 ${
                isFolder ? "bg-sky-500" : "bg-white"
              }`}
            >
              <Icon
                className={`h-6 w-6 ${isFolder ? "text-white" : "text-brand"}`}
                fill={isFolder ? "currentColor" : "none"}
                strokeWidth={isFolder ? 1 : 1.75}
                aria-hidden
              />
            </span>
            <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition group-hover:opacity-100">
              {item.name}
            </span>
            <span
              className={`mt-1 h-1 w-1 rounded-full bg-foreground/70 transition ${
                openIds.includes(item.id) ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />
          </button>
        )
      })}
    </nav>
  )
}
