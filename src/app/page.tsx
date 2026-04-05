"use client";

import { useEffect, useRef, useState } from "react";
import { brand } from "@/config/brand";

// ─── Placeholder image component ───────────────────────────────────────────
// Swap these out for real <Image> components once photography assets are ready
function PhotoPlaceholder({
  className,
  label,
  aspectRatio = "landscape",
}: {
  className?: string;
  label?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
}) {
  const ar = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  }[aspectRatio];

  return (
    <div
      className={`${ar} bg-muted flex items-end overflow-hidden relative group ${className ?? ""}`}
    >
      {/* Subtle grain texture via SVG filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
        <filter id={`grain-${label}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${label})`} />
      </svg>
      {label && (
        <span className="relative z-10 p-3 text-xs tracking-widest uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      )}
    </div>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 border-b border-border/50 backdrop-blur-sm bg-background/80" : "py-7"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-heading text-xl tracking-[0.15em] uppercase text-foreground hover:text-secondary transition-colors"
        >
          {brand.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a
            href="#contact"
            className="text-foreground border border-border px-5 py-2 hover:border-secondary hover:text-secondary transition-all"
          >
            Inquire
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block h-px w-4 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 pt-6 pb-8 text-sm tracking-widest uppercase text-muted-foreground border-t border-border/50 mt-4">
          <a href="#work" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Inquire</a>
        </nav>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-6">
      {/* Full-bleed background image placeholder */}
      <div className="absolute inset-0 bg-muted">
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none">
          <filter id="grain-hero">
            <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-hero)" />
        </svg>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Image credit placeholder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
        <p className="text-xs tracking-widest uppercase text-border">Hero image</p>
        <p className="text-xs text-border/60 mt-1">Replace with full-bleed photograph</p>
      </div>

      {/* Hero text */}
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-5">
            Fine Art Photography
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] font-light leading-none tracking-tight text-foreground">
            Light &<br />
            <em className="italic">the spaces</em><br />
            between
          </h1>
          <p className="mt-8 text-base text-muted-foreground max-w-sm font-light leading-relaxed">
            Landscapes, long exposures, and the quiet moments that go unnoticed.
            Based worldwide.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Scroll</span>
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio grid ──────────────────────────────────────────────────────────
function Work() {
  const works = [
    { id: 1, title: "Patagonia, 2024", category: "Landscape", ratio: "landscape" as const },
    { id: 2, title: "Iceland Series", category: "Long Exposure", ratio: "portrait" as const },
    { id: 3, title: "Dolomites at Dawn", category: "Mountain", ratio: "landscape" as const },
    { id: 4, title: "Namib Desert", category: "Aerial", ratio: "square" as const },
    { id: 5, title: "Norwegian Fjords", category: "Seascape", ratio: "landscape" as const },
    { id: 6, title: "Atacama", category: "Astro", ratio: "portrait" as const },
    { id: 7, title: "Scottish Highlands", category: "Landscape", ratio: "landscape" as const },
  ];

  return (
    <section id="work" className="py-(--spacing-section-lg) px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header — asymmetric */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3">Selected work</p>
            <h2 className="font-heading text-5xl md:text-6xl font-light">Portfolio</h2>
          </div>
          <a
            href="#contact"
            className="hidden md:block text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-border hover:border-secondary"
          >
            View all series →
          </a>
        </div>

        {/* Asymmetric grid — breaks visual symmetry */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">

          {/* Large featured image */}
          <div className="col-span-2 md:col-span-7 group cursor-pointer">
            <PhotoPlaceholder aspectRatio={works[0].ratio} label={works[0].title} />
            <div className="mt-3 flex justify-between items-baseline">
              <p className="font-heading text-lg font-light">{works[0].title}</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[0].category}</p>
            </div>
          </div>

          {/* Stacked pair */}
          <div className="col-span-2 md:col-span-5 flex flex-col gap-3 md:gap-4">
            <div className="group cursor-pointer">
              <PhotoPlaceholder aspectRatio={works[1].ratio} label={works[1].title} />
              <div className="mt-3 flex justify-between items-baseline">
                <p className="font-heading text-base font-light">{works[1].title}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[1].category}</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <PhotoPlaceholder aspectRatio={works[3].ratio} label={works[3].title} />
              <div className="mt-3 flex justify-between items-baseline">
                <p className="font-heading text-base font-light">{works[3].title}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[3].category}</p>
              </div>
            </div>
          </div>

          {/* Bottom row — 3 columns of different widths */}
          <div className="col-span-1 md:col-span-4 group cursor-pointer">
            <PhotoPlaceholder aspectRatio={works[2].ratio} label={works[2].title} />
            <div className="mt-3">
              <p className="font-heading text-base font-light">{works[2].title}</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5 group cursor-pointer">
            <PhotoPlaceholder aspectRatio={works[4].ratio} label={works[4].title} />
            <div className="mt-3">
              <p className="font-heading text-base font-light">{works[4].title}</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 group cursor-pointer">
            <PhotoPlaceholder aspectRatio={works[5].ratio} label={works[5].title} />
            <div className="mt-3">
              <p className="font-heading text-base font-light">{works[5].title}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-(--spacing-section-xl) px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric layout — portrait offset */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-0 items-start">

          {/* Portrait — intentionally not full-width */}
          <div className="md:col-span-4 md:col-start-1">
            <PhotoPlaceholder aspectRatio="portrait" label="George — portrait" />
          </div>

          {/* Text — offset down on desktop */}
          <div className="md:col-span-6 md:col-start-6 md:pt-24">
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">About</p>
            <h2 className="font-heading text-5xl md:text-6xl font-light leading-tight mb-8">
              Chasing light<br />
              <em className="italic">across continents</em>
            </h2>
            <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m George — a fine art photographer specialising in landscapes, seascapes,
                and the fleeting quality of light in remote places. For the past decade I&apos;ve
                travelled to some of the world&apos;s most extreme environments with a single
                purpose: to wait.
              </p>
              <p>
                My work is about stillness. Long exposures that compress time, compositions
                that hold tension between earth and sky, and the discipline of being present
                in difficult places long enough for something to happen.
              </p>
              <p>
                Prints are available in limited editions. I also take on commercial landscape
                commissions and exclusive travel workshops.
              </p>
            </div>

            {/* Stats — break up the text block */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { value: "10+", label: "Years shooting" },
                { value: "40+", label: "Countries" },
                { value: "6", label: "Continents" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-light text-foreground">{stat.value}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      index: "01",
      title: "Fine Art Prints",
      description:
        "Museum-quality archival prints, limited to 10 editions per image. Signed, numbered, and shipped in custom packaging. Sizes from 30×40cm to 120×160cm.",
      cta: "Browse editions",
    },
    {
      index: "02",
      title: "Commercial Work",
      description:
        "Editorial, travel brand, and tourism campaigns. I've worked with destinations across six continents. Let's discuss your project.",
      cta: "Discuss a brief",
    },
    {
      index: "03",
      title: "Workshops",
      description:
        "Intimate 4-person expeditions to Iceland, Patagonia, and the Scottish Highlands. Learn composition, long exposure, and editing in the field.",
      cta: "See upcoming dates",
    },
  ];

  return (
    <section id="services" className="py-(--spacing-section-md) px-6 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-0 mb-16">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3">Services</p>
            <h2 className="font-heading text-5xl md:text-6xl font-light">
              How we<br />
              <em className="italic">work together</em>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px border border-border">
          {services.map((service) => (
            <div
              key={service.index}
              className="p-8 md:p-10 border-border group hover:bg-background/50 transition-colors duration-300 cursor-pointer"
            >
              <p className="text-xs tracking-widest uppercase text-secondary mb-6">{service.index}</p>
              <h3 className="font-heading text-2xl font-light mb-5">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <span className="text-xs tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors border-b border-border group-hover:border-secondary pb-0.5">
                {service.cta} →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Full-bleed divider image ─────────────────────────────────────────────────
function DividerImage() {
  return (
    <div className="w-full h-[50vh] md:h-[65vh] bg-muted relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none">
        <filter id="grain-divider">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-divider)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-xs tracking-widest uppercase text-border/50">Full-bleed photograph — replace with real image</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-(--spacing-section-lg) px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-16">

          {/* Left — copy */}
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">Contact</p>
            <h2 className="font-heading text-5xl md:text-6xl font-light leading-tight mb-8">
              Let&apos;s make<br />
              <em className="italic">something real</em>
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Whether you&apos;re after a print, planning a shoot, or interested in a workshop —
              reach out. I reply to every enquiry personally.
            </p>

            <div className="mt-12 space-y-4">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                <p className="text-sm font-light">hello@george.photo</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Based in</p>
                <p className="text-sm font-light">London & wherever the light is</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Response time</p>
                <p className="text-sm font-light">Within 48 hours</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 flex gap-6">
              {["Instagram", "Behance", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-6 md:col-start-7">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                  Subject
                </label>
                <select className="w-full bg-muted border border-border px-4 py-3 text-sm font-light text-muted-foreground focus:outline-none focus:border-secondary transition-colors appearance-none">
                  <option value="">Select an enquiry type</option>
                  <option value="print">Fine art print</option>
                  <option value="commercial">Commercial project</option>
                  <option value="workshop">Workshop booking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-foreground/30 px-6 py-4 text-xs tracking-widest uppercase hover:border-secondary hover:text-secondary transition-all duration-300 font-medium"
              >
                Send enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-base tracking-[0.15em] uppercase">
          {brand.name}
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} George. All rights reserved.
        </p>
        <div className="flex gap-8">
          {["Privacy", "Licensing", "Sitemap"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <DividerImage />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
