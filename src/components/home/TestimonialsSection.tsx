import { SectionHeader } from "@/components/layout/SectionHeader"
import { TestimonialCard } from "@/components/shared/TestimonialCard"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Students Say"
          subtitle="Join thousands of satisfied learners who've transformed their careers"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
