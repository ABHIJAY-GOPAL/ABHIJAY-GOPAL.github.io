"use client"

import type { DesktopItem } from "@/lib/portfolio-data"

export function DesktopIcon({
  item,
  onOpen,
}: {
  item: DesktopItem
  onOpen: (id: string) => void
}) {
  const Icon = item.icon
  const isFolder = item.type === "folder"

  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      className="group flex w-full flex-col items-center gap-1.5 rounded-lg p-1.5 text-center outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:w-24"
    >
      <span
        className={`flex items-center justify-center rounded-2xl transition group-hover:scale-105 group-active:scale-95 ${
          isFolder
            ? "h-14 w-14 bg-transparent md:h-16 md:w-16"
            : "h-14 w-14 bg-white/90 shadow-lg shadow-black/20 ring-1 ring-black/5 md:h-16 md:w-16"
        }`}
      >
        <Icon
          className={`${isFolder ? "h-12 w-12 md:h-14 md:w-14" : "h-7 w-7 md:h-8 md:w-8"} ${
            isFolder ? "text-sky-300" : "text-brand"
          }`}
          fill={isFolder ? "currentColor" : "none"}
          strokeWidth={isFolder ? 1 : 1.75}
          aria-hidden
        />
      </span>
      <span className="max-w-full truncate rounded px-1 text-xs font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        {item.name}
      </span>
    </button>
  )
}
