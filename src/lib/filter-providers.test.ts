import { describe, expect, it } from "vitest";
import { PROVIDERS } from "@/data/providers";
import { filterProviders, hasActiveFilters, parseProviderFilters } from "./filter-providers";

describe("filterProviders", () => {
  it("searches by provider name, case-insensitively", () => {
    const r = filterProviders(PROVIDERS, { q: "lifeline" });
    expect(r.map((p) => p.id)).toEqual(["lifeline-animal-hospital-andheri"]);
  });

  it("filters by location across city and area", () => {
    expect(filterProviders(PROVIDERS, { location: "bengaluru" })).toHaveLength(2);
    expect(filterProviders(PROVIDERS, { location: "Koramangala" })).toHaveLength(1);
  });

  it("filters by service category", () => {
    const r = filterProviders(PROVIDERS, { category: "boarding" });
    expect(r.every((p) => p.category === "boarding")).toBe(true);
    expect(r).toHaveLength(2);
  });

  it("applies a minimum rating", () => {
    const r = filterProviders(PROVIDERS, { minRating: 4.5 });
    expect(r.every((p) => p.rating >= 4.5)).toBe(true);
    expect(r.some((p) => p.rating < 4.5)).toBe(false);
  });

  it("filters by availability", () => {
    const r = filterProviders(PROVIDERS, { availability: "24x7" });
    expect(r.every((p) => p.availability.includes("24x7"))).toBe(true);
    expect(r).toHaveLength(3);
  });

  it("sorts by rating, highest first", () => {
    const r = filterProviders(PROVIDERS, { sort: "rating" });
    expect(r[0].rating).toBe(4.9);
    for (let i = 1; i < r.length; i++) expect(r[i - 1].rating).toBeGreaterThanOrEqual(r[i].rating);
  });

  it("returns an empty list when nothing matches", () => {
    expect(filterProviders(PROVIDERS, { q: "zzz-no-such-vet" })).toEqual([]);
  });

  it("returns every provider when filters are cleared", () => {
    expect(filterProviders(PROVIDERS, {})).toHaveLength(PROVIDERS.length);
  });
});

describe("parseProviderFilters", () => {
  it("drops unknown categories and ratings from the URL", () => {
    const f = parseProviderFilters({ category: "spaceship", minRating: "2", sort: "weird" });
    expect(f.category).toBeUndefined();
    expect(f.minRating).toBeUndefined();
    expect(f.sort).toBeUndefined();
    expect(hasActiveFilters(f)).toBe(false);
  });

  it("keeps valid values", () => {
    const f = parseProviderFilters({ category: "clinic", minRating: "4", availability: "weekends" });
    expect(f).toMatchObject({ category: "clinic", minRating: 4, availability: "weekends" });
  });
});
