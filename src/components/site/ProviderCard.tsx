import { Link } from "@tanstack/react-router";
import { BadgeCheck, Clock, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORY_BY_ID } from "@/data/categories";
import type { Provider } from "@/data/providers";
import { CallDialog } from "./CallDialog";
import { StarRating } from "./StarRating";

export function ProviderCard({ provider }: { provider: Provider }) {
  const category = CATEGORY_BY_ID[provider.category];
  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={provider.image}
          alt={`${provider.name} (illustrative photo)`}
          loading="lazy"
          width={1200}
          height={800}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="bg-card/95 text-foreground shadow-soft backdrop-blur">
            {category.short}
          </Badge>
        </div>
        <Badge variant="demo" className="absolute right-3 top-3 shadow-soft">Sample data</Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-foreground">{provider.name}</h3>
          <Badge variant="verified" className="shrink-0">
            <BadgeCheck /> Verified (demo)
          </Badge>
        </div>

        <StarRating rating={provider.rating} reviewCount={provider.reviewCount} className="mt-2" />

        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <span className="font-medium text-foreground">{provider.area}, {provider.city}</span>
              <span className="block text-xs">{provider.address}</span>
            </span>
          </li>
          <li className="flex gap-2">
            <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{provider.hours}</span>
          </li>
          <li className="flex gap-2">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              {provider.phone} <span className="text-xs text-highlight-foreground">(sample)</span>
            </span>
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {provider.services.slice(0, 3).map((s) => (
            <span key={s} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
              {s}
            </span>
          ))}
          {provider.services.length > 3 && (
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              +{provider.services.length - 3} more
            </span>
          )}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <Button asChild variant="outline">
            <Link to="/providers/$id" params={{ id: provider.id }}>View Details</Link>
          </Button>
          <CallDialog
            provider={provider}
            trigger={
              <Button>
                <Phone /> Call Now
              </Button>
            }
          />
        </div>
      </div>
    </article>
  );
}
