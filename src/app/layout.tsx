import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default:
      "Rent a Car Karachi | Affordable Car Rental Service in Karachi Pakistan",
    template: "%s | DriveEase Car Rental Karachi",
  },
  description:
    "DriveEase offers affordable rent a car services in Karachi, Pakistan. Choose from Toyota Corolla, Fortuner, Prius, Civic, Alto and more. Daily, weekly and monthly car rentals available with and without driver.",
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
    "toyota corolla on rent karachi",
    "fortuner on rent karachi",
    "prius on rent karachi",
    "rent a car pakistan",
    "car rental pakistan",
  ],
  authors: [{ name: "DriveEase" }],
  creator: "DriveEase",
  metadataBase: new URL("https://www.driveease.pk"),
  alternates: {
    canonical: "https://www.driveease.pk",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://www.driveease.pk",
    siteName: "DriveEase Car Rental Karachi",
    title:
      "Rent a Car Karachi | Affordable Car Rental Service in Karachi Pakistan",
    description:
      "DriveEase offers affordable rent a car services in Karachi, Pakistan. Toyota Corolla, Fortuner, Prius, Civic, Alto and more. Daily and monthly rentals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DriveEase Rent a Car Karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent a Car Karachi | DriveEase Car Rental",
    description:
      "Affordable car rental service in Karachi Pakistan. Wide fleet of cars available daily, weekly and monthly.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CarRental",
  name: "DriveEase",
  description: "Affordable car rental service in Karachi, Pakistan",
  url: "https://www.driveease.pk",
  telephone: "+92-300-2589489",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karachi",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    postalCode: "75500",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "24.8607",
    longitude: "67.0011",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },
  areaServed: {
    "@type": "City",
    name: "Karachi",
  },
  hasMap: "https://maps.google.com/?q=Karachi,Pakistan",
  sameAs: [
    "https://www.facebook.com/driveease",
    "https://www.instagram.com/driveease",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK" className={cn("font-sans", inter.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("antialiased", inter.variable)}>{children}</body>
    </html>
  );
}
