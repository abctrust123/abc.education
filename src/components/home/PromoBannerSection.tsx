import { PromoBanner } from "@/components/shared/PromoBanner"

export function PromoBannerSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PromoBanner
          title="Spring Learning Sale — Up to 40% Off"
          description="Unlock your potential with discounted courses. Limited time offer on thousands of courses across all categories."
          ctaText="Shop the Sale"
          ctaLink="/offers"
        />
      </div>
    </section>
  )
}
