import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Code2, BookOpen, TrendingUp } from "lucide-react"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const bundles = [
  {
    id: "1",
    title: "Web Development Starter Pack",
    description: "HTML, CSS, JavaScript & React — everything you need to start building websites",
    icon: Code2,
    courses: 4,
    price: 99,
  },
  {
    id: "2",
    title: "English Mastery Bundle",
    description: "From basics to business English. IELTS prep included.",
    icon: BookOpen,
    courses: 5,
    price: 79,
  },
  {
    id: "3",
    title: "Business Growth Essentials",
    description: "Marketing, sales, and strategy — grow your business skills",
    icon: TrendingUp,
    courses: 3,
    price: 89,
  },
]

export function LearningBundles() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Popular Learning Bundles"
          subtitle="Curated collections to accelerate your learning journey"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => {
            const Icon = bundle.icon
            return (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Link to="/courses">
                  <Card className="h-full border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {bundle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {bundle.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-muted-foreground">
                          {bundle.courses} courses · ${bundle.price}
                        </span>
                        <Button size="sm" variant="ghost">
                          View Bundle
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
