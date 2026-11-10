// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/about')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/about"!</div>
// }


import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShieldCheck, Users, PawPrint, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-secondary/50 py-20">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <PawPrint className="size-4" />
            About Practo for Animals
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Better care for animals.
            <span className="block text-primary">A better world for pets.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We aim to make discovering animal healthcare and welfare services
            simpler, more accessible and convenient for pet parents across India.
          </p>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our purpose
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold">
            Every paw deserves attention, compassion and care.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Finding the right veterinary clinic, animal hospital or welfare
            organisation should not be difficult. Practo for Animals brings
            different animal care services together in one easy-to-explore
            platform.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our goal is to help pet parents discover relevant services and
            make more informed choices for their animals.
          </p>
          <Link
            to="/find-care"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            Explore providers <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="rounded-3xl bg-secondary p-10">
          <PawPrint className="size-16 text-primary" />
          <h3 className="mt-6 text-2xl font-bold">Our mission</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To connect pet parents with animal healthcare providers, emergency
            support, boarding facilities and animal welfare organisations.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container-page">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold">What we believe in</h2>
            <p className="mt-3 text-muted-foreground">
              The principles behind a more connected animal care experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, title: "Compassion", description: "Every animal deserves kindness, respect and thoughtful care." },
              { icon: ShieldCheck, title: "Trust", description: "Clear provider information helps pet parents make informed decisions." },
              { icon: Users, title: "Community", description: "Connecting pet parents, care providers and animal welfare organisations." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border bg-card p-7 text-center">
                  <Icon className="mx-auto size-10 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
