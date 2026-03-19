import { motion } from "framer-motion"
import { Shield, Clock, DollarSign, ShoppingBag } from "lucide-react"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Trusted Teachers",
    description:
      "All instructors are vetted professionals with real-world experience.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Learn at your own pace with lifetime access to course materials.",
  },
  {
    icon: DollarSign,
    title: "Affordable Courses",
    description:
      "Quality education at fair prices. Frequent sales and bundles available.",
  },
  {
    icon: ShoppingBag,
    title: "Easy Marketplace Experience",
    description:
      "Browse, compare, and enroll in minutes. Simple and straightforward.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose LearnHub"
          subtitle="We're committed to making quality education accessible to everyone"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary-soft flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
