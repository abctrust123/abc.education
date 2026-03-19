import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TeacherCard } from "@/components/shared/TeacherCard"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { teachers } from "@/data/teachers"

export function TeachersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Our Teachers
            </h1>
            <p className="mt-2 text-muted-foreground">
              Meet the expert instructors behind our courses
            </p>
          </div>
          <div className="max-w-md mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search teachers..."
                className="pl-9 bg-muted/50"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} {...teacher} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
