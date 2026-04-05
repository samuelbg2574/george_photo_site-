/**
 * Brand token configuration — the ONLY file that changes per client.
 * The scaffold script replaces these placeholders with real values.
 */

export const brand = {
  name: "George",
  slug: "george-photographer",
  niche: "portfolio",

  colors: {
    primary: "#f5f0eb",
    secondary: "#c9b99a",
    accent: "#8c7355",
    background: "#0a0a09",
    foreground: "#f5f0eb",
  },

  fonts: {
    heading: "Cormorant Garamond",
    body: "DM Sans",
  },

  meta: {
    title: "George",
    description: "Fine art photography — landscapes, light, and the spaces between",
    ogImage: "/og-image.png",
  },

  socials: {
    twitter: "",
    linkedin: "",
    instagram: "",
  },
} as const;

export type Brand = typeof brand;
