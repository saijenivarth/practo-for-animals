// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/list-your-business')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/list-your-business"!</div>
// }



import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Building2, CheckCircle2, PawPrint, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/list-your-business")({
  component: ListBusinessPage,
});

function ListBusinessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    category: "clinic",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const update = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-secondary/50 py-16">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <Building2 className="size-4" />
            Partner with us
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl">
            Help more pets discover
            <span className="block text-primary">your services.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            List your animal care business and make it easier for pet parents
            to discover your services.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold">
            Grow your reach with Practo for Animals
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Connect with pet parents looking for animal healthcare, boarding,
            diagnostics and welfare services.
          </p>

          <div className="mt-8 space-y-6">
            {[
              "Showcase your business and services",
              "Help pet parents discover your location",
              "Share your contact information",
              "Build visibility in your local community",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-secondary p-7">
            <PawPrint className="size-9 text-primary" />
            <h3 className="mt-4 text-xl font-bold">
              Better connections. Better animal care.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Join a growing network of animal care providers and help make
              essential services easier to find.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto size-14 text-primary" />
              <h2 className="mt-5 text-2xl font-bold">Thank you for your interest!</h2>
              <p className="mt-3 text-muted-foreground">
                Your demo submission has been recorded in this page's temporary
                state. No information has been sent to a server.
              </p>
              <Button className="mt-6" onClick={() => setSubmitted(false)}>
                Submit another listing
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">List your business</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your details to get started.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business name</label>
                  <Input required value={form.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Your clinic or business name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Owner / Contact person</label>
                  <Input required value={form.ownerName} onChange={(e) => update("ownerName", e.target.value)} placeholder="Full name" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email address</label>
                    <Input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone number</label>
                    <Input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Contact number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <Input required value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="e.g. Hyderabad" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Business category</label>
                  <select
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                    className="h-11 w-full rounded-md border bg-background px-3 text-sm"
                  >
                    <option value="clinic">Veterinary clinic</option>
                    <option value="hospital">Animal hospital</option>
                    <option value="boarding">Pet boarding</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="ambulance">Animal ambulance</option>
                    <option value="ngo">Animal NGO</option>
                  </select>
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  <Send className="mr-2 size-4" />
                  Submit business details
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Demo form only. Information is not transmitted or stored.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
