"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function TraineeSearch() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          <Search className="size-4" />
          Trainee Search
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="id" className="text-xs text-muted-foreground">
              ID
            </Label>
            <Input id="id" className="bg-input" />
          </div>

          <div className="flex items-end gap-2 pb-2">
            <Checkbox id="female" />
            <Label htmlFor="female" className="text-xs text-muted-foreground">
              Female
            </Label>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs text-muted-foreground">
              Name
            </Label>
            <Input id="name" defaultValue="عمر مجدي محمد" dir="rtl" className="bg-input text-right" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="mobile" className="text-xs text-muted-foreground">
              Mobile
            </Label>
            <Input id="mobile" className="bg-input" />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button className="gap-2 px-8 font-semibold uppercase tracking-wide">
            <Search className="size-4" />
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
