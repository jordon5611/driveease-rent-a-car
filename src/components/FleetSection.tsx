"use client";

import { useState } from "react";
import { cars } from "@/data/cars";
import { site } from "@/lib/site";
import CarCard from "./CarCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const categories = ["All", "Economy", "Sedan", "SUV", "Hatchback", "Hybrid"];

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCars =
    activeCategory === "All"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
    <section className="bg-white py-20 sm:py-24" id="fleet">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Fleet"
            title="Pick the car that fits your trip"
            subtitle={`Over ${site.fleetSize.replace("+", "")} well maintained vehicles across the models below, available for rent all over Karachi. From budget hatchbacks to premium SUVs.`}
          />
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
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
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car, i) => (
            <Reveal key={car.id} delay={Math.min(i, 5) * 60} className="h-full">
              <CarCard car={car} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
