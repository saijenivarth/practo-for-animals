import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { LayoutGrid, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORIES, isCategoryId } from "@/data/categories";

export function HeroSearch() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("all");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({
      to: "/find-care",
      search: {
        location: location.trim() || undefined,
        category: isCategoryId(category) ? category : undefined,
      },
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      aria-label="Find animal care"
      className="flex flex-col gap-2 rounded-2xl border bg-card p-2 shadow-lift md:flex-row md:items-center"
    >
      <label className="flex flex-1 items-center gap-3 rounded-xl px-3 py-2.5 transition-colors focus-within:bg-secondary">
        <MapPin className="size-5 shrink-0 text-primary" />
        <span className="sr-only">Location</span>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City or area, e.g. Indiranagar"
          className="w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          list="hero-cities"
        />
        <datalist id="hero-cities">
          {["Bengaluru", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai", "Kolkata"].map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
      </label>

      <div className="hidden h-8 w-px bg-border md:block" />

      <div className="flex items-center gap-3 rounded-xl px-3 md:w-60">
        <LayoutGrid className="size-5 shrink-0 text-primary" />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger
            aria-label="Service"
            className="h-11 border-0 bg-transparent px-0 shadow-none focus:ring-0"
          >
            <SelectValue placeholder="All services" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All services</SelectItem>
            {CATEGORIES.map((c) => (
              <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" variant="hero" size="lg" className="md:px-7">
        <Search /> Find Care
      </Button>
    </form>
  );
}
