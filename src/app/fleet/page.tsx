"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CarCard from "@/components/CarCard";
import Reveal from "@/components/Reveal";
import { cars } from "@/data/cars";
import { cn } from "@/lib/utils";

const categories = ["All", "Economy", "Sedan", "SUV", "Hatchback", "Hybrid"];

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCars =
    activeCategory === "All"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Our Fleet"
        title="Cars available for rent in Karachi"
        subtitle="Browse our complete fleet of rental vehicles. From fuel efficient hatchbacks to powerful SUVs, we have the right car for every trip and budget."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter fleet by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                  activeCategory === cat
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-navy-100 text-navy-600 hover:bg-navy-200 hover:text-navy-900"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm text-navy-500">
            Showing {filteredCars.length}{" "}
            {filteredCars.length === 1 ? "car" : "cars"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car, i) => (
              <Reveal key={car.id} delay={Math.min(i, 5) * 60} className="h-full">
                <CarCard car={car} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
