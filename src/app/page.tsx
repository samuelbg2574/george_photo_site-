import { brand } from "@/config/brand";

export default function Home() {
  return (
    <main>
      {/* Hero — replace with cloned/designed hero component */}
      <section className="py-(--spacing-section-xl) px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {brand.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {brand.meta.description}
          </p>
        </div>
      </section>

      {/* Sections — vary padding intentionally */}
      <section className="py-(--spacing-section-md) px-6 bg-muted">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">About</h2>
        </div>
      </section>

      <section className="py-(--spacing-section-lg) px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Services</h2>
        </div>
      </section>

      <section className="py-(--spacing-section-sm) px-6 bg-muted">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Contact</h2>
        </div>
      </section>
    </main>
  );
}
