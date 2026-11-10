
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ArrowLeft, BrainCircuit, Search, Lightbulb,
  PenTool, Palette, ShieldCheck, CalendarDays, Copy,
  CheckCircle2, Sparkles, ChevronRight, Bot, Layers,
  Target, Zap, Eye, FileText
} from "lucide-react";

export const Route = createFileRoute("/content-workflow")({
  head: () => ({
    meta: [
      { title: "AI Content Studio | Content Creation Workflow" },
      {
        name: "description",
        content:
          "Explore an AI-powered content creation workflow with reusable prompts, human review and a practical social media carousel.",
      },
    ],
  }),
  component: ContentWorkflowPage,
});

const steps = [
  {
    number: "01",
    title: "Research",
    description: "Understand the audience, identify their challenges and discover relevant content opportunities.",
    tool: "ChatGPT",
    output: "Audience insights and topic research",
    icon: Search,
    color: "text-blue-400",
  },
  {
    number: "02",
    title: "Ideation",
    description: "Generate content themes, creative angles, hooks and campaign ideas.",
    tool: "ChatGPT",
    output: "Content ideas and hooks",
    icon: Lightbulb,
    color: "text-amber-400",
  },
  {
    number: "03",
    title: "Copywriting",
    description: "Create clear, engaging slide copy, captions and calls to action.",
    tool: "ChatGPT",
    output: "Carousel script and caption",
    icon: PenTool,
    color: "text-purple-400",
  },
  {
    number: "04",
    title: "Visual design",
    description: "Transform the approved content into consistent, readable social media visuals.",
    tool: "Canva",
    output: "Designed carousel slides",
    icon: Palette,
    color: "text-pink-400",
  },
  {
    number: "05",
    title: "Quality review",
    description: "Check factual accuracy, spelling, readability, visual consistency and brand tone.",
    tool: "Human + AI review",
    output: "Approved content",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    number: "06",
    title: "Publishing",
    description: "Prepare platform-specific captions and schedule approved content.",
    tool: "Meta Business Suite / LinkedIn",
    output: "Scheduled social post",
    icon: CalendarDays,
    color: "text-orange-400",
  },
];

const prompts = [
  {
    title: "Research prompt",
    purpose: "Understand the target audience",
    prompt:
      "Act as a content strategist. Our audience is college students who want to learn practical AI skills. Identify their common learning challenges, interests and five useful content opportunities. Keep suggestions practical and beginner-friendly.",
  },
  {
    title: "Ideation prompt",
    purpose: "Generate carousel concepts",
    prompt:
      "Generate 10 engaging social media carousel ideas for college students learning AI. For each idea provide a strong opening hook, the audience problem it solves and a practical takeaway. Avoid exaggerated claims.",
  },
  {
    title: "Writing prompt",
    purpose: "Create slide-by-slide copy",
    prompt:
      "Write a seven-slide Instagram carousel titled '7 Practical Ways Students Can Use AI to Study Smarter'. Use one clear idea per slide, concise language, practical examples and a useful final call to action. Do not encourage academic dishonesty.",
  },
  {
    title: "Review prompt",
    purpose: "Improve content quality",
    prompt:
      "Review this carousel for factual accuracy, clarity, spelling, repetitive points, readability and responsible AI usage. Identify unsupported claims and suggest concise improvements. Do not invent facts.",
  },
];

const slides = [
  {
    label: "COVER",
    eyebrow: "THE STUDENT AI PLAYBOOK",
    title: "Study smarter.\nNot harder.",
    body: "7 practical ways to use AI as your learning partner.",
    footer: "SWIPE TO EXPLORE →",
    number: "01",
  },
  {
    label: "LEARN",
    eyebrow: "01 / UNDERSTAND",
    title: "Make complex\nconcepts simple.",
    body: "Ask AI to explain difficult topics in beginner-friendly language, then request examples and analogies.",
    footer: "Understand the concept first.",
    number: "02",
  },
  {
    label: "PRACTISE",
    eyebrow: "02 / TEST YOURSELF",
    title: "Turn notes into\nquick quizzes.",
    body: "Generate practice questions from your notes. Attempt them without looking at the answers.",
    footer: "Active recall builds understanding.",
    number: "03",
  },
  {
    label: "REVISE",
    eyebrow: "03 / SAVE TIME",
    title: "Summarise your\nstudy material.",
    body: "Convert lengthy notes into key points, definitions and revision checklists. Verify important details against your source.",
    footer: "Review the original material too.",
    number: "04",
  },
  {
    label: "PREPARE",
    eyebrow: "04 / BUILD CONFIDENCE",
    title: "Practise interview\nquestions.",
    body: "Ask AI to simulate an interview, ask one question at a time and explain how to improve your answers.",
    footer: "Practise. Reflect. Improve.",
    number: "05",
  },
  {
    label: "PLAN",
    eyebrow: "05 / STAY CONSISTENT",
    title: "Build a study\nplan that works.",
    body: "Share your subjects, available time and goals. Generate a realistic weekly plan with revision breaks.",
    footer: "Adapt the plan as you progress.",
    number: "06",
  },
  {
    label: "TAKE ACTION",
    eyebrow: "YOUR NEXT STEP",
    title: "Use AI as a\nlearning partner.",
    body: "Think critically, check the answers and bring your own ideas. AI should support your learning, not replace it.",
    footer: "SAVE THIS POST • SHARE WITH A FRIEND",
    number: "07",
  },
];

