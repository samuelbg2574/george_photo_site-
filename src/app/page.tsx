"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { brand } from "@/config/brand";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ShutterButton, FlowButton, LineButton } from "@/components/ui/photo-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { collections } from "@/data/collections";

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
    <section className="relative min-h-screen flex flex-col justify-end pb-8 sm:pb-16 px-4 sm:px-6 overflow-hidden">
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
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 sm:mb-5">Fine Art Photography</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight text-foreground">
            Light &amp;<br />
            <em className="italic">the spaces</em><br />
            between
          </h1>
          <p className="mt-4 sm:mt-8 text-sm sm:text-base text-foreground/75 max-w-sm font-light leading-relaxed">
            Landscapes and long exposures. The quiet moments most people walk past. Based in London, shooting everywhere.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <ShutterButton href="#work">View the work</ShutterButton>
            <LineButton href="/about" className="text-accent hover:text-foreground">About George →</LineButton>
          </div>
        </div>

        <div className="mt-8 sm:mt-16 flex items-center gap-4">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs tracking-[0.25em] uppercase text-accent">Scroll</span>
        </div>
      </div>
    </section>
  );
}

const AR: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
};

// ─── Linked collection tile ───────────────────────────────────────────────────
function CollectionTile({ slug, src, alt, ratio, title, category }: {
  slug: string; src: string; alt: string; ratio: string; title: string; category: string;
}) {
  return (
    <Link href={`/work/${slug}`} className="block group">
      <div className={`${AR[ratio]} relative overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Warm grey overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
        {/* View collection label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <span className="text-xs tracking-[0.25em] uppercase text-foreground border border-foreground/50 px-4 py-2 bg-background/70 backdrop-blur-sm">
            View collection
          </span>
        </div>
      </div>
      <div className="mt-3 flex justify-between items-baseline">
        <p className="font-heading text-lg font-light group-hover:text-secondary transition-colors duration-200">{title}</p>
        <p className="text-xs tracking-widest uppercase text-muted-foreground">{category}</p>
      </div>
    </Link>
  );
}

// ─── Work section ─────────────────────────────────────────────────────────────
function Work() {
  const [c0, c1, c2, c3, c4, c5, c6] = collections;

  return (
    <section id="work" className="py-8 sm:py-12 md:py-(--spacing-section-lg) px-4 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">

        {/* Header — reveals from below */}
        <ScrollReveal direction="up" delay={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0 mb-8 sm:mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-2 sm:mb-3">Selected work</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">Portfolio</h2>
          </div>
          <LineButton href="/services" className="hidden md:inline-flex">
            Fine art prints →
          </LineButton>
        </ScrollReveal>

        {/* Asymmetric 12-col grid — each tile has its own scroll reveal */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4">

          <div className="col-span-2 md:col-span-7 flex flex-col gap-3 md:gap-4">
            <ScrollReveal direction="up" delay={0.05}>
              <CollectionTile slug={c0.slug} src={c0.coverSrc} alt={c0.title} ratio={c0.coverRatio} title={c0.title} category={c0.category} />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.12}>
              <CollectionTile slug={c6.slug} src={c6.coverSrc} alt={c6.title} ratio={c6.coverRatio} title={c6.title} category={c6.category} />
            </ScrollReveal>
          </div>

          <div className="col-span-2 md:col-span-5 flex flex-col gap-3 md:gap-4">
            <ScrollReveal direction="up" delay={0.1}>
              <CollectionTile slug={c1.slug} src={c1.coverSrc} alt={c1.title} ratio={c1.coverRatio} title={c1.title} category={c1.category} />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <CollectionTile slug={c3.slug} src={c3.coverSrc} alt={c3.title} ratio={c3.coverRatio} title={c3.title} category={c3.category} />
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.08} className="col-span-1 md:col-span-4">
            <CollectionTile slug={c2.slug} src={c2.coverSrc} alt={c2.title} ratio={c2.coverRatio} title={c2.title} category={c2.category} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} className="col-span-1 md:col-span-5">
            <CollectionTile slug={c4.slug} src={c4.coverSrc} alt={c4.title} ratio={c4.coverRatio} title={c4.title} category={c4.category} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.16} className="col-span-2 md:col-span-3">
            <CollectionTile slug={c5.slug} src={c5.coverSrc} alt={c5.title} ratio={c5.coverRatio} title={c5.title} category={c5.category} />
          </ScrollReveal>

        </div>

        <ScrollReveal direction="up" delay={0.1} className="mt-12 text-center">
          <FlowButton href="/services">Inquire about prints</FlowButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Divider quote ────────────────────────────────────────────────────────────
function DividerImage() {
  return (
    <div className="w-full h-[45vh] sm:h-[50vh] md:h-[60vh] relative overflow-hidden">
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
    <section id="contact" className="py-8 sm:py-12 md:py-(--spacing-section-lg) px-4 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">

          {/* Left copy */}
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3 sm:mb-6">Contact</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-8">
              Let&apos;s make<br />
              <em className="italic">something real</em>
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Whether it&apos;s a print, a commission, or just a question, I&apos;d love to hear from you. I reply to everything personally.
            </p>

            <div className="mt-6 sm:mt-12 space-y-4">
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

            <div className="mt-6 sm:mt-10 flex gap-6">
              {["Instagram", "Behance", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">{s}</a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="md:col-span-6 md:col-start-7">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
