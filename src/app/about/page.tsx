import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ShutterButton, LineButton } from "@/components/ui/photo-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const IMAGES = {
  portrait:  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=85",
  landscape1:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  behind:    "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
};

export const metadata = {
  title: "About — 2728 Photos",
  description: "The story behind 2728 Photos — fine art landscape photography.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 sm:pt-28">

        {/* ── Page header ─────────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 pb-8 sm:pb-16 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3 sm:mb-5">About</p>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-none tracking-tight">
                  Chasing light<br />
                  <em className="italic">across continents</em>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ── Portrait + opening bio ───────────────────────────────────────── */}
        <section className="py-8 sm:py-12 md:py-(--spacing-section-lg) px-4 sm:px-6">
          <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-6 sm:gap-12 md:gap-0 items-start">

            <ScrollReveal direction="up" delay={0} className="md:col-span-4">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={IMAGES.portrait}
                  alt="George — 2728 Photos"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-border pt-4 sm:pt-6">
                {[
                  { value: "10+", label: "Years shooting" },
                  { value: "40+", label: "Countries" },
                  { value: "6",   label: "Continents" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-2xl sm:text-3xl font-light">{stat.value}</p>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Bio — offset down to break symmetry */}
            <ScrollReveal direction="up" delay={0.15} className="md:col-span-6 md:col-start-6 md:pt-16">
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                <p className="text-foreground text-base sm:text-lg font-light font-heading italic leading-snug">
                  &ldquo;I don&rsquo;t take photographs. I wait for them.&rdquo;
                </p>
                <p>
                  I&apos;m George — the photographer behind 2728 Photos. I specialise in fine art
                  landscape and seascape photography, drawn to the moments between light and
                  dark that most people sleep through: the hour before dawn on a Patagonian
                  glacier, the last sliver of sun breaking beneath Icelandic cloud cover,
                  the silence of a desert at 3am.
                </p>
                <p>
                  I began shooting seriously a decade ago after leaving a career in architecture.
                  The compositional training transferred — I see landscapes the way an architect
                  sees a building: as a problem of structure, proportion, and what to leave out.
                </p>
                <p>
                  Today my work is held in private collections across the UK, Europe, and the
                  United States. I shoot on medium format digital and a rotating selection of
                  film cameras, printed to museum archival standards in limited editions of ten.
                </p>
                <p>
                  I&apos;m based in London but rarely there.
                </p>
              </div>

              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <ShutterButton href="/services">Work with me</ShutterButton>
                <LineButton href="/#contact">Get in touch →</LineButton>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ── Full-bleed image break ───────────────────────────────────────── */}
        <div className="w-full h-[40vh] sm:h-[50vh] md:h-[55vh] relative overflow-hidden">
          <Image
            src={IMAGES.landscape1}
            alt="Atmospheric landscape"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>

        {/* ── Philosophy section ───────────────────────────────────────────── */}
        <section className="py-8 sm:py-12 md:py-(--spacing-section-xl) px-4 sm:px-6 bg-muted">
          <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-8 md:gap-16">
            <ScrollReveal direction="up" delay={0} className="md:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3 sm:mb-6">Philosophy</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                Stillness<br />
                <em className="italic">is the work</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="md:col-span-6 md:col-start-7 space-y-4 sm:space-y-5 text-sm font-light leading-relaxed text-muted-foreground">
              <p>
                The camera is the last step in a long process. Before I press the shutter
                I&apos;ve typically spent weeks researching a location: studying the topography,
                the seasonal light, the weather patterns. I arrive days before the shot I&apos;m
                after, to understand the place on its own terms.
              </p>
              <p>
                The result is work that doesn&apos;t look accidental — because it isn&apos;t. Every
                print carries the weight of that preparation. When you hang a 2728 Photos
                print, you&apos;re not hanging a lucky moment. You&apos;re hanging a decision.
              </p>
              <p>
                I edit conservatively. The goal is to make the image look like what I
                experienced standing there — not what a camera would record, which is
                always a poor approximation of human perception.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Behind the lens ──────────────────────────────────────────────── */}
        <section className="py-8 sm:py-12 md:py-(--spacing-section-md) px-4 sm:px-6">
          <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-6 sm:gap-8 items-start md:items-center">
            <ScrollReveal direction="left" delay={0} className="md:col-span-5 md:col-start-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={IMAGES.behind}
                  alt="Behind the lens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p className="mt-2 sm:mt-3 text-xs tracking-widest uppercase text-muted-foreground">
                Iceland, November 2023
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15} className="md:col-span-4 md:col-start-8 space-y-3 sm:space-y-5">
              <p className="text-xs tracking-[0.3em] uppercase text-secondary">Equipment</p>
              <div className="space-y-3">
                {[
                  { item: "Primary",   spec: "Fujifilm GFX 100S II — 102MP medium format" },
                  { item: "Secondary", spec: "Hasselblad X2D 100C" },
                  { item: "Film",      spec: "Mamiya RB67 Pro-S / Kodak Portra 800" },
                  { item: "Printing",  spec: "Hahnemühle Photo Rag 308gsm, giclée" },
                  { item: "Editions",  spec: "10 per image. No reprints after sell-out." },
                ].map((row) => (
                  <div key={row.item} className="flex gap-4 border-b border-border pb-3 last:border-0">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground w-24 shrink-0 pt-0.5">{row.item}</p>
                    <p className="text-sm font-light">{row.spec}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA strip ───────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 border-t border-border">
          <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl font-light">Ready to work together?</h3>
              <p className="text-sm text-muted-foreground mt-2 font-light">Prints, commissions, workshops — let&apos;s talk.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <ShutterButton href="/services">See services</ShutterButton>
              <LineButton href="/#contact">Inquire now →</LineButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
