import { useParams } from "react-router-dom"
import { Star } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CourseCard } from "@/components/shared/CourseCard"
import { TestimonialCard } from "@/components/shared/TestimonialCard"
import { teachers } from "@/data/teachers"
import { courses } from "@/data/courses"
import { testimonials } from "@/data/testimonials"

export function TeacherProfilePage() {
  const { id } = useParams()
  const teacher = teachers.find((t) => t.id === id) ?? teachers[0]
  const teacherCourses = courses.filter((c) => c.teacherId === teacher.id)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="h-48 sm:h-64 bg-gradient-to-br from-primary-deep to-primary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Avatar className="h-32 w-32 border-4 border-background shadow-lg shrink-0">
              <AvatarImage src={teacher.avatar} />
              <AvatarFallback className="text-2xl">
                {teacher.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                {teacher.name}
              </h1>
              <p className="text-primary font-medium mt-1">
                {teacher.specialization}
              </p>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                {teacher.bio}
              </p>
              <div className="flex flex-wrap gap-6 mt-6">
                <div>
                  <span className="text-2xl font-bold text-foreground">
                    {teacher.students.toLocaleString()}
                  </span>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">
                    {teacher.courses}
                  </span>
                  <p className="text-sm text-muted-foreground">Courses</p>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="text-2xl font-bold text-foreground">
                      {teacher.rating}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
              <Button className="mt-4">Contact Teacher</Button>
            </div>
          </div>

          <section className="py-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Courses by {teacher.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teacherCourses.length > 0 ? (
                teacherCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))
              ) : (
                <p className="text-muted-foreground col-span-full">
                  No courses listed yet.
                </p>
              )}
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Student Reviews
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} {...t} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
