import { motion } from "framer-motion"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { CategoryCard } from "@/components/shared/CategoryCard"
import { categories } from "@/data/categories"

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Browse by Category"
          subtitle="Find the perfect course in your area of interest"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