const tools = [
  { name: "ChatGPT", role: "Research, ideation, writing and review", type: "AI assistant" },
  { name: "Canva", role: "Carousel layouts, typography and visual design", type: "Design" },
  { name: "Meta Business Suite", role: "Plan and schedule approved Instagram and Facebook posts", type: "Publishing" },
  { name: "LinkedIn", role: "Publish professional educational content", type: "Distribution" },
];

function ContentWorkflowPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [copied, setCopied] = useState<number | null>(null);

  const slide = slides[activeSlide];

  async function copyPrompt(index: number) {
    try {
      await navigator.clipboard.writeText(prompts[index].prompt);
      setCopied(index);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  }

  function previousSlide() {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  }

  function nextSlide() {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="min-h-screen bg-[#080B19] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080B19]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/content-workflow" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600">
              <BrainCircuit size={24} />
            </div>
            <div>
              <div className="font-bold">AI Content Studio</div>
              <div className="text-[10px] tracking-[0.25em] text-violet-300">CREATE • REVIEW • GROW</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#prompts" className="hover:text-white">AI Prompts</a>
            <a href="#carousel" className="hover:text-white">Sample Carousel</a>
            <a href="#tools" className="hover:text-white">Tools</a>
          </nav>
          <a href="#carousel" className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-500">
            Explore carousel <ArrowRight className="ml-2 inline" size={16} />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-700/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              <Sparkles size={16} /> AI-POWERED CONTENT CREATION
            </div>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight md:text-7xl">
              From an idea to
              <span className="block bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
                impactful content.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              A repeatable AI-assisted workflow to research, create, design, review and publish useful educational content.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#workflow" className="rounded-xl bg-violet-600 px-6 py-4 font-semibold hover:bg-violet-500">
                Explore the workflow <ArrowRight className="ml-2 inline" size={18} />
              </a>
              <a href="#carousel" className="rounded-xl border border-white/15 px-6 py-4 font-semibold hover:bg-white/5">
                View sample carousel
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-400">
              <div><strong className="block text-2xl text-white">06</strong> Workflow stages</div>
              <div><strong className="block text-2xl text-white">04</strong> Reusable prompts</div>
              <div><strong className="block text-2xl text-white">07</strong> Carousel slides</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#11182C] p-7 shadow-2xl shadow-violet-950/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">YOUR CONTENT PIPELINE</p>
                <h2 className="mt-1 text-xl font-bold">Idea to publication</h2>
              </div>
              <div className="rounded-xl bg-violet-500/15 p-3 text-violet-300"><Bot size={28} /></div>
            </div>
            <div className="mt-8 space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4">
                    <div className={`rounded-xl bg-white/5 p-3 ${step.color}`}><Icon size={21} /></div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold">{step.title}</div>
                      <div className="text-xs text-slate-500">{step.tool}</div>
                    </div>
                    <CheckCircle2 size={18} className={index === 4 ? "text-emerald-400" : "text-violet-400"} />
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-center text-xs text-slate-500">Human review remains essential before publishing.</p>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-violet-300">THE PROCESS</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">A clear workflow.<br />Better content.</h2>
          <p className="mt-5 leading-7 text-slate-400">Each stage has a defined purpose, tool and deliverable. AI speeds up repetitive tasks while human judgement guides the final result.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="rounded-2xl border border-white/10 bg-[#11182C] p-7 transition hover:-translate-y-1 hover:border-violet-400/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-violet-300">{step.number}</span>
                  <Icon size={25} className={step.color} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">{step.description}</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Tool</p>
                  <p className="mt-1 text-sm font-semibold text-violet-200">{step.tool}</p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">Deliverable</p>
                  <p className="mt-1 text-sm text-slate-300">{step.output}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="prompts" className="border-y border-white/10 bg-[#0D1223] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-violet-300">REUSABLE PROMPT LIBRARY</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Prompts that make<br />the process repeatable.</h2>
            <p className="mt-5 text-slate-400">Use these prompts as starting points. Add your audience, platform, tone and campaign context before running them.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {prompts.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-[#11182C] p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200">{item.title}</span>
                  <button onClick={() => copyPrompt(index)} className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs hover:bg-white/5">
                    {copied === index ? <CheckCircle2 size={15} /> : <Copy size={15} />}
                    {copied === index ? "Copied" : "Copy prompt"}
                  </button>
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.purpose}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.prompt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="carousel" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-violet-300">SAMPLE CONTENT OUTPUT</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">A carousel, ready to explore.</h2>
          <p className="mt-5 leading-7 text-slate-400">Sample campaign: practical AI study tips for college students. Navigate through the seven slides to preview the story.</p>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-[470px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-violet-300/20 bg-gradient-to-br from-[#29205B] via-[#151C3B] to-[#0B1020] p-8 shadow-2xl shadow-violet-950/40 md:p-10">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-violet-300/20" />
              <div className="absolute -right-7 -top-7 h-44 w-44 rounded-full border border-violet-300/20" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.22em] text-violet-200">AI SKILLS STUDIO</span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs">{slide.number} / 07</span>
                </div>
                <div className="mt-auto">
                  <p className="mb-5 text-xs font-bold tracking-[0.22em] text-cyan-300">{slide.eyebrow}</p>
                  <h3 className="whitespace-pre-line text-5xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">{slide.title}</h3>
                  <p className="mt-7 max-w-sm text-base leading-7 text-slate-300">{slide.body}</p>
                  <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-5">
                    <span className="text-[10px] font-bold tracking-widest text-violet-200">{slide.footer}</span>
                    <span className="text-2xl text-violet-300">✳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button onClick={previousSlide} className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm hover:bg-white/5">
                <ArrowLeft size={17} /> Previous
              </button>
              <div className="flex items-center gap-2">
                {slides.map((item, index) => (
                  <button
                    key={item.number}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-7 bg-violet-400" : "w-2.5 bg-slate-600"}`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-500">
                Next <ArrowRight size={17} />
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">Slide {activeSlide + 1} of {slides.length} • Interactive preview</p>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-[#11182C] p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/15 p-3 text-violet-300"><FileText size={22} /></div>
                <div>
                  <h3 className="font-bold">Campaign caption</h3>
                  <p className="text-xs text-slate-500">Instagram / LinkedIn sample</p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-slate-300">
                AI can be more than a chatbot. It can become your study partner. From simplifying difficult topics to generating practice quizzes and building realistic study plans, the right prompts can make learning more active and organised.
                <br /><br />
                Swipe through these seven practical ideas, try one today, and remember: verify the information and do your own thinking.
                <br /><br />
                Which AI study tip will you try first?
              </p>
              <p className="mt-5 text-sm text-violet-300">#AIForStudents #StudySmarter #AIEducation #LearningWithAI</p>
            </div>
            <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
              <div className="flex items-center gap-3 text-emerald-300">
                <ShieldCheck size={22} />
                <h3 className="font-bold">Responsible AI checklist</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>✓ Verify factual claims before publishing.</li>
                <li>✓ Avoid presenting AI-generated answers as guaranteed facts.</li>
                <li>✓ Use original examples and clear language.</li>
                <li>✓ Review accessibility, contrast and readability.</li>
                <li>✓ Obtain human approval before scheduling.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="border-y border-white/10 bg-[#0D1223] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold tracking-[0.2em] text-violet-300">TOOLS & AUTOMATION</p>
          <h2 className="mt-4 text-4xl font-bold">The right tool for each stage.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#11182C] p-6">
                <div className="rounded-xl bg-violet-500/15 p-3 text-violet-300"><Layers size={22} /></div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-bold">{tool.name}</h3>
                    <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-400">{tool.type}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{tool.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-500/5 p-7">
            <div className="flex items-center gap-3">
              <Zap className="text-violet-300" size={23} />
              <h3 className="text-lg font-bold">Where automation helps</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-300">
              Reusable prompt templates speed up research and drafting. A content calendar helps organise deadlines. Approved posts can be scheduled through publishing tools. Human review remains a required checkpoint before anything goes live. This prototype demonstrates the workflow; it does not connect to external publishing APIs or automatically publish content.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row">
        <div>
          <p className="font-bold text-white">AI Content Studio</p>
          <p className="mt-1">A practical demonstration of AI-assisted content creation.</p>
        </div>
        <a href="#top" className="hover:text-white">Back to top ↑</a>
      </footer>
    </div>
  );
}
