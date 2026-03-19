import { useState, useRef, useEffect } from "react"
import { Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FilterSidebar } from "./FilterSidebar"
import { cn } from "@/lib/utils"

const sortOptions = [
  { label: "Most Popular", value: "popular" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" },
]

interface FilterBarProps {
  showSearch?: boolean
  className?: string
}

export function FilterBar({
  showSearch = true,
  className,
}: FilterBarProps) {
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("popular")
  const sortRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false)
      }
    }
    if (sortOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [sortOpen])

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between",
        className
      )}
    >
      {showSearch && (
        <div className="relative w-full sm:w-64">
          <Input
            placeholder="Search courses..."
            className="pl-4 pr-10"
          />
        </div>
      )}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] overflow-y-auto">
            <FilterSidebar />
          </SheetContent>
        </Sheet>
        <div ref={sortRef} className="relative flex-1 sm:flex-initial">
          <Button
            variant="outline"
            className="min-w-[180px] justify-between"
            onClick={() => setSortOpen(!sortOpen)}
          >
            {sortOptions.find((o) => o.value === selectedSort)?.label ??
              "Sort by"}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", sortOpen && "rotate-180")}
            />
          </Button>
          {sortOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg py-1 z-10">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-muted"
                  onClick={() => {
                    setSelectedSort(opt.value)
                    setSortOpen(false)
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
