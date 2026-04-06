"use client";

/**
 * ServicesParallax
 * ─────────────────────────────────────────────────────────────────────────────
 * Scroll-driven parallax stack for the Services page.
 *
 * Each service section is split into two layers:
 *   1. STICKY IMAGE  — full-bleed, stays top:0 while the user scrolls through
 *      the section's scroll budget. The image scales slightly (1 → 1.06) while
 *      sticky, then shrinks back (→ 0.92) as the next section takes over.
 *      The service number + title overlays float upward via a separate
 *      `translateY` transform so they appear to drift through the frame.
 *
 *   2. CONTENT BLOCK — sits directly below the sticky container. Slides up
 *      from `y:80` and fades in once 30 % of it enters the viewport.
 *
 * Layout maths
 * ─────────────
 * Each ServiceSection wrapper is min-h-[200vh]:
 *   • First ~100 vh = sticky image is visible
 *   • Remaining ~100 vh = content block scrolls in under the image
 *
 * Built with: Next.js 16, React 19, TypeScript strict,
 *             Tailwind CSS v4, Framer Motion 12.
 */

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ShutterButton } from "@/components/ui/photo-button";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceDetail {
  label: string;
  value: string;
}

interface ServiceData {
  index: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  body: string[];
  details: ServiceDetail[];
  cta: string;
  ctaHref: string;
}

interface ServicesParallaxProps {
  services: ServiceData[];
  className?: string;
}

// ─── Single section ──────────────────────────────────────────────────────────

function ServiceSection({
  service,
  sectionIndex,
}: {
  service: ServiceData;
  sectionIndex: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll progress scoped to this section wrapper
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    // Start when the section top hits the viewport top;
    // end when the section bottom leaves the viewport top.
    offset: ["start start", "end start"],
  });

  // ── Image scale: 1 while entering → 1.06 at mid-scroll → 0.92 as it leaves
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [1, 1.06, 0.92]
  );

  // ── Image opacity: full → slight fade as it exits
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85, 1],
    [1, 1, 0.75, 0.55]
  );

  // ── Title parallax: drifts upward faster than the scroll rate
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 0.85],
    [1, 1, 0.6, 0]
  );

  // ── Content slide-in (InView)
  const isContentVisible = useInView(contentRef, {
    once: true,
    amount: 0.25,
  });

  return (
    <div
      ref={wrapperRef}
      // 200 vh gives ~100 vh of sticky + ~100 vh of content scroll budget
      // Reduced on mobile to prevent excessive scrolling
      className="relative min-h-[150vh] md:min-h-[200vh]"
    >
      {/* ── 1. STICKY IMAGE ──────────────────────────────────────────────── */}
      <div className="sticky top-0 h-[70vh] md:h-screen overflow-hidden">
        {/* Scaled / fading image layer */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ scale: imageScale, opacity: imageOpacity }}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority={sectionIndex === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* Subtle dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/50" />
        </motion.div>

        {/* Floating title overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none px-6"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: sectionIndex * 0.1,
            }}
            className="text-center space-y-3 sm:space-y-4"
          >
            {/* Service number */}
            <p
              className="text-xs sm:text-sm font-body tracking-[0.4em] uppercase text-background/70"
              aria-hidden="true"
            >
              {service.index}
            </p>

            {/* Service title */}
            <h2 className="font-heading text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-light italic leading-none tracking-tight text-background">
              {service.title}
            </h2>

            {/* Tagline */}
            <p className="font-heading text-base sm:text-lg md:text-xl font-light italic text-background/80 max-w-lg mx-auto">
              {service.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 2. CONTENT BLOCK ─────────────────────────────────────────────── */}
      <motion.div
        ref={contentRef}
        className="relative z-20 bg-background"
        initial={{ opacity: 0, y: 80 }}
        animate={
          isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
        }
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          {/* Section label row */}
          <div className="flex items-baseline gap-4 mb-6 sm:mb-8">
            <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-body">
              {service.index}
            </span>
            <span className="flex-1 h-px bg-border" aria-hidden="true" />
          </div>

          {/* Title reprise (smaller) */}
          <h3
            className={cn(
              "font-heading text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4"
            )}
          >
            {service.title}
          </h3>
          <p className="font-heading italic text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12">
            {service.tagline}
          </p>

          {/* Body copy */}
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base font-body font-light leading-relaxed text-muted-foreground max-w-2xl mb-10 sm:mb-14">
            {service.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5 border-t border-border pt-8 sm:pt-10 mb-10 sm:mb-14">
            {service.details.map((row) => (
              <div key={row.label}>
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-1">
                  {row.label}
                </p>
                <p className="text-sm sm:text-base font-body font-light">
                  {row.value}
                </p>
              </div>
            ))}
          </div>

          <ShutterButton href={service.ctaHref}>{service.cta}</ShutterButton>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────

export function ServicesParallax({
  services,
  className,
}: ServicesParallaxProps) {
  return (
    <div className={cn("relative bg-background", className)}>
      {services.map((service, i) => (
        <ServiceSection key={service.index} service={service} sectionIndex={i} />
      ))}
    </div>
  );
}
