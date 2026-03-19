import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { CourseCard } from "@/components/shared/CourseCard"
import { Button } from "@/components/ui/button"
import { courses } from "@/data/courses"

export function FeaturedCourses() {
  const featured = courses.slice(0, 6)

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Courses"
          subtitle="Hand-picked courses from our top instructors"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/courses">View All Courses</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
