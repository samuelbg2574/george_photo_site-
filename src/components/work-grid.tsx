"use client";

import Image from "next/image";
import { CollectionImage } from "@/data/collections";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const AR: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
};

// Masonry-style grid with staggered scroll-reveal per image
export function ScrollRevealGrid({ images }: { images: CollectionImage[] }) {
  return (
    <section className="py-(--spacing-section-lg) px-6">
      <div className="mx-auto max-w-7xl">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              delay={0}          // no stagger — each reveals on its own scroll trigger
              duration={0.65}
              className="break-inside-avoid"
            >
              <div className={`${AR[img.ratio]} relative overflow-hidden group cursor-pointer`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-t from-background/70 to-transparent">
                  <p className="text-xs tracking-widest uppercase text-foreground/80">{img.alt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
