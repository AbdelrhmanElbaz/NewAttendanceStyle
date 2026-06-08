"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { IdCard } from "lucide-react"

const HISTORY = [
  { date: "2025-08-25 07:40", text: "بداية 1/5 — ليه شهرين يبداء 29\\9" },
  { date: "2025-08-26 12:29", text: "تعديل هيبداء 29\\8" },
  { date: "2025-10-28 16:23", text: "ليه شهرين هيبدا 30\\10" },
  { date: "2026-02-26 22:22", text: "ليه شهر يبدا 7\\3" },
  { date: "2026-05-06 14:37", text: "ليه شهرين يبدا 10\\5" },
]

const STATS = [
  { label: "Normal", value: "13" },
  { label: "Invitation", value: "0" },
  { label: "Max Attend", value: "60" },
  { label: "Plan", value: "Silver" },
]

export function TraineeInfo() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          <IdCard className="size-4" />
          Trainee Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-xl border-2 border-primary/40 shadow-lg">
            <img
              src="/national-id-card.png"
              alt="Trainee national ID card"
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge className="bg-primary/15 text-primary hover:bg-primary/15">Active</Badge>
          <Badge variant="outline" className="border-chart-2/50 text-chart-2">
            Plan 1/5
          </Badge>
          <Badge variant="outline" className="border-destructive/50 text-destructive">
            Freeze 05-16 → 05-23
          </Badge>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Attendance Timeline
          </p>
          <ol className="relative space-y-3 border-r border-border pr-4" dir="rtl">
            {HISTORY.map((h, i) => (
              <li key={i} className="relative">
                <span className="absolute -right-[21px] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-card" />
                <p className="text-sm text-foreground">{h.text}</p>
                <p className="font-mono text-xs text-muted-foreground" dir="ltr">
                  {h.date}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-secondary/40 p-3 text-center"
            >
              <p className="text-xl font-bold text-primary">{s.value}</p>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-secondary/40 p-3">
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              Last Date
            </p>
            <p className="font-mono text-sm text-foreground">07/05/2026 05:39 م</p>
          </div>
          <div className="rounded-lg border border-border bg-secondary/40 p-3">
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              End Date
            </p>
            <p className="font-mono text-sm text-foreground">13/07/2026 05:39 م</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
