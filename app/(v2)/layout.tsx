import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastLane Dispatch — Truck dispatch for owner operators & small fleets",
  description:
    "A dedicated dispatcher finds, negotiates and books your loads, then handles the paperwork and broker calls. You drive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
