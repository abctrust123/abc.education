import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PromoBanner } from "@/components/shared/PromoBanner"
import { CourseCard } from "@/components/shared/CourseCard"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { offers } from "@/data/offers"
import { courses } from "@/data/courses"

const discountedCourses = courses.filter((c) => c.discount && c.discount > 0)

export function OffersPage() {
  const featuredOffer = offers.find((o) => o.featured) ?? offers[0]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-foreground">
              Special Offers & Promotions
            </h1>
            <p className="mt-2 text-muted-foreground">
              Save big on courses with our limited-time deals
            </p>
          </div>

          <PromoBanner
            title={featuredOffer.title}
            description={featuredOffer.description}
            ctaText="Claim Offer"
            ctaLink="#"
          />

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Featured Campaigns
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <Card
                  key={offer.id}
                  className="border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <CardContent className="p-6">
                    <Badge className="mb-3">{offer.discount}% off</Badge>
                    <h3 className="font-semibold text-lg">{offer.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {offer.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Valid until: {offer.validUntil}
                    </p>
                    <Button variant="outline" size="sm" className="mt-4">
                      View Courses
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Discounted Courses
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {discountedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Have a Coupon?
            </h2>
            <Card className="border-dashed">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Enter your promo code at checkout to get additional savings
                </p>
                <div className="flex gap-2 max-w-sm mx-auto">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 rounded-lg border border-border px-4 py-2 text-sm"
                  />
                  <Button>Apply</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
