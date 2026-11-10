
import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
  PawPrint,
  ArrowUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ProviderCard } from "@/components/site/ProviderCard";
import { CATEGORIES, isCategoryId } from "@/data/categories";
import { PROVIDERS } from "@/data/providers";

import {
  filterProviders,
  parseProviderFilters,
  hasActiveFilters,
  type ProviderFilters,
} from "@/lib/filter-providers";

export const Route = createFileRoute("/find-care")({
  validateSearch: (search: Record<string, unknown>) =>
    parseProviderFilters(search),
  component: FindCarePage,
});

function FindCarePage() {
  const filters = Route.useSearch();
  const navigate = useNavigate({ from: "/find-care" });

  const [query, setQuery] = useState(filters.q ?? "");
  const [location, setLocation] = useState(filters.location ?? "");

  useEffect(() => {
    setQuery(filters.q ?? "");
    setLocation(filters.location ?? "");
  }, [filters.q, filters.location]);

  const updateFilters = (updates: Partial<ProviderFilters>) => {
    void navigate({
      search: (previous) => ({
        ...previous,
        ...updates,
      }),
    });
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateFilters({
      q: query.trim() || undefined,
      location: location.trim() || undefined,
    });
  };

  const clearFilters = () => {
    setQuery("");
    setLocation("");

    void navigate({
      search: {},
    });
  };

  const providers = filterProviders(PROVIDERS, filters);

  const active = hasActiveFilters(filters) || filters.sort === "rating";

  return (
    <div className="min-h-screen bg-background">

      {/* Page heading */}
      <section className="bg-secondary/50 py-14 md:py-20">
        <div className="container-page">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <PawPrint className="size-4" />
              Trusted Animal Care
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Find the right care
              <span className="block text-primary">
                for every paw.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Discover veterinary clinics, animal hospitals, boarding
              centres, diagnostics and animal welfare services across India.
            </p>

          </div>

          {/* Search form */}
          <form
            onSubmit={handleSearch}
            role="search"
            aria-label="Search animal care providers"
            className="mx-auto mt-10 grid max-w-5xl gap-3 rounded-2xl border bg-card p-3 shadow-lift md:grid-cols-[1fr_1fr_auto]"
          >

            <div className="flex items-center gap-3 rounded-xl border border-transparent px-3 focus-within:border-primary/30">
              <Search className="size-5 shrink-0 text-primary" />

              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search provider name"
                aria-label="Provider name"
                className="border-0 shadow-none focus-visible:ring-0"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-transparent px-3 focus-within:border-primary/30">
              <MapPin className="size-5 shrink-0 text-primary" />

              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or area"
                aria-label="City or area"
                className="border-0 shadow-none focus-visible:ring-0"
              />
            </div>

            <Button type="submit" variant="hero" size="lg">
              <Search />
              Search Providers
            </Button>

          </form>

        </div>
      </section>

      {/* Provider search results */}
      <section className="container-page py-12 md:py-16">

        {/* Results heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Explore providers
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Animal care near you
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Showing {providers.length} of {PROVIDERS.length} sample providers
            </p>
          </div>

          {active && (
            <Button
              type="button"
              variant="outline"
              onClick={clearFilters}
            >
              <X className="size-4" />
              Clear all filters
            </Button>
          )}

        </div>

        {/* Filters */}
        <div className="mt-8 rounded-2xl border bg-card p-5 shadow-sm">

          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal className="size-5 text-primary" />

            <h3 className="font-semibold text-foreground">
              Refine your search
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Category filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Service category
              </label>

              <Select
                value={filters.category ?? "all"}
                onValueChange={(value) =>
                  updateFilters({
                    category: isCategoryId(value) ? value : undefined,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>

                  {CATEGORIES.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Rating filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Minimum rating
              </label>

              <Select
                value={filters.minRating?.toString() ?? "any"}
                onValueChange={(value) =>
                  updateFilters({
                    minRating:
                      value === "any" ? undefined : Number(value),
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any rating" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="any">Any rating</SelectItem>
                  <SelectItem value="4.5">4.5+ stars</SelectItem>
                  <SelectItem value="4">4.0+ stars</SelectItem>
                  <SelectItem value="3.5">3.5+ stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Availability filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Availability
              </label>

              <Select
                value={filters.availability ?? "any"}
                onValueChange={(value) =>
                  updateFilters({
                    availability:
                      value === "any"
                        ? undefined
                        : value as ProviderFilters["availability"],
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any availability" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="any">Any availability</SelectItem>
                  <SelectItem value="24x7">Open 24×7</SelectItem>
                  <SelectItem value="weekends">
                    Open on weekends
                  </SelectItem>
                  <SelectItem value="home-visit">
                    Home visits / pickup
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sorting */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Sort providers
              </label>

              <Select
                value={filters.sort ?? "relevance"}
                onValueChange={(value) =>
                  updateFilters({
                    sort: value as ProviderFilters["sort"],
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by relevance" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="relevance">
                    Most relevant
                  </SelectItem>
                  <SelectItem value="rating">
                    Highest rated
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>
        </div>

        {/* Provider cards */}
        {providers.length > 0 ? (

          <div className="mt-9">

            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {providers.length} provider{providers.length !== 1 ? "s" : ""} found
              </p>

              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <ArrowUpDown className="size-3.5" />
                {filters.sort === "rating"
                  ? "Highest rated"
                  : "Most relevant"}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {providers.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                />
              ))}

            </div>

          </div>

        ) : (

          /* Empty results */
          <div className="mt-12 rounded-2xl border border-dashed bg-card px-6 py-16 text-center">

            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary">
              <PawPrint className="size-8 text-primary" />
            </div>

            <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
              No providers found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              We couldn't find providers matching your search.
              Try another city, provider name or category.
            </p>

            <Button
              className="mt-6"
              variant="hero"
              onClick={clearFilters}
            >
              Clear filters
            </Button>

          </div>

        )}

        {/* Sample data notice */}
        <div className="mt-12 rounded-xl border border-highlight/30 bg-highlight/5 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Prototype notice:</strong>{" "}
            Provider listings, ratings, reviews, addresses and contact
            numbers displayed on this website are illustrative sample
            data. They are not live verified business information.
          </p>
        </div>

      </section>

    </div>
  );
}
