import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Used for headings via the `font-display` Tailwind family.
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const title =
  "Rent a Car in Karachi | Affordable Car Rental Service | Elite Motors Karachi";
const description =
  "Rent a car in Karachi from Elite Motors Karachi's fleet of 120+ vehicles. Toyota Corolla, Fortuner, Revo, Civic, Prius and more, daily, weekly or monthly, self drive or with driver, plus airport pick up and drop off. Call +92 300 2589489.";

export const metadata: Metadata = {
  // Makes every relative URL below, plus the icon and OG image files that Next
  // discovers in this folder, resolve to the real domain.
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "rent a car karachi",
    "car rental karachi",
    "car hire karachi",
    "cheap car rental karachi",
    "car on rent in karachi",
    "self drive car rental karachi",
    "car rental service karachi pakistan",
    "monthly car rental karachi",
    "daily car rental karachi",
    "rent a car karachi with driver",
    "airport pick and drop karachi",
    "rent a car karachi airport",
    "wedding car rental karachi",
    "corporate car rental karachi",
    "toyota corolla on rent karachi",
    "fortuner on rent karachi",
    "prius on rent karachi",
    "elite motors karachi",
    "rent a car pakistan",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Car Rental",
  // No formatDetection here on purpose: Next writes `telephone=no` for every key
  // it is given regardless of the value, which would stop iOS turning the phone
  // number into a tap to call link. The default behaviour is what we want.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      className={cn("font-sans", inter.variable, display.variable)}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content={site.city} />
      </head>
      <body className="antialiased">
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
