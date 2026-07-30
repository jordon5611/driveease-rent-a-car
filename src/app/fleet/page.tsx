"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

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

      <section className="bg-navy py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Cars Available for Rent in Karachi
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Browse our complete fleet of rental vehicles in Karachi. From fuel
            efficient hatchbacks to powerful SUVs, we have the right car for every
            trip and budget.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-amber text-navy shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
