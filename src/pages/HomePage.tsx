import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { CategoriesSection } from "@/components/home/CategoriesSection"
import { FeaturedCourses } from "@/components/home/FeaturedCourses"
import { FeaturedTeachers } from "@/components/home/FeaturedTeachers"
import { PromoBannerSection } from "@/components/home/PromoBannerSection"
import { LearningBundles } from "@/components/home/LearningBundles"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedCourses />
        <FeaturedTeachers />
        <PromoBannerSection />
        <LearningBundles />
        <WhyChooseUs />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
