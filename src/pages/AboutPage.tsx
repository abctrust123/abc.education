import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Users, BookOpen, Award, Target } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const metrics = [
  { value: "10,000+", label: "Active Students", icon: Users },
  { value: "500+", label: "Courses", icon: BookOpen },
  { value: "200+", label: "Expert Teachers", icon: Award },
]

const benefits = [
  {
    title: "Quality Education",
    description:
      "Every course is vetted for quality. Learn from industry professionals with real-world experience.",
  },
  {
    title: "Flexible Learning",
    description:
      "Study at your own pace. Access courses anytime, anywhere, on any device.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We believe education should be accessible. Competitive prices and frequent discounts.",
  },
  {
    title: "Community Support",
    description:
      "Join a community of learners. Get help from instructors and fellow students.",
  },
]

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-deep via-primary to-primary-soft py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold"
            >
              About LearnHub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-white/90 max-w-2xl mx-auto"
            >
              We&apos;re on a mission to make quality education accessible to
              everyone, everywhere.
            </motion.p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                LearnHub connects students with expert teachers through a
                modern, trustworthy marketplace. We believe that everyone
                deserves access to quality education that fits their schedule
                and budget. Whether you&apos;re advancing your career, learning
                a new skill, or preparing for exams, we&apos;re here to support
                your journey.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              Our Impact
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {metrics.map((m) => {
                const Icon = m.icon
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary-soft flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-3xl font-bold text-foreground block">
                      {m.value}
                    </span>
                    <span className="text-muted-foreground">{m.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <Card key={b.title} className="border-border">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {b.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-primary-soft">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Browse our courses and find the perfect fit for your goals.
            </p>
            <Button size="lg" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
