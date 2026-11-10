
import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  CheckCircle2,
  Code2,
  GraduationCap,
  Lightbulb,
  Menu,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";

export const Route = createFileRoute("/ai-education")({
  head: () => ({
    meta: [
      { title: "AI Skills Studio | Learn AI. Build Real Projects." },
      {
        name: "description",
        content:
          "Explore practical AI, prompt engineering, automation and digital skills programmes for students and young professionals.",
      },
    ],
  }),
  component: AIEducationPage,
});

const programmes = [
  {
    icon: BrainCircuit,
    title: "Generative AI",
    description:
      "Understand how modern AI tools work and use them to solve practical problems.",
    level: "Beginner friendly",
    duration: "Practical learning",
  },
  {
    icon: MessageSquare,
    title: "Prompt Engineering",
    description:
      "Learn to communicate effectively with AI and generate better, more useful outputs.",
    level: "Beginner friendly",
    duration: "Hands-on exercises",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Explore AI-powered workflows that simplify repetitive tasks and everyday processes.",
    level: "Practical skills",
    duration: "Project based",
  },
  {
    icon: Code2,
    title: "Digital & AI Skills",
    description:
      "Build confidence with modern digital tools, productivity platforms and AI applications.",
    level: "Career focused",
    duration: "Applied learning",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Choose a learning path that matches your interests and goals.",
    icon: Target,
  },
  {
    number: "02",
    title: "Learn",
    description: "Understand concepts through guided lessons and demonstrations.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Build",
    description: "Apply your knowledge through practical exercises and projects.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Grow",
    description: "Develop useful skills and build confidence for your next opportunity.",
    icon: Rocket,
  },
];

function AIEducationPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "Generative AI",
    experience: "Beginner",
    message: "",
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D1C] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D1C]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500">
              <BrainCircuit className="size-6 text-white" />
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight">
                AI Skills Studio
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-300">
                Learn · Build · Grow
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#programmes" className="transition hover:text-white">Programmes</a>
            <a href="#learning" className="transition hover:text-white">How it works</a>
            <a href="#audience" className="transition hover:text-white">Who it's for</a>
            <a href="#faq" className="transition hover:text-white">FAQs</a>
          </nav>

          <button
            onClick={scrollToEnquiry}
            className="hidden rounded-xl bg-violet-500 px-5 py-3 text-sm font-bold transition hover:bg-violet-400 md:block"
          >
            Enquire Now <ArrowRight className="ml-2 inline size-4" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/15 p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="space-y-4 border-t border-white/10 px-6 py-5 md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#programmes" className="block">Programmes</a>
            <a onClick={() => setMenuOpen(false)} href="#learning" className="block">How it works</a>
            <a onClick={() => setMenuOpen(false)} href="#audience" className="block">Who it's for</a>
            <a onClick={() => setMenuOpen(false)} href="#faq" className="block">FAQs</a>
            <button onClick={scrollToEnquiry} className="w-full rounded-xl bg-violet-500 p-3 font-semibold">
              Enquire Now
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute -left-40 top-0 size-[500px] rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 top-20 size-[450px] rounded-full bg-blue-500/15 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200">
              <Sparkles className="size-4" />
              Practical AI & Digital Skills Programmes
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Don't just learn
              <span className="block bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
                about AI.
              </span>
              <span className="block">Learn to build with it.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
              Develop practical AI and digital skills through hands-on
              learning. Explore powerful tools, experiment with ideas and
              create projects that put your knowledge into action.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={scrollToEnquiry}
                className="rounded-xl bg-violet-500 px-7 py-4 font-bold shadow-lg shadow-violet-500/20 transition hover:-translate-y-1 hover:bg-violet-400"
              >
                Explore Programmes <ArrowRight className="ml-2 inline size-5" />
              </button>
              <a
                href="#learning"
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                How it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-400" /> Practical learning</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-400" /> Project focused</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-400" /> Beginner friendly</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-5 rounded-[3rem] bg-violet-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A2340] to-[#11182C] p-6 shadow-2xl sm:p-9">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Your next skill journey</p>
                  <h2 className="mt-1 text-xl font-bold">Build with AI</h2>
                </div>
                <div className="rounded-xl bg-violet-500/20 p-3 text-violet-300">
                  <Bot className="size-7" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: BrainCircuit, name: "Generative AI", color: "text-violet-300" },
                  { icon: MessageSquare, name: "Prompt Skills", color: "text-blue-300" },
                  { icon: Workflow, name: "Automation", color: "text-emerald-300" },
                  { icon: Code2, name: "Digital Tools", color: "text-orange-300" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <Icon className={`size-8 ${item.color}`} />
                      <p className="mt-5 font-semibold">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-400">Explore and create</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-violet-300/20 bg-violet-400/10 p-5">
                <div className="flex items-center gap-3">
                  <Lightbulb className="size-6 text-amber-300" />
                  <p className="font-semibold">From ideas to real projects</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Learn concepts, experiment with tools and turn what you
                  learn into something useful.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>AI-powered learning experience</span>
                <span className="text-violet-300">Learn · Build · Grow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:grid-cols-3 lg:px-8">
          {[
            { icon: Target, title: "Learn with purpose", text: "Focus on practical skills you can apply." },
            { icon: Code2, title: "Build by doing", text: "Turn concepts into exercises and projects." },
            { icon: Rocket, title: "Prepare for what's next", text: "Develop confidence with modern digital tools." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Explore learning paths</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Skills for the <span className="text-violet-300">AI era.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">
            Explore focused learning paths designed to help you understand
            technology and apply it to real-world challenges.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group rounded-2xl border border-white/10 bg-[#11182A] p-6 transition hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
                  <Icon className="size-7" />
                </div>
                <p className="mt-6 text-xs font-bold tracking-widest text-violet-300">0{index + 1} / LEARNING PATH</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-relaxed text-slate-400">{item.description}</p>
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                  <p>{item.level}</p>
                  <p>{item.duration}</p>
                </div>
                <button onClick={scrollToEnquiry} className="mt-6 flex items-center gap-2 text-sm font-bold text-violet-300 transition group-hover:gap-3">
                  Enquire about this <ArrowRight className="size-4" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Learning journey */}
      <section id="learning" className="border-y border-white/10 bg-[#10172A] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Your learning journey</p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Simple steps. Practical outcomes.</h2>
            <p className="mt-5 text-slate-400">A clear path from discovering AI to creating with it.</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {learningSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
                    <Icon className="size-7" />
                  </div>
                  <p className="mt-6 text-sm font-bold tracking-widest text-violet-300">{step.number}</p>
                  <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
                  {index !== 3 && <ArrowRight className="absolute right-0 top-5 hidden size-6 text-slate-600 lg:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section id="audience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Designed for your next step</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Your background doesn't define your potential.
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              Whether you are exploring AI for the first time or looking
              to strengthen your digital skills, start with curiosity and
              grow through practice.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Students", "Explore AI concepts and develop practical skills alongside your studies."],
              ["Fresh Graduates", "Build projects and strengthen your understanding of modern tools."],
              ["Young Professionals", "Explore AI tools that can support your work and productivity."],
              ["Career Explorers", "Discover new areas of technology and find a learning path."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#11182A] p-6">
                <GraduationCap className="size-7 text-violet-300" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-white/10 bg-[#10172A] py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">FAQs</p>
            <h2 className="mt-4 text-4xl font-extrabold">Questions? Start here.</h2>
          </div>
          <div className="mt-12 space-y-4">
            {[
              ["Do I need prior AI experience?", "The learning paths are designed to be approachable for beginners. Specific prerequisites can be confirmed for each programme."],
              ["Who can enrol?", "The programmes are intended for students and young professionals interested in practical AI and digital skills."],
              ["Will I work on projects?", "The proposed learning approach includes hands-on exercises and practical project work."],
              ["How do I get programme details?", "Submit the enquiry form and indicate the programme you're interested in. The team can follow up with relevant details."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-white/10 bg-[#080D1C] p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {question}
                    <span className="text-xl text-violet-300 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-violet-300">
              <Sparkles className="size-4" /> Start your journey
            </span>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Your next big idea could start with <span className="text-violet-300">AI.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-400">
              Tell us what you want to learn. Submit your details to express
              interest in a programme and explore your next learning step.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-3"><CheckCircle2 className="size-5 text-emerald-400" /> Choose a programme that interests you</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="size-5 text-emerald-400" /> Share your learning goals</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="size-5 text-emerald-400" /> Request more programme information</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#11182A] p-6 shadow-2xl sm:p-9">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto size-16 text-emerald-400" />
                <h3 className="mt-6 text-2xl font-bold">Enquiry received!</h3>
                <p className="mt-3 leading-relaxed text-slate-400">
                  Thank you, {form.name}. Your demo enquiry has been captured
                  in this page's temporary state. No information has been
                  sent to a server.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl bg-violet-500 px-6 py-3 font-bold"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold">Enquire about a programme</h3>
                <p className="mt-2 text-sm text-slate-400">Fill in your details and tell us what you'd like to learn.</p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Full name</label>
                    <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Enter your full name" className="w-full rounded-xl border border-white/10 bg-[#080D1C] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Email address</label>
                    <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-[#080D1C] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Phone number</label>
                    <input required type="tel" pattern="[0-9+() -]{8,18}" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Your contact number" className="w-full rounded-xl border border-white/10 bg-[#080D1C] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Programme interest</label>
                      <select value={form.programme} onChange={(e) => update("programme", e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#080D1C] px-3 py-3 text-sm text-white outline-none focus:border-violet-400">
                        {programmes.map((p) => <option key={p.title}>{p.title}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Experience level</label>
                      <select value={form.experience} onChange={(e) => update("experience", e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#080D1C] px-3 py-3 text-sm text-white outline-none focus:border-violet-400">
                        <option>Beginner</option>
                        <option>Some experience</option>
                        <option>Experienced</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">What would you like to learn? (Optional)</label>
                    <textarea rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your goals..." className="w-full resize-none rounded-xl border border-white/10 bg-[#080D1C] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" />
                  </div>

                  <button type="submit" className="w-full rounded-xl bg-violet-500 px-6 py-4 font-bold transition hover:bg-violet-400">
                    Submit Enquiry <ArrowRight className="ml-2 inline size-5" />
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Prototype form only. Details are not transmitted or stored.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#060A14]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="font-bold">AI Skills Studio</p>
            <p className="mt-1 text-xs text-slate-500">Learn · Build · Grow</p>
          </div>
          <p className="text-xs text-slate-500">A concept landing-page prototype for practical AI education.</p>
          <a href="#home" className="text-sm font-semibold text-violet-300">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
