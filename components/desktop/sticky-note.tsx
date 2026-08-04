"use client"

import { OWNER } from "@/lib/portfolio-data"

export function StickyNote() {
  return (
    <div className="w-56 rotate-[-3deg] rounded-sm bg-note p-4 text-note-foreground shadow-lg shadow-black/25">
      <p className="text-sm font-semibold">👋 Hi!</p>
      <p className="mt-2 text-sm leading-relaxed">
        Think of this desktop as my workspace.
      </p>
      <p className="mt-2 text-sm leading-relaxed">
        Every folder contains how I think, build, research and lead.
      </p>
      <p className="mt-3 text-sm leading-relaxed">
        Start anywhere.
      </p>
      <p className="mt-3 text-xs opacity-80">(Yes, every icon opens.)</p>
    </div>
  )
}
