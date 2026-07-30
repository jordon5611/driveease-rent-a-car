import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { fleetSchemaGraph, ogImage } from "@/lib/seo";
import { cars } from "@/data/cars";
import FleetGrid from "./FleetGrid";

const title = "Our Fleet | Cars Available for Rent in Karachi";
const shareDescription = `Browse all ${cars.length} rental cars available in Karachi. Economy, sedan, SUV, hatchback and hybrid options for daily, weekly and monthly rental.`;

export const metadata: Metadata = {
  title,
  description: `Browse all ${cars.length} rental cars available in Karachi, including Toyota Corolla, Fortuner, Revo, Prius, Vitz, Yaris, Aqua, Honda Civic, Suzuki Alto and JAC T9. Economy, sedan, SUV, hatchback and hybrid options.`,
  alternates: { canonical: "/fleet" },
  openGraph: {
    url: "/fleet",
    title,
    description: shareDescription,
    images: [ogImage],
  },
  twitter: { title, description: shareDescription, images: [ogImage.url] },
};

export default function FleetPage() {
  return (
    <main>
      <JsonLd schema={fleetSchemaGraph} />
      <Navbar />

      <PageHero
        eyebrow="Our Fleet"
        title="Cars available for rent in Karachi"
        subtitle="Browse our complete fleet of rental vehicles. From fuel efficient hatchbacks to powerful SUVs, we have the right car for every trip and budget."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FleetGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
