import { cn } from "@/lib/utils"

interface PriceDisplayProps {
  price: number
  originalPrice?: number
  discount?: number
  className?: string
}

export function PriceDisplay({
  price,
  originalPrice,
  discount,
  className,
}: PriceDisplayProps) {
  const hasDiscount = discount && discount > 0

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-lg font-bold text-foreground">
        ${price.toFixed(2)}
      </span>
      {hasDiscount && originalPrice && (
        <span className="text-sm text-muted-foreground line-through">
          ${originalPrice.toFixed(2)}
        </span>
      )}
      {hasDiscount && (
        <span className="text-xs font-medium text-primary bg-primary-soft px-2 py-0.5 rounded">
          {discount}% off
        </span>
      )}
    </div>
  )
}
