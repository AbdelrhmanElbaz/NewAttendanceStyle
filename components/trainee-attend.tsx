"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ClipboardCheck, Check } from "lucide-react"

const SERVICES = ["Normal", "Sauna", "Jacuzzi", "Spa"]

export function TraineeAttend() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          <ClipboardCheck className="size-4" />
          Trainee Attend
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Trainee</Label>
            <Select defaultValue="omar">
              <SelectTrigger className="bg-input">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="omar">عمر مجدي محمد</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="note" className="text-xs text-muted-foreground">
              Note
            </Label>
            <Input id="note" className="bg-input" />
          </div>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Services</Label>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SERVICES.map((s) => (
              <label
                key={s}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2 transition-colors hover:border-primary/50"
              >
                <Checkbox defaultChecked={s === "Normal"} />
                <span className="text-xs font-medium">{s}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="flex items-center gap-2">
              <Checkbox id="invitation" />
              <span className="text-xs text-muted-foreground">Invitation</span>
            </label>
            <Input className="bg-input" placeholder="Guest name" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="date" className="text-xs text-muted-foreground">
              Date
            </Label>
            <Input id="date" type="date" defaultValue="2026-06-08" className="bg-input" />
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button className="w-full max-w-xs gap-2 font-semibold uppercase tracking-wide">
            <Check className="size-4" />
            Attend
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
