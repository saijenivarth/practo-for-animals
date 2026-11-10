import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  reviewCount,
  size = "sm",
  className,
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-md bg-primary font-bold text-primary-foreground",
          size === "sm" ? "px-1.5 py-0.5 text-xs" : "px-2 py-1 text-sm",
        )}
        aria-label={`Rated ${rating} out of 5`}
      >
        {rating.toFixed(1)}
        <Star className={cn("fill-current", size === "sm" ? "size-3" : "size-3.5")} />
      </span>
      {reviewCount !== undefined && (
        <span className="text-xs text-muted-foreground">
          {reviewCount.toLocaleString("en-IN")} reviews <span className="opacity-70">(demo)</span>
        </span>
      )}
    </div>
  );
}

export function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn("size-3.5", i <= rating ? "fill-star text-star" : "text-border")}
        />
      ))}
    </div>
  );
}
