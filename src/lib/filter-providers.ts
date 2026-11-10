import type { Availability, Provider } from "@/data/providers";
import { isCategoryId, type CategoryId } from "@/data/categories";

export type SortOption = "relevance" | "rating";
export type AvailabilityFilter = Availability | "any";

export interface ProviderFilters {
  q?: string;
  location?: string;
  category?: CategoryId;
  minRating?: number;
  availability?: Availability;
  sort?: SortOption;
}

export const RATING_OPTIONS = [4.5, 4, 3.5] as const;

export const AVAILABILITY_OPTIONS: { value: Availability; label: string }[] = [
  { value: "24x7", label: "Open 24×7" },
  { value: "weekends", label: "Open on weekends" },
  { value: "home-visit", label: "Home visits / pickup" },
];

const AVAILABILITY_VALUES: Availability[] = ["24x7", "weekends", "home-visit"];

const norm = (s: string) => s.toLowerCase().trim();

export function filterProviders(providers: Provider[], filters: ProviderFilters): Provider[] {
  const q = filters.q ? norm(filters.q) : "";
  const loc = filters.location ? norm(filters.location) : "";

  const result = providers.filter((p) => {
    if (q && !norm(p.name).includes(q)) return false;
    if (loc) {
      const haystack = norm(`${p.city} ${p.area} ${p.address}`);
      if (!haystack.includes(loc)) return false;
    }
    if (filters.category && p.category !== filters.category) return false;
    if (filters.minRating && p.rating < filters.minRating) return false;
    if (filters.availability && !p.availability.includes(filters.availability)) return false;
    return true;
  });

  const sort = filters.sort ?? "relevance";
  return [...result].sort((a, b) =>
    sort === "rating"
      ? b.rating - a.rating || b.reviewCount - a.reviewCount
      : b.relevance - a.relevance,
  );
}

export function hasActiveFilters(f: ProviderFilters): boolean {
  return Boolean(f.q || f.location || f.category || f.minRating || f.availability);
}

/** Parses untrusted URL search params into typed filters. */
export function parseProviderFilters(search: Record<string, unknown>): ProviderFilters {
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 80) : undefined);
  const rating = Number(search.minRating);
  return {
    q: str(search.q),
    location: str(search.location),
    category: isCategoryId(search.category) ? search.category : undefined,
    minRating: (RATING_OPTIONS as readonly number[]).includes(rating) ? rating : undefined,
    availability: AVAILABILITY_VALUES.includes(search.availability as Availability)
      ? (search.availability as Availability)
      : undefined,
    sort: search.sort === "rating" ? "rating" : undefined,
  };
}
