import { GymNav } from "@/components/gym-nav"
import { TraineeSearch } from "@/components/trainee-search"
import { TraineeAttend } from "@/components/trainee-attend"
import { TraineeInfo } from "@/components/trainee-info"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <GymNav />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <TraineeSearch />
            <TraineeAttend />
          </div>
          <TraineeInfo />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© 2012 GymApps. All rights reserved.</p>
          <p>Design by Eng Haitham</p>
        </div>
      </footer>
    </div>
  )
}
