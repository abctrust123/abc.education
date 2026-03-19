import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PriceDisplay } from "./PriceDisplay"
import { teachers } from "@/data/teachers"
import { cn } from "@/lib/utils"

interface CourseCardProps {
  id: string
  title: string
  teacherId: string
  thumbnail: string
  price: number
  discount?: number
  rating: number
  students: number
  level?: string
  className?: string
}

export function CourseCard({
  id,
  title,
  teacherId,
  thumbnail,
  price,
  discount = 0,
  rating,
  students,
  level,
  className,
}: CourseCardProps) {
  const teacher = teachers.find((t) => t.id === teacherId)
  const originalPrice = discount > 0 ? price / (1 - discount / 100) : undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(className)}
    >
      <Link to={`/courses/${id}`}>
        <Card className="h-full overflow-hidden border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 group">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {discount > 0 && (
              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                {discount}% off
              </Badge>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {teacher?.name ?? "Instructor"}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({students.toLocaleString()} students)
              </span>
            </div>
            {level && (
              <Badge variant="outline" className="mt-2">
                {level}
              </Badge>
            )}
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <PriceDisplay
              price={price}
              originalPrice={originalPrice}
              discount={discount > 0 ? discount : undefined}
            />
            <Button size="sm">View</Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
