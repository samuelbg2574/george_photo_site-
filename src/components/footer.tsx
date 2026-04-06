import { brand } from "@/config/brand";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-0 mb-8 pb-8 border-b border-border">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl tracking-[0.12em] uppercase mb-3">{brand.name}</p>
            <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-[18rem]">
              {brand.meta.description}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Navigation</p>
            {[
              { label: "Work",     href: "/#work" },
              { label: "About",    href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Inquire",  href: "/#contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Contact</p>
            <a href={`mailto:${brand.contact.email}`} className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
              {brand.contact.email}
            </a>
            <a href={`tel:${brand.contact.phone.replace(/\s/g, "")}`} className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
              {brand.contact.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Licensing", "Sitemap"].map((link) => (
              <a key={link} href="#" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
