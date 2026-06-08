"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LogOut, Menu } from "lucide-react"

const NAV_ITEMS = [
  "Attend",
  "Price List",
  "Trainee",
  "Attendance Report",
  "Trainee Attendance",
  "Reservation",
  "Renew",
  "Report",
]

export function GymNav() {
  const [active, setActive] = useState("Attend")
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-border bg-sidebar">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
            G
          </div>
          <div className="leading-tight">
            <p className="text-lg font-bold tracking-wider text-foreground">
              MY-GYM <span className="text-xs font-normal text-primary">IT</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Designed by Eng Haitham
            </p>
          </div>
        </div>

        <button
          className="rounded-md p-2 text-muted-foreground hover:bg-accent lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <Menu className="size-5" />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={cn(
                "rounded-md px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors",
                active === item
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
          <button className="ml-2 flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium uppercase tracking-wide text-destructive transition-colors hover:bg-destructive/10">
            <LogOut className="size-3.5" />
            Logout
          </button>
        </nav>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden">
          {[...NAV_ITEMS, "Logout"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item)
                setOpen(false)
              }}
              className={cn(
                "rounded-md px-3 py-2 text-left text-sm font-medium",
                active === item
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent",
              )}
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
