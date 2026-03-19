import { SectionHeader } from "@/components/layout/SectionHeader"
import { TeacherCard } from "@/components/shared/TeacherCard"
import { teachers } from "@/data/teachers"

export function FeaturedTeachers() {
  const featured = teachers.slice(0, 4)

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Teachers"
          subtitle="Learn from industry experts and passionate educators"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((teacher) => (
            <TeacherCard key={teacher.id} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  )
}
