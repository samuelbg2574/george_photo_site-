"use client";

import { cn } from "@/lib/utils";
import React from "react";

// ─── Flow Fill Button (adapted from 21st.dev Flow Hover Button) ──────────────
// On hover: dark fill sweeps in from bottom-right corner, text inverts.
export function FlowButton({
  children,
  className,
  href,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base = cn(
    "relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden",
    "border border-foreground/25 px-7 py-3",
    "text-xs tracking-[0.2em] uppercase font-medium text-foreground",
    "transition-all duration-500",
    // The fill circle — starts offscreen bottom-right, expands to cover on hover
    "before:absolute before:inset-0 before:-z-10",
    "before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]",
    "before:rounded-full before:bg-foreground",
    "before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
    "before:content-['']",
    "hover:text-background hover:border-foreground",
    "hover:before:translate-x-0 hover:before:translate-y-0",
    "active:scale-[0.98]",
    className
  );

  if (href) {
    return (
      <a href={href} className={base}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// ─── Shutter Button — hero CTA ───────────────────────────────────────────────
// Mimics a camera shutter: two panels slide in from top and bottom to fill.
export function ShutterButton({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const base = cn(
    "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden",
    "border border-foreground/30 px-10 py-4",
    "text-xs tracking-[0.25em] uppercase font-medium text-foreground",
    "transition-colors duration-300",
    "hover:text-background hover:border-foreground",
    className
  );

  const inner = (
    <>
      {/* Top shutter blade */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:translate-y-0"
      />
      {/* Bottom shutter blade */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:translate-y-0"
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return <a href={href} className={base}>{inner}</a>;
  }

  return (
    <button onClick={onClick} className={base}>
      {inner}
    </button>
  );
}

// ─── Ghost Line Button — subtle nav / secondary actions ─────────────────────
// A fine underline that draws from left on hover.
export function LineButton({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const base = cn(
    "group relative inline-flex cursor-pointer items-center gap-2",
    "text-xs tracking-[0.2em] uppercase text-muted-foreground",
    "transition-colors duration-200 hover:text-foreground",
    className
  );

  const inner = (
    <>
      {children}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full"
      />
    </>
  );

  if (href) return <a href={href} className={base}>{inner}</a>;
  return <button onClick={onClick} className={base}>{inner}</button>;
}
