import { Link } from "@tanstack/react-router";
import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Practo for Animals — home"
    >
      <span
        className={cn(
          "grid size-9 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-12",
          inverse ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground",
        )}
      >
        <PawPrint className="size-5" strokeWidth={2.4} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            inverse ? "text-primary-foreground" : "text-foreground",
          )}
        >
          practo
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-semibold uppercase tracking-[0.22em]",
            inverse ? "text-primary-foreground/70" : "text-primary",
          )}
        >
          for animals
        </span>
      </span>
    </Link>
  );
}
