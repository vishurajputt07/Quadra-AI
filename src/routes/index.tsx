import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Cpu,
  Github,
  Instagram,
  LayoutTemplate,
  LineChart,
  LifeBuoy,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Send,
  Sparkles,
  Star,
  Twitter,
  Utensils,
  Wand2,
  Zap,
} from "lucide-react";

import { BrowserFrame } from "@/components/landing/BrowserFrame";
import { useReveal } from "@/hooks/use-reveal";
import engineersRestro from "@/assets/engineers-restro.jpg";
import workCafe from "@/assets/work-cafe.jpg";
import workBoutique from "@/assets/work-boutique.jpg";
import workPortfolio from "@/assets/work-portfolio.jpg";
import workSaas from "@/assets/work-saas.jpg";

export const Route = createFileRoute("/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Quadra AI — Bespoke Websites & Platforms for Modern Businesses" },
      {
        name: "description",
        content:
          "A human-led design & development studio crafting websites and platforms — from boutique cafes to full restaurant operations software like Engineers Restro.",
      },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

function Page() {
  useReveal();
  return (
    <div className="grain relative min-h-screen overflow-x-clip text-cream">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <FeaturedProject />
          <ClientStrip />
          <Services />
          <OtherWork />
          <Process />
          <WhyQuadra />
          <Testimonials />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                     */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["Pricing", "#pricing"],
    ["About", "#why"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 transition-all duration-500 md:px-6 ${
          scrolled
            ? "glass-strong shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
            : "border border-transparent"
        }`}
        style={{ width: "calc(100% - 2rem)" }}
      >
        <a href="#top" className="group flex items-center gap-2 py-3">
          <QuadraMark />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-fog transition-colors hover:text-cream"
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary group text-sm">
          Let's Talk
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function QuadraMark() {
  return (
    <span className="flex items-baseline gap-1.5 font-display text-xl font-semibold tracking-tight">
      <span className="relative">
        Quadra
        <span className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-coral" />
      </span>
      <span className="rounded-md bg-coral/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-coral">
        AI
      </span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setMouse({ x: (e.clientX / w - 0.5) * 2, y: (e.clientY / h - 0.5) * 2 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const p = (depth: number) => ({
    transform: `translate3d(${mouse.x * depth}px, ${mouse.y * depth}px, 0)`,
  });

  return (
    <section id="top" ref={ref} className="relative pt-40 pb-24 md:pt-48 md:pb-32">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-coral/25 blur-[140px]" />
        <div className="absolute right-10 top-10 h-[300px] w-[300px] rounded-full bg-amber-glow/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-fog backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Currently accepting 2 new projects for Q3
          </div>

          <h1 className="reveal mt-8 font-display text-[44px] font-semibold leading-[1.02] tracking-tight md:text-[72px] lg:text-[92px]">
            We build websites <br className="hidden md:block" />
            <span className="text-gradient-coral">& platforms</span> that make{" "}
            <em className="font-display italic font-light text-fog">businesses</em> run
            better.
          </h1>

          <p className="reveal mx-auto mt-8 max-w-2xl text-lg text-fog md:text-xl">
            A small, human-led studio designing and shipping bespoke digital products for
            cafes, restaurants, brands, and ambitious founders. No templates. No
            shortcuts. Just craft.
          </p>

          <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary group">
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" className="btn-ghost group">
              See Our Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Floating browser collage */}
        <div className="reveal relative mt-24 h-[420px] md:h-[520px]">
          <div
            className="absolute left-[4%] top-6 w-[42%] float-y"
            style={{ ...p(-14), animationDelay: "0s" }}
          >
            <div className="rotate-[-6deg] transition-transform duration-500 hover:rotate-[-3deg]">
              <BrowserFrame url="lexatique-cafe.com">
                <img src={workCafe} alt="Cafe website" className="h-56 w-full object-cover md:h-72" />
              </BrowserFrame>
            </div>
          </div>
          <div
            className="absolute right-[3%] top-0 w-[46%] float-y"
            style={{ ...p(-22), animationDelay: "1.2s" }}
          >
            <div className="rotate-[5deg] transition-transform duration-500 hover:rotate-[2deg]">
              <BrowserFrame url="engineers-restro.com">
                <img src={engineersRestro} alt="Engineers Restro" className="h-56 w-full object-cover md:h-80" />
              </BrowserFrame>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-40 w-[44%] -translate-x-1/2 float-y"
            style={{ ...p(-8), animationDelay: "0.6s" }}
          >
            <div className="transition-transform duration-500 hover:scale-[1.02]">
              <BrowserFrame url="atelier.studio">
                <img src={workBoutique} alt="Boutique website" className="h-56 w-full object-cover md:h-72" />
              </BrowserFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Featured Project — Engineers Restro                                        */
/* -------------------------------------------------------------------------- */

function FeaturedProject() {
  const pills = [
    { icon: Wand2, label: "QR-Based Ordering" },
    { icon: Cpu, label: "AI Dining Assistant" },
    { icon: Utensils, label: "Live Kitchen Dashboard" },
    { icon: LineChart, label: "Real-Time Analytics" },
  ];
  const comparisons = [
    ["Manual order-taking", "Instant digital ordering"],
    ["Printed menus & reprints", "Real-time menu updates"],
    ["End-of-day sales review", "Live business analytics"],
    ["Cash-only chaos", "Secure digital payments"],
  ];

  return (
    <section id="work" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/2 h-[500px] w-[700px] -translate-y-1/2 rounded-full bg-coral/15 blur-[160px]" />
        <div className="absolute right-0 top-20 h-[300px] w-[400px] rounded-full bg-amber-glow/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 flex items-center gap-3 text-sm text-fog">
          <Star className="h-4 w-4 text-amber-glow" />
          <span className="uppercase tracking-[0.2em]">Featured Project</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Spotlight card */}
        <div className="reveal relative rounded-[32px] p-[1.5px]">
          <div
            className="absolute inset-0 rounded-[32px] opacity-90"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.68 0.19 40) 0%, oklch(0.79 0.15 75) 40%, transparent 70%)",
            }}
          />
          <div className="relative rounded-[30px] bg-[oklch(0.14_0.005_40)] p-6 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Text */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Live
                  </span>
                  <span className="text-xs uppercase tracking-widest text-fog">
                    Restaurant Operations Platform
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
                  Engineers Restro
                </h2>
                <p className="mt-3 font-display text-xl italic font-light text-amber-glow md:text-2xl">
                  One Platform. Every Restaurant.
                </p>
                <p className="mt-6 max-w-xl text-fog md:text-lg">
                  A cloud-based restaurant operations platform for multi-location
                  businesses. QR-code ordering, an AI-powered dining assistant, live
                  kitchen dashboards, secure digital payments and real-time analytics —
                  with zero app downloads required for guests.
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {pills.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-cream/90"
                    >
                      <Icon className="h-3.5 w-3.5 text-coral" />
                      {label}
                    </span>
                  ))}
                </div>

                <a
                  href="https://qr-restaurantweb-production.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary group mt-10"
                >
                  Check It Out
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              {/* Mockup */}
              <div className="lg:order-last">
                <div className="group transition-transform duration-500 hover:rotate-[-1deg] hover:scale-[1.015]">
                  <BrowserFrame url="engineers-restro.com/dashboard">
                    <img
                      src={engineersRestro}
                      alt="Engineers Restro operations dashboard"
                      className="w-full object-cover"
                      loading="lazy"
                      width={1600}
                      height={1008}
                    />
                  </BrowserFrame>
                </div>
              </div>
            </div>

            {/* Before → After */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-fog">
                <Sparkles className="h-3.5 w-3.5 text-amber-glow" />
                Before → After
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {comparisons.map(([before, after]) => (
                  <div
                    key={before}
                    className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-xl border border-white/5 bg-black/20 px-5 py-4"
                  >
                    <span className="text-sm text-fog line-through decoration-fog/40">
                      {before}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-coral" />
                    <span className="text-sm font-medium text-cream">{after}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Client strip                                                               */
/* -------------------------------------------------------------------------- */

function ClientStrip() {
  const items = [
    "Cafes & Restaurants",
    "Small Businesses",
    "Startups",
    "Personal Brands",
    "Local Shops",
    "Studios & Ateliers",
    "Boutique Retailers",
  ];
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-white/5 bg-black/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.28em] text-fog">
          Built for the businesses shaping their neighborhoods
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee flex w-max gap-4">
            {doubled.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-cream/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

function Services() {
  const services = [
    {
      icon: LayoutTemplate,
      title: "Website Design",
      desc: "Bespoke marketing sites that look expensive, load fast, and turn casual visitors into paying customers.",
    },
    {
      icon: Code2,
      title: "Custom Platform Development",
      desc: "Full-stack products — dashboards, ordering systems, booking flows — engineered to actually run your business.",
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support & Maintenance",
      desc: "We don't disappear after launch. Content updates, uptime, and continuous improvement handled by real humans.",
    },
    {
      icon: Palette,
      title: "Branding & Visual Identity",
      desc: "Logos, colour, and type systems that give small businesses the confidence of much larger brands.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-fog">
              <span className="h-px w-8 bg-coral" />
              What we do
            </div>
            <h2 className="font-display text-4xl font-semibold md:text-6xl">
              Four disciplines. <br />
              <span className="italic font-light text-fog">One team, end to end.</span>
            </h2>
          </div>
          <p className="max-w-sm text-fog">
            We take projects from a first conversation to a shipped, supported product —
            without handing you off between agencies.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-coral/40 hover:bg-white/[0.04]"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-coral/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-coral">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-coral opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Other Work                                                                 */
/* -------------------------------------------------------------------------- */

function OtherWork() {
  const projects = [
    { name: "Lexatique Café", type: "Marketing Site", img: workCafe, url: "lexatique.co" },
    { name: "Atelier Boutique", type: "E-commerce", img: workBoutique, url: "atelier.store" },
    { name: "Kenji Portfolio", type: "Personal Site", img: workPortfolio, url: "kenji.design" },
    { name: "Anfinad Analytics", type: "SaaS Dashboard", img: workSaas, url: "anfinad.io" },
  ];

  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-fog">
              <span className="h-px w-8 bg-coral" />
              Other work
            </div>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              A quieter look at recent projects.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 text-sm text-fog transition-colors hover:text-cream md:inline-flex"
          >
            Full case studies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <a
              key={p.name}
              href="#contact"
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="btn-primary text-sm">
                    View <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-fog">{p.type}</div>
                </div>
                <span className="text-xs text-fog">{p.url}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process                                                                    */
/* -------------------------------------------------------------------------- */

function Process() {
  const steps = [
    { icon: Compass, num: "01", title: "Discovery Call", desc: "A candid conversation about your business, customers, and what a win actually looks like." },
    { icon: Palette, num: "02", title: "Design", desc: "Wireframes, moodboards, and hi-fi mockups. You see everything before a single line of code." },
    { icon: Code2, num: "03", title: "Build", desc: "Hand-crafted, performant code with weekly check-ins and a private staging environment." },
    { icon: Rocket, num: "04", title: "Launch", desc: "We ship, monitor, and stay on to iterate — most clients keep us on retainer after launch." },
  ];
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-fog">
            <span className="h-px w-8 bg-coral" />
            How we work
          </div>
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            A calm, four-week rhythm from{" "}
            <span className="italic font-light text-fog">idea to live.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[46px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map(({ icon: Icon, num, title, desc }, i) => (
              <div key={num} className="reveal relative">
                <div className="relative z-10 flex h-[92px] items-start justify-between">
                  <div className="glass-strong flex h-14 w-14 items-center justify-center rounded-2xl text-coral">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-semibold text-white/15">
                    {num}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{desc}</p>
                {i < steps.length - 1 && (
                  <div className="mt-4 hidden text-coral/60 md:hidden">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Quadra                                                                 */
/* -------------------------------------------------------------------------- */

function WhyQuadra() {
  const points = [
    { icon: Sparkles, stat: "0", label: "Templates used", desc: "Every pixel is designed for your brand from a blank canvas." },
    { icon: Zap, stat: "4 wks", label: "Typical turnaround", desc: "Small marketing sites launch inside a month — platforms in weeks not quarters." },
    { icon: LifeBuoy, stat: "24/7", label: "Post-launch support", desc: "Retainer plans keep your site fast, secure, and evolving long after go-live." },
  ];
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-[160px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-fog">
            <span className="h-px w-8 bg-coral" />
            Why Quadra AI
          </div>
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            Small studio. <span className="italic font-light text-fog">Serious craft.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, stat, label, desc }) => (
            <div
              key={label}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <Icon className="h-6 w-6 text-coral" />
              <div className="mt-8 font-display text-5xl font-semibold text-cream md:text-6xl">
                {stat}
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-amber-glow">
                {label}
              </div>
              <p className="mt-4 text-fog">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                               */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  const quotes = [
    {
      quote:
        "They didn't just build our website — they rebuilt how our restaurant runs. Orders, kitchen, analytics, all in one place.",
      name: "Priya Menon",
      business: "Owner, V- Films",
      offset: "md:mt-0",
      initial: "P",
    },
    {
      quote:
        "The site feels expensive in the best way. Bookings tripled in the first two months and it still loads faster than anything else in our category.",
      name: "Rohan Sharma",
      business: "Director, Lexatique Café",
      offset: "md:mt-12",
      initial: "R",
    },
    {
      quote:
        "The Quadra team treats deadlines like a promise. It's the first agency I've worked with that under-promises and over-delivers.",
      name: "Ananya Singh",
      business: "Founder, Atelier Boutique",
      offset: "md:mt-4",
      initial: "A",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-fog">
            <span className="h-px w-8 bg-coral" />
            Kind words
          </div>
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            What clients say <span className="italic font-light text-fog">after launch.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className={`reveal glass rounded-2xl p-7 ${q.offset}`}
            >
              <div className="mb-4 flex gap-0.5 text-amber-glow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-relaxed text-cream">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-coral to-amber-glow font-display text-sm font-semibold text-ink">
                  {q.initial}
                </div>
                <div className="text-sm">
                  <div className="font-medium">{q.name}</div>
                  <div className="text-fog">{q.business}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pricing                                                                    */
/* -------------------------------------------------------------------------- */

function Pricing() {
  const [monthly, setMonthly] = useState(false);
  const tiers = [
    {
      name: "Starter Site",
      priceOnce: "₹4,499",
      priceMonthly: "₹699",
      tag: "Cafes, personal brands, small shops",
      features: [
        "Up to 5 custom pages",
        "Mobile-first responsive design",
        "Basic SEO & analytics",
        "Contact & booking form",
        "2 weeks of post-launch support",
      ],
      highlighted: false,
    },
    {
      name: "Business Site",
      priceOnce: "₹11,999",
      priceMonthly: "₹1,099",
      tag: "Growing businesses & restaurants",
      features: [
        "Up to 12 custom pages",
        "CMS for self-service editing",
        "Booking, ordering, or menu module",
        "Advanced SEO, Analytics & performance tuning",
        "3 months of ongoing support",
      ],
      highlighted: true,
    },
    {
      name: "Custom Platform",
      priceOnce: "From ₹14,000",
      priceMonthly: "Custom",
      tag: "Multi-location & software products",
      features: [
        "Full-stack product engineering",
        "Dashboards, authentication, payments",
        "AI features & integrations",
        "Dedicated staging & CI/CD, Database, Deployment",
        "Ongoing maintenance & support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-fog">
            <span className="h-px w-8 bg-coral" />
            Pricing
            <span className="h-px w-8 bg-coral" />
          </div>
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            Clear packages. <span className="italic font-light text-fog">No mystery invoices.</span>
          </h2>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm">
            <button
              onClick={() => setMonthly(false)}
              className={`rounded-full px-4 py-1.5 transition-colors ${!monthly ? "bg-coral text-cream" : "text-fog"}`}
            >
              One-time
            </button>
            <button
              onClick={() => setMonthly(true)}
              className={`rounded-full px-4 py-1.5 transition-colors ${monthly ? "bg-coral text-cream" : "text-fog"}`}
            >
              Monthly plan
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`reveal relative rounded-2xl border p-8 ${
                t.highlighted
                  ? "border-coral/40 bg-white/[0.03] shadow-[0_40px_100px_-30px_oklch(0.68_0.19_40_/_0.4)]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-coral to-amber-glow px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                  Most Popular
                </div>
              )}
              <div className="text-sm uppercase tracking-widest text-amber-glow">
                {t.name}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="font-display text-5xl font-semibold">
                  {monthly ? t.priceMonthly : t.priceOnce}
                </div>
                {monthly && t.priceMonthly !== "Custom" && (
                  <span className="text-sm text-fog">/mo</span>
                )}
              </div>
              <p className="mt-2 text-sm text-fog">{t.tag}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral/15 text-coral">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-cream/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all ${
                  t.highlighted
                    ? "btn-primary w-full"
                    : "border border-white/15 text-cream hover:border-white/40"
                }`}
              >
                Choose {t.name} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

function FAQ() {
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Marketing sites usually go live in 3–4 weeks. Custom platforms like Engineers Restro run 8–14 weeks depending on scope. We agree on the timeline in writing before we start.",
    },
    {
      q: "How many rounds of revisions do I get?",
      a: "Two structured rounds are included on every design phase, plus a final polish pass. In practice we work collaboratively throughout, so surprises at the end are rare.",
    },
    {
      q: "Do you handle hosting, domains, and email?",
      a: "Yes. We can set everything up on world-class infrastructure (Vercel, Cloudflare, Neon) and manage it under a small monthly retainer, or hand you the keys — your call.",
    },
    {
      q: "Are there ongoing costs after launch?",
      a: "Only if you want them. Hosting typically runs $10–60/mo. Optional retainer plans start at $220/mo and cover content updates, security, and continuous improvement.",
    },
    {
      q: "Can you keep improving the site after launch?",
      a: "Absolutely — most of our clients stay on a retainer. We treat the site as a living product, shipping small improvements every month based on real analytics.",
    },
    {
      q: "Do you write the copy and take the photos too?",
      a: "We can. Copywriting is included on Business tiers and above, and we partner with trusted photographers if you need on-brand imagery.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-fog">
            <span className="h-px w-8 bg-coral" />
            Frequently asked
            <span className="h-px w-8 bg-coral" />
          </div>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Answers before you have to ask.
          </h2>
        </div>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex-1 font-display text-lg font-medium">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-coral transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-500 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="overflow-hidden text-fog">{f.a}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Final CTA                                                                  */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/25 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-amber-glow/15 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal">
          <h2 className="font-display text-4xl font-semibold leading-[1.05] md:text-7xl">
            Ready for a website that actually{" "}
            <span className="text-gradient-coral">works for your business?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-fog">
            Tell us about your project. We reply within one business day — usually faster.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:hello@quadra.ai" className="btn-primary group text-base">
              <Mail className="h-4 w-4" />
              hello@quadra.ai
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="javascript:void(0)" className="btn-ghost group text-base">
              <Send className="h-4 w-4" />
              Send a brief
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  const cols = [
    {
      title: "Services",
      links: ["Website Design", "Platform Development", "Branding", "Ongoing Support"],
    },
    {
      title: "Work",
      links: ["Engineers Restro", "Lexatique Café", "Atelier Boutique", "All projects"],
    },
    {
      title: "Company",
      links: ["About", "Process", "Pricing", "Contact"],
    },
  ];
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <QuadraMark />
          <p className="mt-4 max-w-xs text-sm text-fog">
            A human-led design & development studio, quietly making the web feel
            considered again.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-fog transition-colors hover:border-coral hover:text-coral"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="mb-4 text-xs uppercase tracking-widest text-amber-glow">
              {c.title}
            </div>
            <ul className="space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-cream/80 transition-colors hover:text-coral">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-fog md:flex-row">
          <div>© {new Date().getFullYear()} Quadra AI Studio. Crafted, not templated.</div>
          <div>hello@quadra.ai · Made with intention</div>
        </div>
      </div>
    </footer>
  );
}
