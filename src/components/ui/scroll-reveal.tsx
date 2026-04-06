"use client";

// Scroll reveal animation — adapted from 21st.dev Scroll Animation component.
// Uses framer-motion whileInView with blur + opacity + directional slide.
// Framer-motion is already in the project stack (generation.lock.json).

import { motion, HTMLMotionProps, Variant } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Direction = "up" | "down" | "left" | "right";

function buildVariants(direction: Direction): { hidden: Variant; visible: Variant } {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "right" || direction === "down" ? 40 : -40;

  return {
    hidden: {
      filter: "blur(8px)",
      opacity: 0,
      [axis]: value,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      [axis]: 0,
    },
  };
}

const defaultViewport = { amount: 0.15, margin: "0px 0px -80px 0px", once: true };

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  viewport?: { amount?: number; margin?: string; once?: boolean };
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      className,
      direction = "up",
      delay = 0,
      duration = 0.6,
      viewport = defaultViewport,
      ...rest
    },
    ref
  ) => {
    const variants = buildVariants(direction);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: variants.hidden,
          visible: {
            ...variants.visible,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.1, 0.25, 1],
            },
          },
        }}
        className={cn(className)}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";
