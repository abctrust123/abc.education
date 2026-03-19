import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PromoBannerProps {
  title: string
  description?: string
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function PromoBanner({
  title,
  description,
  ctaText = "Explore Offers",
  ctaLink = "/offers",
  className,
}: PromoBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-deep via-primary to-primary-deep py-12 px-6 sm:py-16 sm:px-12",
        className
      )}
    >
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-white/90 text-lg">{description}</p>
        )}
        <Button
          size="lg"
          className="mt-6 bg-white text-primary hover:bg-white/90"
          asChild
        >
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
    </motion.section>
  )
}
