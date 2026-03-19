import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface TeacherCardProps {
  id: string
  name: string
  avatar: string
  specialization: string
  bio: string
  rating: number
  students: number
  courses: number
  variant?: "compact" | "full"
  className?: string
}

export function TeacherCard({
  id,
  name,
  avatar,
  specialization,
  bio,
  rating,
  students,
  courses,
  variant = "full",
  className,
}: TeacherCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(className)}
    >
      <Card className="h-full border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Avatar className="h-20 w-20 shrink-0">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-foreground">{name}</h3>
              <p className="text-sm text-primary font-medium">{specialization}</p>
              {variant === "full" && (
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {bio}
                </p>
              )}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {students.toLocaleString()} students
                </span>
                <span className="text-sm text-muted-foreground">
                  {courses} courses
                </span>
              </div>
              <Button variant="outline" size="sm" className="mt-4" asChild>
                <Link to={`/teachers/${id}`}>Visit Profile</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
