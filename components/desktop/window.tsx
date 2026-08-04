"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { DesktopItem } from "@/lib/portfolio-data"
import { WindowContent } from "./window-content"

export type WindowState = {
  item: DesktopItem
  x: number
  y: number
  z: number
}

export function Window({
  state,
  onClose,
  onFocus,
  onMove,
}: {
  state: WindowState
  onClose: (id: string) => void
  onFocus: (id: string) => void
  onMove: (id: string, x: number, y: number) => void
}) {
  const { item, x, y, z } = state
  const dragRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null)
  const [dragging, setDragging] = useState(false)

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragRef.current) return
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY
      const nextX = dragRef.current.originX + dx
      const nextY = Math.max(32, dragRef.current.originY + dy)
      onMove(item.id, nextX, nextY)
    },
    [item.id, onMove],
  )

  const stopDrag = useCallback(() => {
    dragRef.current = null
    setDragging(false)
  }, [])

  useEffect(() => {
    if (!dragging) return
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", stopDrag)
    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", stopDrag)
    }
  }, [dragging, onPointerMove, stopDrag])

  return (
    <section
      aria-label={item.name}
      onPointerDown={() => onFocus(item.id)}
      style={{ left: x, top: y, zIndex: z }}
      className="fixed flex h-[70vh] max-h-[560px] w-[min(92vw,760px)] flex-col overflow-hidden rounded-xl border border-black/10 bg-card shadow-2xl shadow-black/40 ring-1 ring-black/5"
    >
      {/* Title bar */}
      <div
        onPointerDown={(e) => {
          onFocus(item.id)
          dragRef.current = { startX: e.clientX, startY: e.clientY, originX: x, originY: y }
          setDragging(true)
        }}
        className="flex h-10 shrink-0 cursor-grab items-center gap-2 border-b border-border bg-window-sidebar/80 px-3 backdrop-blur active:cursor-grabbing"
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => onClose(item.id)}
            aria-label={`Close ${item.name}`}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] ring-1 ring-black/10"
          >
            <span className="text-[8px] leading-none text-black/50 opacity-0 group-hover:opacity-100">×</span>
          </button>
          <span className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/10" aria-hidden />
        </div>
        <p className="pointer-events-none mx-auto -ml-6 flex-1 truncate text-center text-[13px] font-medium text-foreground">
          {item.name}
        </p>
      </div>

      {/* Body */}
      <div className="min-h-0 flex-1">
        <WindowContent item={item} />
      </div>
    </section>
  )
}
