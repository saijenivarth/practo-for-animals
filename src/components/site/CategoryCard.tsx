import { Link } from "@tanstack/react-router";
import {
  Ambulance,
  ArrowUpRight,
  Building2,
  HandHeart,
  Home,
  Microscope,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Category, CategoryId } from "@/data/categories";
import { PROVIDERS } from "@/data/providers";

export const CATEGORY_ICONS: Record<CategoryId, LucideIcon> = {
  clinic: Stethoscope,
  hospital: Building2,
  boarding: Home,
  diagnostics: Microscope,
  ambulance: Ambulance,
  ngo: HandHeart,
};

export function CategoryCard({ category }: { category: Category }) {
  const Icon = CATEGORY_ICONS[category.id];
  const count = PROVIDERS.filter((p) => p.category === category.id).length;
  return (
    <Link
      to="/find-care"
      search={{ category: category.id }}
      className="card-lift group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </span>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <h3 className="mt-5 text-lg font-bold">{category.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
      <p className="mt-5 text-sm font-semibold text-primary">
        Explore {count} sample {count === 1 ? "listing" : "listings"} →
      </p>
    </Link>
  );
}
