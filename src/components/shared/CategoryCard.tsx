import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Code,
  Palette,
  TrendingUp,
  Languages,
  DollarSign,
  BookOpen,
  Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Code,
  Palette,
  TrendingUp,
  Languages,
  DollarSign,
  BookOpen,
  Award,
}

interface CategoryCardProps {
  id: string
  name: string
  icon: string
  courseCount: number
  className?: string
}

export function CategoryCard({
  id,
  name,
  icon,
  courseCount,
  className,
}: CategoryCardProps) {
  const Icon = iconMap[icon] ?? BookOpen

  return (
    <Link to={`/courses?category=${id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(className)}
      >
        <Card className="h-full cursor-pointer border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 overflow-hidden group">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
              <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {courseCount} courses
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
