import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ShutterButton } from "@/components/ui/photo-button";
import { ServicesParallax } from "@/components/services-parallax";
import { brand } from "@/config/brand";
import Image from "next/image";

const IMAGES = {
  prints:     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
  commercial: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
  workshop:   "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80",
  hero:       "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=85",
};

export const metadata = {
  title: "Services — 2728 Photos",
  description:
    "Fine art prints, commercial commissions, and photography workshops with 2728 Photos.",
};

const services = [
  {
    index: "01",
    title: "Fine Art Prints",
    tagline: "Own a piece of the world.",
    image: IMAGES.prints,
    imageAlt: "Dolomites at dawn — fine art print",
    body: [
      "Every print in the 2728 Photos collection is produced on Hahnemühle Photo Rag 308gsm using archival pigment inks with a rated life of 200+ years. Each image is edition-limited to ten — once they sell out, they do not return.",
      "Sizes range from 30×40cm (intimate, desk or shelf display) up to 120×160cm (statement wall pieces). All prints are hand-signed, numbered, and shipped in a bespoke flat-pack tube with a certificate of authenticity.",
      "Custom sizes are available on request. Framing consultations can be arranged for London-based clients.",
    ],
    details: [
      { label: "Editions",   value: "10 per image — no reprints" },
      { label: "Paper",      value: "Hahnemühle Photo Rag 308gsm" },
      { label: "Inks",       value: "Archival pigment — 200yr rated" },
      { label: "Sizes",      value: "30×40cm → 120×160cm" },
      { label: "Delivery",   value: "Worldwide, fully insured" },
      { label: "Lead time",  value: "10–14 working days" },
    ],
    cta: "Browse the collection",
    ctaHref: "/#work",
  },
  {
    index: "02",
    title: "Commercial Work",
    tagline: "Landscape photography for brands that care about quality.",
    image: IMAGES.commercial,
    imageAlt: "Commercial landscape photography",
    body: [
      "I work with tourism boards, travel brands, outdoor companies, and editorial clients who need landscape photography that stands apart from stock. If the brief requires a specific location, time of year, or conditions — I'll plan the expedition to get it.",
      "Past clients include destination marketing organisations, hotel groups, adventure travel companies, and print magazines. Licensing is bespoke; I don't use one-size-fits-all rates. Get in touch with your brief and I'll send a tailored proposal within 48 hours.",
      "Usage rights, exclusivity windows, and raw vs. edited deliverables are all negotiable. My preference is always to understand the campaign first.",
    ],
    details: [
      { label: "Output",      value: "Full-res TIFF + web JPEG" },
      { label: "Licensing",   value: "Bespoke — usage + territory" },
      { label: "Turnaround",  value: "Agreed per project" },
      { label: "Location",    value: "Worldwide" },
      { label: "Response",    value: "Proposal within 48 hrs" },
      { label: "Exclusivity", value: "Available on request" },
    ],
    cta: "Send a brief",
    ctaHref: "/#contact",
  },
  {
    index: "03",
    title: "Workshops",
    tagline: "Learn to see the way a landscape photographer sees.",
    image: IMAGES.workshop,
    imageAlt: "Iceland photography workshop",
    body: [
      "I run small-group expeditions — maximum four participants — to Iceland, Patagonia, and the Scottish Highlands. Three to seven days in the field, built around the specific light conditions of each destination. No lectures. No classrooms. You learn by doing, with me next to you.",
      "The curriculum covers location scouting, reading weather for photography, long-exposure technique, composition principles drawn from my architectural background, and a post-processing session on the final evening. All skill levels are welcome; the only requirement is that you're serious about improving.",
      "Workshops sell out quickly. Join the waitlist and I'll notify you when the next dates are confirmed.",
    ],
    details: [
      { label: "Group size", value: "Maximum 4 participants" },
      { label: "Duration",   value: "3–7 days" },
      { label: "Locations",  value: "Iceland · Patagonia · Scotland" },
      { label: "Includes",   value: "Accommodation + field guiding" },
      { label: "Skill level",value: "All levels welcome" },
      { label: "Booking",    value: "Waitlist — limited dates" },
    ],
    cta: "Join the waitlist",
    ctaHref: "/#contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 sm:pt-28">

        {/* ── Page header ───────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 pb-8 sm:pb-16 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-3 sm:mb-5">
                  Services
                </p>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-none tracking-tight">
                  How we
                  <br />
                  <em className="italic">work together</em>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ── Parallax service sections ─────────────────────────────────── */}
        <ServicesParallax services={services} />

        {/* ── Full-bleed quote image ────────────────────────────────────── */}
        <div className="w-full h-[35vh] sm:h-[40vh] md:h-[45vh] relative overflow-hidden">
          <Image
            src={IMAGES.hero}
            alt="Wide landscape"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-heading text-xl sm:text-3xl md:text-5xl font-light text-background text-center px-4 sm:px-6">
              &ldquo;The photograph is the proof
              <br />
              <em>that I was patient enough.&rdquo;</em>
            </p>
          </div>
        </div>

        {/* ── Contact strip ─────────────────────────────────────────────── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-7xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl font-light">
                Not sure which fits?
              </h3>
              <p className="text-sm text-muted-foreground mt-2 font-light">
                Drop me a message and we&apos;ll figure it out together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start sm:items-center">
              <ShutterButton href="/#contact">Get in touch</ShutterButton>
              <a
                href={`mailto:${brand.contact.email}`}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5"
              >
                {brand.contact.email}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
