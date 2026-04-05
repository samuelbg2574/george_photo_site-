import type { Metadata } from "next";
import { brand } from "@/config/brand";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: brand.meta.title,
  description: brand.meta.description,
  openGraph: {
    title: brand.meta.title,
    description: brand.meta.description,
    images: [brand.meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
