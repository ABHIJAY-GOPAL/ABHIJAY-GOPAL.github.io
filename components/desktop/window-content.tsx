"use client"

import { OWNER, type DesktopItem } from "@/lib/portfolio-data"
import { FileText, ArrowUpRight, MapPin, AtSign } from "lucide-react"

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return <p className="px-2 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{children}</p>
}

export function WindowContent({ item }: { item: DesktopItem }) {
  return (
    <div className="flex h-full min-h-0">
      {/* Finder sidebar */}
      <aside className="hidden w-44 shrink-0 flex-col overflow-y-auto border-r border-border bg-window-sidebar/70 p-2 sm:flex">
        <SidebarLabel>Favorites</SidebarLabel>
        <div className="space-y-0.5 text-sm">
          {["Overview", "Highlights", "Details"].map((f, i) => (
            <div
              key={f}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                i === 0 ? "bg-brand/15 text-foreground" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-4 w-4 text-brand" aria-hidden />
              <span className="truncate">{f}</span>
            </div>
          ))}
        </div>
        <SidebarLabel>About</SidebarLabel>
        <p className="px-2 text-xs leading-relaxed text-muted-foreground">
          {OWNER.name} · {OWNER.role}
        </p>
      </aside>

      {/* Main pane */}
      <div className="min-w-0 flex-1 overflow-y-auto bg-card">
        <div className="p-5 md:p-6">
          <BodyByType item={item} />
        </div>
      </div>
    </div>
  )
}

function BodyByType({ item }: { item: DesktopItem }) {
  if (item.type === "mail") return <ContactBody />
  if (item.type === "web") return <ConnectBody item={item} />
  if (item.type === "pdf") return <ResumeBody item={item} />
  return <FolderBody item={item} />
}

function FolderBody({ item }: { item: DesktopItem }) {
  return (
    <>
      <div className="mb-5">
        <h2 className="text-pretty text-xl font-semibold text-foreground">{item.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {item.entries?.length ?? 0} {item.entries?.length === 1 ? "item" : "items"}
        </p>
      </div>
      <ul className="space-y-3">
        {item.entries?.map((e) => (
          <li
            key={e.title}
            className="rounded-xl border border-border bg-background p-4 transition hover:border-brand/50 hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-pretty font-medium text-foreground">{e.title}</h3>
                {e.subtitle && <p className="text-sm text-brand">{e.subtitle}</p>}
              </div>
              {e.tag && (
                <span className="shrink-0 rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-medium text-brand">
                  {e.tag}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
            {e.meta && <p className="mt-2 text-xs text-muted-foreground/80">{e.meta}</p>}
          </li>
        ))}
      </ul>
    </>
  )
}

function ResumeBody({ item }: { item: DesktopItem }) {
  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 flex items-center gap-3 border-b border-border pb-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15">
          <FileText className="h-6 w-6 text-brand" aria-hidden />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-foreground">{OWNER.name}</h2>
          <p className="text-sm text-muted-foreground">{OWNER.role}</p>
        </div>
      </div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Experience</h3>
      <ol className="relative space-y-5 border-l border-border pl-5">
        {item.entries?.map((e) => (
          <li key={e.title} className="relative">
            <span className="absolute -left-[23px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand" aria-hidden />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h4 className="font-medium text-foreground">{e.title}</h4>
              <span className="text-xs text-muted-foreground">{e.subtitle}</span>
            </div>
            {e.meta && <p className="text-sm text-brand">{e.meta}</p>}
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
          </li>
        ))}
      </ol>
      <a
        href="#"
        onClick={(ev) => ev.preventDefault()}
        className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition hover:opacity-90"
      >
        Download PDF
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </a>
    </div>
  )
}

function ContactBody() {
  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-xl font-semibold text-foreground">Let&apos;s talk</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        Have a role, a collaboration, or a product idea? I read every message.
      </p>

      <div className="mt-5 space-y-2 text-sm">
        <a
          href={`mailto:${OWNER.email}`}
          className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 transition hover:border-brand/50"
        >
          <AtSign className="h-4 w-4 text-brand" aria-hidden />
          <span className="text-foreground">{OWNER.email}</span>
        </a>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-3">
          <MapPin className="h-4 w-4 text-brand" aria-hidden />
          <span className="text-foreground">{OWNER.location}</span>
        </div>
      </div>

      <form
        className="mt-5 space-y-3"
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.currentTarget
          const data = new FormData(form)
          window.location.href = `mailto:${OWNER.email}?subject=Portfolio inquiry from ${encodeURIComponent(
            String(data.get("name") || ""),
          )}&body=${encodeURIComponent(String(data.get("message") || ""))}`
        }}
      >
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your message"
          className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </div>
  )
}

function ConnectBody({ item }: { item: DesktopItem }) {
  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-xl font-semibold text-foreground">Find me online</h2>
      <p className="mt-1 text-sm text-muted-foreground">I share teardowns, essays, and product notes.</p>
      <ul className="mt-5 space-y-2">
        {item.links?.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-background p-4 transition hover:border-brand/50 hover:shadow-sm"
            >
              <div>
                <p className="font-medium text-foreground">{l.label}</p>
                <p className="text-sm text-muted-foreground">{l.handle}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-brand" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
