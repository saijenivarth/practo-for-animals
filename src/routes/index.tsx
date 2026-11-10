import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  FilePenLine,
  GitCompare,
  HandHeart,
  HeartPulse,
  MapPin,
  MessageSquareQuote,
  PawPrint,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-vet-dog.jpg";
import ngoImg from "@/assets/ngo-rescue.jpg";
import vetCatImg from "@/assets/vet-cat.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroSearch } from "@/components/site/HeroSearch";
import { CategoryCard } from "@/components/site/CategoryCard";
import { ProviderCard } from "@/components/site/ProviderCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StarRow } from "@/components/site/StarRating";
import { CATEGORIES } from "@/data/categories";
import { PROVIDERS } from "@/data/providers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Practo for Animals — Find Trusted Vets & Pet Care in India" },
      {
        name: "description",
        content:
          "Because every paw deserves the best care. Discover veterinary clinics, hospitals, diagnostics, boarding and animal welfare NGOs near you.",
      },
      { property: "og:title", content: "Practo for Animals — Every Pet Deserves Better Care" },
      {
        property: "og:description",
        content: "Discover trusted veterinary clinics, hospitals, diagnostics and pet-care services near you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TRUST = [
  { value: "2,500+", label: "clinics & hospitals", icon: Building2 },
  { value: "6", label: "care categories", icon: Sparkles },
  { value: "40+", label: "Indian cities", icon: MapPin },
];

const STEPS = [
  { icon: Search, title: "Search", text: "Enter your location and the kind of care your pet needs." },
  { icon: GitCompare, title: "Compare", text: "Review ratings, timings, services and verified details side by side." },
  { icon: HeartPulse, title: "Connect", text: "Call, book an appointment or message the provider directly." },
];

const WHY = [
  { icon: ShieldCheck, title: "Verified listings", text: "Each provider goes through document and on-site checks before earning a verified badge." },
  { icon: Star, title: "Honest reviews", text: "Ratings come only from pet parents who have visited, so you see real experiences." },
  { icon: Clock, title: "Emergency ready", text: "Filter for 24×7 hospitals and ambulances when every minute matters." },
  { icon: Users, title: "Built for every animal", text: "Dogs, cats, birds, rabbits and community animals — all welcome." },
];

const TESTIMONIALS = [
  {
    quote: "We'd just moved to Pune and Simba stopped eating. Within ten minutes I'd compared three clinics nearby and found one open on Sunday.",
    name: "Aditi Kulkarni",
    meta: "Pet parent to Simba, Indie · Pune",
    rating: 5,
  },
  {
    quote: "Finding an animal ambulance at midnight used to mean calling ten numbers. Having them in one place with timings is a lifesaver.",
    name: "Rohan Iyer",
    meta: "Community animal feeder · Chennai",
    rating: 5,
  },
  {
    quote: "As a small clinic, being discoverable alongside large hospitals has brought us pet parents from neighbourhoods we never reached before.",
    name: "Dr. Neha Sharma",
    meta: "Veterinarian · Delhi",
    rating: 4,
  },
];

