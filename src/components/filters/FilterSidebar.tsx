import { Separator } from "@/components/ui/separator"
import { categories } from "@/data/categories"
import { cn } from "@/lib/utils"

const priceRanges = [
  { label: "Under $25", value: "0-25" },
  { label: "$25 - $50", value: "25-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "Over $100", value: "100+" },
]

const ratings = [
  { label: "4.5 & up", value: "4.5" },
  { label: "4.0 & up", value: "4" },
  { label: "3.5 & up", value: "3.5" },
]

const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"]
const languages = ["English", "Spanish", "French", "Hindi"]
const durations = ["Under 5 hours", "5-10 hours", "10-20 hours", "20+ hours"]

interface FilterSidebarProps {
  className?: string
}

export function FilterSidebar({ className }: FilterSidebarProps) {
  return (
    <aside
      className={cn(
        "w-64 shrink-0 space-y-6 rounded-xl border border-border bg-background p-4",
        className
      )}
    >
      <div>
        <h3 className="font-semibold text-foreground mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-2 cursor-pointer hover:text-primary"
            >
              <input type="checkbox" className="rounded border-border" />
              <span className="text-sm">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-2 cursor-pointer hover:text-primary"
            >
              <input type="radio" name="price" className="border-border" />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-foreground mb-3">Rating</h3>
        <div className="space-y-2">
          {ratings.map((r) => (
            <label
              key={r.value}
              className="flex items-center gap-2 cursor-pointer hover:text-primary"
            >
              <input type="radio" name="rating" className="border-border" />
              <span className="text-sm">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-foreground mb-3">Level</h3>
        <div className="space-y-2">
          {levels.map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 cursor-pointer hover:text-primary"
            >
              <input type="checkbox" className="rounded border-border" />
              <span className="text-sm">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-foreground mb-3">Language</h3>
        <div className="space-y-2">
          {languages.map((lang) => (
            <label
              key={lang}
              className="flex items-center gap-2 cursor-pointer hover:text-primary"
            >
              <input type="checkbox" className="rounded border-border" />
              <span className="text-sm">{lang}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-foreground mb-3">Duration</h3>
        <div className="space-y-2">
          {durations.map((dur) => (
            <label
              key={dur}
              className="flex items-center gap-2 cursor-pointer hover:text-primary"
            >
              <input type="checkbox" className="rounded border-border" />
              <span className="text-sm">{dur}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
