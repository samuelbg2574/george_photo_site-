"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { brand } from "@/config/brand";

export function Nav() {
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
        scrolled
          ? "py-3 sm:py-4 bg-background/90 backdrop-blur-md border-b border-border"
          : "py-4 sm:py-7"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-heading text-xl tracking-[0.15em] uppercase text-foreground hover:text-secondary transition-colors duration-300"
        >
          {brand.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-muted-foreground">
          <Link href="/#work" className="hover:text-foreground transition-colors duration-200">Work</Link>
          <Link href="/about"  className="hover:text-foreground transition-colors duration-200">About</Link>
          <Link href="/services" className="hover:text-foreground transition-colors duration-200">Services</Link>
          {/* Inquire — ShutterButton inline to avoid circular import */}
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden border border-foreground/30 px-5 py-2 text-xs tracking-widest uppercase text-foreground transition-colors duration-300 hover:text-background hover:border-foreground"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-1/2 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:translate-y-0" />
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:translate-y-0" />
            <span className="relative z-10">Inquire</span>
          </Link>
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

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-6 px-6 pt-6 pb-8 text-sm tracking-widest uppercase text-muted-foreground border-t border-border mt-4">
          <Link href="/#work"    onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Work</Link>
          <Link href="/about"    onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Inquire</Link>
        </nav>
      </div>
    </header>
  );
}