function Index() {
  const featured = [...PROVIDERS].sort((a, b) => b.relevance - a.relevance).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[85%] bg-secondary" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[85%] bg-paw-dots opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />

        <div className="container-page relative grid items-center gap-10 pb-16 pt-10 md:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-24 lg:pt-20">
          <div className="animate-rise">
            <Badge variant="verified" className="bg-card px-3 py-1 text-xs shadow-soft">
              <PawPrint /> Every Pet Deserves Better Care
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Because Every Paw Deserves the{" "}
              <span className="relative whitespace-nowrap text-primary">
                Best Care.
                <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-2 left-0 h-3 w-full text-highlight" preserveAspectRatio="none">
                  <path d="M2 9 C 50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Discover trusted veterinary clinics, hospitals, diagnostics and pet-care services near you.
            </p>

            <div className="mt-8">
              <HeroSearch />
            </div>

            <div className="mt-8">
              <dl className="grid grid-cols-3 gap-3 sm:max-w-lg">
                {TRUST.map((t) => (
                  <div key={t.label} className="rounded-xl border bg-card/80 p-3 shadow-soft backdrop-blur">
                    <t.icon className="size-4 text-primary" />
                    <dt className="sr-only">{t.label}</dt>
                    <dd className="mt-1.5 font-display text-xl font-bold text-foreground sm:text-2xl">{t.value}</dd>
                    <dd className="text-xs leading-tight text-muted-foreground">{t.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 text-[0.7rem] text-muted-foreground">
                Illustrative target figures for this prototype — not live platform statistics.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-card shadow-lift">
              <img
                src={heroImg}
                alt="Veterinarian examining a golden retriever with a stethoscope"
                width={1280}
                height={1440}
                fetchPriority="high"
                className="aspect-[4/4.4] w-full object-cover"
              />
            </div>

            <div className="animate-float absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl border bg-card p-3 pr-4 shadow-lift sm:-left-8">
              <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                <BadgeCheck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold">Verified providers</p>
                <p className="text-xs text-muted-foreground">Checked & reviewed</p>
              </div>
            </div>

            <div className="absolute -right-2 top-8 rounded-2xl border bg-card p-3 shadow-lift sm:-right-6">
              <div className="flex items-center gap-1 text-star">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <p className="mt-1 text-sm font-bold">4.8 avg. rating</p>
              <p className="text-[0.7rem] text-muted-foreground">Sample figure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="services" className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Care categories"
            title="Every kind of care, in one place"
            description="From routine vaccinations to midnight emergencies — choose what your pet needs."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => <CategoryCard key={c.id} category={c} />)}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-secondary/60 py-20 lg:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Find the right care"
              title="Highly rated near you"
              description="A preview of sample listings. Open Find Care to search, filter and sort."
            />
            <Button asChild variant="hero" size="lg" className="self-start md:self-auto">
              <Link to="/find-care">Search all providers <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <ProviderCard key={p.id} provider={p} />)}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="Search. Compare. Connect." />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-primary/25 md:block" aria-hidden />
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border bg-card p-7 text-center shadow-soft">
                <span className="relative mx-auto grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-card">
                  <s.icon className="size-7" />
                  <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-highlight text-xs font-bold text-highlight-foreground ring-4 ring-card">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <img
              src={vetCatImg}
              alt="Veterinarian holding a tabby cat during a check-up"
              loading="lazy"
              width={1008}
              height={1008}
              className="aspect-square w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 right-6 max-w-[16rem] rounded-2xl bg-primary p-5 text-primary-foreground shadow-lift">
              <p className="font-display text-3xl font-bold">1 search</p>
              <p className="mt-1 text-sm text-primary-foreground/80">to find vets, labs, boarding and rescue in your area.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Why Practo for Animals"
              title="Healthcare-grade trust, made for pets"
              description="We bring the reliability you expect from human healthcare platforms to the animals you love."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHY.map((w) => (
                <div key={w.title} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <w.icon className="size-6 text-primary" />
                  <h3 className="mt-3 font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NGO AWARENESS */}
      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="grid overflow-hidden rounded-[2rem] bg-primary-deep text-primary-foreground lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="eyebrow text-highlight">Animal welfare</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Care that reaches every street, not just every home.</h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">
                India is home to millions of community animals. Local NGOs run rescues, sterilisation
                drives and adoption camps — often on volunteer time. Find one near you, report an
                injured animal, or lend a hand this weekend.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-primary-foreground/85">
                {["Report injured animals to a nearby rescue", "Support sterilisation & vaccination drives", "Adopt, foster or volunteer locally"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><HandHeart className="size-4 text-highlight" /> {t}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="highlight" size="lg">
                  <Link to="/find-care" search={{ category: "ngo" }}>Find an NGO</Link>
                </Button>
                <Button asChild variant="outline-inverse" size="lg">
                  <Link to="/find-care" search={{ category: "ambulance" }}>Animal ambulances</Link>
                </Button>
              </div>
            </div>
            <img
              src={ngoImg}
              alt="Volunteer feeding a rescued street dog"
              loading="lazy"
              width={1200}
              height={912}
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pet parents & providers"
            title="Stories from the community"
            description="Illustrative sample testimonials for this prototype."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border bg-card p-7 shadow-soft">
                <MessageSquareQuote className="size-8 text-highlight" />
                <StarRow rating={t.rating} />
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t pt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.meta} · Sample</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS + CORRECTION */}
      <section className="pb-20 lg:pb-24">
        <div className="container-page grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-secondary p-8 sm:p-12">
            <div className="bg-paw-dots absolute inset-0 opacity-50" aria-hidden />
            <div className="relative">
              <Store className="size-8 text-primary" />
              <h2 className="mt-4 text-3xl font-bold">Run a clinic, lab or shelter?</h2>
              <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                List your animal-care business for free and get discovered by pet parents searching
                in your neighbourhood. Manage timings, services and contact details in one place.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-7">
                <Link to="/list-your-business">List Your Business <ArrowRight /></Link>
              </Button>
            </div>
          </div>

          <div id="corrections" className="flex flex-col rounded-[2rem] border bg-card p-8 shadow-soft sm:p-10">
            <FilePenLine className="size-8 text-highlight" />
            <h2 className="mt-4 text-2xl font-bold">Spotted something wrong?</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              Changed timings, a wrong number or a closed clinic? Help keep listings accurate for
              every pet parent.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-6 self-start">
              <Link to="/report-correction">Submit a Correction</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
