"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export type Position = { x: number; y: number }

// Small pointer-drag hook: distinguishes a click from a drag via a movement
// threshold, clamps the element inside the viewport, and reports drag state.
export function useDraggable(initial: Position) {
  const [pos, setPos] = useState<Position>(initial)
  const [dragging, setDragging] = useState(false)
  const origin = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null)
  const movedRef = useRef(false)

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      movedRef.current = false
      origin.current = { px: e.clientX, py: e.clientY, ox: pos.x, oy: pos.y }
      setDragging(true)
    },
    [pos.x, pos.y],
  )

  useEffect(() => {
    if (!dragging) return
    const handleMove = (e: PointerEvent) => {
      const o = origin.current
      if (!o) return
      const dx = e.clientX - o.px
      const dy = e.clientY - o.py
      if (!movedRef.current && Math.hypot(dx, dy) > 4) movedRef.current = true
      if (!movedRef.current) return
      const maxX = window.innerWidth - 48
      const maxY = window.innerHeight - 48
      setPos({
        x: Math.min(Math.max(0, o.ox + dx), maxX),
        y: Math.min(Math.max(32, o.oy + dy), maxY),
      })
    }
    const handleUp = () => {
      setDragging(false)
      origin.current = null
    }
    window.addEventListener("pointermove", handleMove)
    window.addEventListener("pointerup", handleUp)
    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerup", handleUp)
    }
  }, [dragging])

  return { pos, dragging, moved: movedRef, onPointerDown }
}
