import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { GraduationCap, Users, BookOpen, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const metrics = [
  { value: "10k+", label: "Students", icon: Users },
  { value: "500+", label: "Courses", icon: BookOpen },
  { value: "200+", label: "Teachers", icon: UserCheck },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-primary-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Learn, Grow, and Achieve Your Goals
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Discover thousands of courses from expert teachers. Whether you
              want to advance your career or explore new skills, we&apos;ve got
              you covered.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/20 text-white border-white hover:bg-white/30"
                asChild
              >
                <Link to="/teachers">Become a Teacher</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 mt-12">
              {metrics.map(({ value, label, icon: Icon }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <Icon className="h-6 w-6" />
                  <div>
                    <span className="font-bold text-lg block">{value}</span>
                    <span className="text-sm text-white/80">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl" />
              <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                <div className="flex items-center justify-center">
                  <GraduationCap className="h-32 w-32 text-white/90" />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-3 bg-white/40 rounded w-3/4" />
                  <div className="h-3 bg-white/30 rounded w-1/2" />
                  <div className="h-3 bg-white/20 rounded w-2/3" />
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="flex-1 h-12 bg-white/30 rounded-lg" />
                  <div className="flex-1 h-12 bg-white/20 rounded-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
