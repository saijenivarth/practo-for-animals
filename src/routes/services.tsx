// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/services')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/services"!</div>
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Hospital,
  PawPrint,
  BedDouble,
  Microscope,
  Ambulance,
  ArrowRight,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Clinics",
    description: "Find trusted veterinary clinics for regular checkups, vaccinations and everyday pet healthcare.",
    category: "clinic",
  },
  {
    icon: Hospital,
    title: "Animal Hospitals",
    description: "Discover animal hospitals equipped for advanced treatment, surgery and emergency care.",
    category: "hospital",
  },
  {
    icon: BedDouble,
    title: "Pet Boarding",
    description: "Find comfortable and reliable boarding facilities for your pets when you are away.",
    category: "boarding",
  },
  {
    icon: Microscope,
    title: "Diagnostics",
    description: "Explore diagnostic centres offering laboratory tests, imaging and health assessments.",
    category: "diagnostics",
  },
  {
    icon: Ambulance,
    title: "Animal Ambulance",
    description: "Locate emergency animal transportation and pickup services when every minute matters.",
    category: "ambulance",
  },
  {
    icon: Heart,
    title: "Animal NGOs",
    description: "Connect with animal welfare organisations, shelters and adoption support groups.",
    category: "ngo",
  },
];

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-secondary/50 py-20">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <PawPrint className="size-4" />
            Complete Animal Care
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Everything your pet needs,
            <span className="block text-primary">all in one place.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Explore animal healthcare and welfare services to give every paw
            the care and attention it deserves.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Explore our services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            Care for every need
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.category}
                className="group rounded-2xl border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-20 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  to="/find-care"
                  search={{ category: service.category as any }}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
                >
                  Explore providers
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Your pet deserves the best care.
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Discover trusted animal care providers in your city.
          </p>
          <Link
            to="/find-care"
            className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-primary"
          >
            Find a provider
          </Link>
        </div>
      </section>
    </main>
  );
}
