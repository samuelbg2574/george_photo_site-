"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { brand } from "@/config/brand";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ShutterButton, FlowButton, LineButton } from "@/components/ui/photo-button";

const IMAGES = {
  hero:    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=85",
  work1:   "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80",
  work2:   "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
  work3:   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  work4:   "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80",
  work5:   "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
  work6:   "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80",
  divider: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=85",
};

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-6 overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="Golden-hour landscape"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Light overlay — keeps the warm grey tone over the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-5">Fine Art Photography</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] font-light leading-none tracking-tight text-foreground">
            Light &amp;<br />
            <em className="italic">the spaces</em><br />
            between
          </h1>
          <p className="mt-8 text-base text-muted-foreground max-w-sm font-light leading-relaxed">
            Landscapes, long exposures, and the quiet moments that go unnoticed. Based worldwide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ShutterButton href="#work">View the work</ShutterButton>
            <LineButton href="/about">About George →</LineButton>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Scroll</span>
        </div>
      </div>
    </section>
  );
}

// ─── Work image tile ─────────────────────────────────────────────────────────
function WorkImage({ src, alt, ratio }: { src: keyof typeof IMAGES; alt: string; ratio: string }) {
  const AR: Record<string, string> = {
    landscape: "aspect-[4/3]",
    portrait:  "aspect-[3/4]",
    square:    "aspect-square",
  };
  return (
    <div className={`${AR[ratio]} relative overflow-hidden group cursor-pointer`}>
      <Image
        src={IMAGES[src]}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Warm grey wash on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
    </div>
  );
}

const works = [
  { title: "Patagonia, 2024",   category: "Landscape",     src: "work1" as const, ratio: "landscape" },
  { title: "Iceland Series",    category: "Long Exposure",  src: "work2" as const, ratio: "portrait"  },
  { title: "Dolomites at Dawn", category: "Mountain",       src: "work3" as const, ratio: "landscape" },
  { title: "Namib Desert",      category: "Aerial",         src: "work4" as const, ratio: "square"    },
  { title: "Norwegian Fjords",  category: "Seascape",       src: "work5" as const, ratio: "landscape" },
  { title: "Atacama",           category: "Astro",          src: "work6" as const, ratio: "portrait"  },
];

// ─── Work section ─────────────────────────────────────────────────────────────
function Work() {
  return (
    <section id="work" className="py-(--spacing-section-lg) px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3">Selected work</p>
            <h2 className="font-heading text-5xl md:text-6xl font-light">Portfolio</h2>
          </div>
          <LineButton href="/services" className="hidden md:inline-flex">
            Fine art prints →
          </LineButton>
        </div>

        {/* Asymmetric 12-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">

          <div className="col-span-2 md:col-span-7">
            <WorkImage src={works[0].src} alt={works[0].title} ratio={works[0].ratio} />
            <div className="mt-3 flex justify-between items-baseline">
              <p className="font-heading text-lg font-light">{works[0].title}</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[0].category}</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-5 flex flex-col gap-3 md:gap-4">
            <div>
              <WorkImage src={works[1].src} alt={works[1].title} ratio={works[1].ratio} />
              <div className="mt-3 flex justify-between items-baseline">
                <p className="font-heading text-base font-light">{works[1].title}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[1].category}</p>
              </div>
            </div>
            <div>
              <WorkImage src={works[3].src} alt={works[3].title} ratio={works[3].ratio} />
              <div className="mt-3 flex justify-between items-baseline">
                <p className="font-heading text-base font-light">{works[3].title}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{works[3].category}</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4">
            <WorkImage src={works[2].src} alt={works[2].title} ratio={works[2].ratio} />
            <div className="mt-3"><p className="font-heading text-base font-light">{works[2].title}</p></div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <WorkImage src={works[4].src} alt={works[4].title} ratio={works[4].ratio} />
            <div className="mt-3"><p className="font-heading text-base font-light">{works[4].title}</p></div>
          </div>
          <div className="col-span-2 md:col-span-3">
            <WorkImage src={works[5].src} alt={works[5].title} ratio={works[5].ratio} />
            <div className="mt-3"><p className="font-heading text-base font-light">{works[5].title}</p></div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <FlowButton href="/services">Inquire about prints</FlowButton>
        </div>
      </div>
    </section>
  );
}

// ─── Divider quote ────────────────────────────────────────────────────────────
function DividerImage() {
  return (
    <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
      <Image
        src={IMAGES.divider}
        alt="Wide landscape panorama"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Light scrim to keep warm grey tone */}
      <div className="absolute inset-0 bg-background/25" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-(--spacing-section-lg) px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-16">

          {/* Left copy */}
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">Contact</p>
            <h2 className="font-heading text-5xl md:text-6xl font-light leading-tight mb-8">
              Let&apos;s make<br />
              <em className="italic">something real</em>
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Whether you&apos;re after a print, planning a shoot, or interested in a workshop —
              reach out. Every enquiry gets a personal reply.
            </p>

            <div className="mt-12 space-y-4">
              {[
                { label: "Email",         value: brand.contact.email,    href: `mailto:${brand.contact.email}` },
                { label: "Phone",         value: brand.contact.phone,    href: `tel:${brand.contact.phone.replace(/\s/g,"")}` },
                { label: "Based in",      value: "London & wherever the light is", href: undefined },
                { label: "Response time", value: "Within 48 hours",      href: undefined },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-sm font-light hover:text-secondary transition-colors">{item.value}</a>
                    : <p className="text-sm font-light">{item.value}</p>
                  }
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-6">
              {["Instagram", "Behance", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">{s}</a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="md:col-span-6 md:col-start-7">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Name</label>
                  <input type="text" placeholder="Your name"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</label>
                  <input type="email" placeholder="your@email.com"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Enquiry type</label>
                <select className="w-full bg-muted border border-border px-4 py-3 text-sm font-light text-muted-foreground focus:outline-none focus:border-secondary transition-colors appearance-none">
                  <option value="">Select…</option>
                  <option value="print">Fine art print</option>
                  <option value="commercial">Commercial project</option>
                  <option value="workshop">Workshop booking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Message</label>
                <textarea rows={5} placeholder="Tell me about your project…"
                  className="w-full bg-muted border border-border px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors resize-none" />
              </div>

              <FlowButton type="submit" className="w-full justify-center py-4">
                Send enquiry
              </FlowButton>
            </form>
          </div>

        </div>
      </div>
    </section>
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
        <DividerImage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
