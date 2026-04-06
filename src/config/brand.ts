/**
 * Brand token configuration — the ONLY file that changes per client.
 */

export const brand = {
  name: "2728 Photos",
  slug: "george-photographer",
  niche: "portfolio",

  colors: {
    primary: "#D4C7C7",
    secondary: "#9A8B8B",
    accent: "#5C4F4F",
    background: "#FFFFFF",
    foreground: "#1C1A1A",
  },

  fonts: {
    heading: "Cormorant Garamond",
    body: "DM Sans",
  },

  contact: {
    email: "2728photos@gmail.com",
    phone: "07534 667455",
  },

  meta: {
    title: "2728 Photos — Fine Art Photography",
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
