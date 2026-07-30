"use client";

import { useState } from "react";
import { cars } from "@/data/cars";
import CarCard from "./CarCard";

const categories = ["All", "Economy", "Sedan", "SUV", "Hatchback", "Hybrid"];

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCars =
    activeCategory === "All"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 bg-white" id="fleet">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Fleet
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A wide range of well maintained vehicles available for rent in Karachi
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
