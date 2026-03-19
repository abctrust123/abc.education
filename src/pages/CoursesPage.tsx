import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FilterSidebar } from "@/components/filters/FilterSidebar"
import { FilterBar } from "@/components/filters/FilterBar"
import { CourseCard } from "@/components/shared/CourseCard"
import { courses } from "@/data/courses"

export function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">All Courses</h1>
            <p className="mt-2 text-muted-foreground">
              Browse our complete catalog of courses
            </p>
          </div>
          <FilterBar className="mb-8" />
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar className="hidden lg:block" />
            <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
