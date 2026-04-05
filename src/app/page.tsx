"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { brand } from "@/config/brand";

// ─── Scenic Unsplash images ──────────────────────────────────────────────────
const IMAGES = {
  hero:     "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=85",
  work1:    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80", // Patagonia mountains
  work2:    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80", // Iceland waterfall
  work3:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80", // Dolomites
  work4:    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80", // Namib desert
  work5:    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80", // Norwegian fjords
  work6:    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80", // Atacama / night sky
  portrait: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",  // Photographer portrait
  divider:  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=85", // Full-bleed landscape
};

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

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block h-px w-4 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

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
      <Image
        src={IMAGES.hero}
        alt="Dramatic golden-hour landscape"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

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

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Scroll</span>
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio grid ──────────────────────────────────────────────────────────
const works = [
  { title: "Patagonia, 2024",    category: "Landscape",     src: "work1", ratio: "landscape" },
  { title: "Iceland Series",     category: "Long Exposure", src: "work2", ratio: "portrait"  },
  { title: "Dolomites at Dawn",  category: "Mountain",      src: "work3", ratio: "landscape" },
  { title: "Namib Desert",       category: "Aerial",        src: "work4", ratio: "square"    },
  { title: "Norwegian Fjords",   category: "Seascape",      src: "work5", ratio: "landscape" },
  { title: "Atacama",            category: "Astro",         src: "work6", ratio: "portrait"  },
] as const;

const AR: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
};

function WorkImage({
  src,
  alt,
  ratio,
}: {
  src: keyof typeof IMAGES;
  alt: string;
  ratio: string;
}) {
  return (
    <div className={`${AR[ratio]} relative overflow-hidden group cursor-pointer`}>
      <Image
        src={IMAGES[src]}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-(--spacing-section-lg) px-6">
      <div className="mx-auto max-w-7xl">
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

        {/* Asymmetric 12-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">

          <div className="col-span-2 md:col-span-7">
            <WorkImage src="work1" alt={works[0].title} ratio={works[0].ratio} />
            <div className="mt-3 flex justify-between items-baseline">
              <p className="font-heading text-lg font-light">{works[0].title}</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[0].category}</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-5 flex flex-col gap-3 md:gap-4">
            <div>
              <WorkImage src="work2" alt={works[1].title} ratio={works[1].ratio} />
              <div className="mt-3 flex justify-between items-baseline">
                <p className="font-heading text-base font-light">{works[1].title}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[1].category}</p>
              </div>
            </div>
            <div>
              <WorkImage src="work4" alt={works[3].title} ratio={works[3].ratio} />
              <div className="mt-3 flex justify-between items-baseline">
                <p className="font-heading text-base font-light">{works[3].title}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[3].category}</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4">
            <WorkImage src="work3" alt={works[2].title} ratio={works[2].ratio} />
            <div className="mt-3">
              <p className="font-heading text-base font-light">{works[2].title}</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <WorkImage src="work5" alt={works[4].title} ratio={works[4].ratio} />
            <div className="mt-3">
              <p className="font-heading text-base font-light">{works[4].title}</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3">
            <WorkImage src="work6" alt={works[5].title} ratio={works[5].ratio} />
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
        <div className="grid md:grid-cols-12 gap-12 md:gap-0 items-start">

          <div className="md:col-span-4 md:col-start-1">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src={IMAGES.portrait}
                alt="George — photographer portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

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

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { value: "10+", label: "Years shooting" },
                { value: "40+", label: "Countries" },
                { value: "6",   label: "Continents" },
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

// ─── Full-bleed divider image ─────────────────────────────────────────────────
function DividerImage() {
  return (
    <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
      <Image
        src={IMAGES.divider}
        alt="Wide landscape panorama"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
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

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-(--spacing-section-lg) px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-16">

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
              {[
                { label: "Email",         value: "hello@george.photo" },
                { label: "Based in",      value: "London & wherever the light is" },
                { label: "Response time", value: "Within 48 hours" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-light">{item.value}</p>
                </div>
              ))}
            </div>

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

          <div className="md:col-span-6 md:col-start-7">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Subject</label>
                <select className="w-full bg-muted border border-border px-4 py-3 text-sm font-light text-muted-foreground focus:outline-none focus:border-secondary transition-colors appearance-none">
                  <option value="">Select an enquiry type</option>
                  <option value="print">Fine art print</option>
                  <option value="commercial">Commercial project</option>
                  <option value="workshop">Workshop booking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Message</label>
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
        <p className="font-heading text-base tracking-[0.15em] uppercase">{brand.name}</p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} George. All rights reserved.</p>
        <div className="flex gap-8">
          {["Privacy", "Licensing", "Sitemap"].map((link) => (
            <a key={link} href="#" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
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
