import Image from "next/image";
import { notFound } from "next/navigation";
import { collections, getCollection } from "@/data/collections";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ShutterButton, LineButton } from "@/components/ui/photo-button";
import { ScrollRevealGrid } from "@/components/work-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Generate static params for all collections
export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: `${collection.title} — 2728 Photos`,
    description: collection.description,
  };
}

const AR: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
};

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  // Find prev / next collections for navigation
  const idx = collections.findIndex((c) => c.slug === slug);
  const prev = collections[idx - 1] ?? null;
  const next = collections[idx + 1] ?? null;

  return (
    <>
      <Nav />
      <main className="pt-28">

        {/* ── Collection header ───────────────────────────────────────── */}
        <section className="px-6 pb-14 border-b border-border">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <ScrollReveal direction="up" delay={0}>
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground mb-8">
                <a href="/#work" className="hover:text-foreground transition-colors">Work</a>
                <span>/</span>
                <span className="text-foreground">{collection.title}</span>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-12 gap-8 items-end">
              <ScrollReveal direction="up" delay={0.05} className="md:col-span-7">
                <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4">{collection.category} · {collection.year}</p>
                <h1 className="font-heading text-6xl md:text-8xl font-light leading-none tracking-tight">
                  {collection.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1} className="md:col-span-4 md:col-start-9">
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>
                <p className="mt-2 text-xs tracking-widest uppercase text-muted-foreground">
                  {collection.images.length} photographs
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Cover image — full bleed ────────────────────────────────── */}
        <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
          <Image
            src={collection.coverSrc}
            alt={collection.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
        </div>

        {/* ── Intro text ──────────────────────────────────────────────── */}
        <section className="py-(--spacing-section-md) px-6 border-b border-border">
          <div className="mx-auto max-w-7xl grid md:grid-cols-12">
            <ScrollReveal direction="up" delay={0} className="md:col-span-7 md:col-start-4">
              <p className="font-heading text-2xl md:text-3xl font-light italic text-muted-foreground leading-relaxed">
                {collection.intro}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Image grid with scroll reveal ───────────────────────────── */}
        <ScrollRevealGrid images={collection.images} />

        {/* ── Print enquiry CTA ───────────────────────────────────────── */}
        <section className="py-(--spacing-section-md) px-6 bg-muted border-t border-border">
          <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-8 items-center">
            <ScrollReveal direction="up" delay={0} className="md:col-span-6">
              <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4">Limited editions</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light leading-tight">
                Own a print<br />
                <em className="italic">from this series</em>
              </h2>
              <p className="mt-5 text-sm font-light text-muted-foreground leading-relaxed max-w-sm">
                Prints from the {collection.title} series are available in limited editions of ten.
                Museum archival quality, hand-signed and numbered.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ShutterButton href="/#contact">Enquire about prints</ShutterButton>
                <LineButton href="/services">See all editions →</LineButton>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.08} className="md:col-span-4 md:col-start-9">
              <div className="space-y-3 border-t border-border pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-8">
                {[
                  { label: "Paper",    value: "Hahnemühle Photo Rag 308gsm" },
                  { label: "Inks",     value: "Archival pigment — 200yr rated" },
                  { label: "Editions", value: "10 per image — no reprints" },
                  { label: "Sizes",    value: "30×40cm to 120×160cm" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground w-20 shrink-0 pt-0.5">{row.label}</p>
                    <p className="text-sm font-light">{row.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Prev / Next collection navigation ───────────────────────── */}
        <nav className="border-t border-border grid grid-cols-2">
          {prev ? (
            <a
              href={`/work/${prev.slug}`}
              className="group flex flex-col gap-2 p-8 md:p-12 border-r border-border hover:bg-muted transition-colors"
            >
              <span className="text-xs tracking-widest uppercase text-muted-foreground group-hover:text-secondary transition-colors">← Previous</span>
              <span className="font-heading text-xl md:text-2xl font-light">{prev.title}</span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">{prev.category}</span>
            </a>
          ) : (
            <div />
          )}
          {next ? (
            <a
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-2 p-8 md:p-12 text-right hover:bg-muted transition-colors"
            >
              <span className="text-xs tracking-widest uppercase text-muted-foreground group-hover:text-secondary transition-colors">Next →</span>
              <span className="font-heading text-xl md:text-2xl font-light">{next.title}</span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">{next.category}</span>
            </a>
          ) : (
            <div />
          )}
        </nav>

      </main>
      <Footer />
    </>
  );
}
