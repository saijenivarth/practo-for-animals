import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo inverse />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Every Pet Deserves Better Care. Discover trusted veterinary and animal-care providers
            across India.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/55">
            Prototype for demonstration. Provider listings, ratings and contact numbers shown are
            sample data.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/find-care" className="hover:text-highlight">Find Care</Link></li>
            <li><Link to="/services" className="hover:text-highlight">Services</Link></li>
            <li><Link to="/about" className="hover:text-highlight">About Us</Link></li>
            <li><Link to="/list-your-business" className="hover:text-highlight">List Your Business</Link></li>
            <li><Link to="/report-correction" className="hover:text-highlight">Submit a Correction</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link to="/find-care" search={{ category: c.id }} className="hover:text-highlight">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
            Contact (sample)
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2.5"><Mail className="mt-0.5 size-4 shrink-0" /> hello@practoforanimals.example</li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 size-4 shrink-0" /> +91 80 0000 0000 (sample)</li>
            <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0" /> Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Practo for Animals · Prototype</p>
          <p>Made with care for every paw 🐾</p>
        </div>
      </div>
    </footer>
  );
}
