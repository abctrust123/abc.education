import { Badge as BadgeUI } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
}

export function Badge({ children, variant = "secondary", className }: BadgeProps) {
  return (
    <BadgeUI variant={variant} className={cn(className)}>
      {children}
    </BadgeUI>
  )
}
