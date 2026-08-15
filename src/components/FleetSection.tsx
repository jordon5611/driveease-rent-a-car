import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cars, featuredCars } from "@/data/cars";
import { site } from "@/lib/site";
import CarCard from "./CarCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * The home page shows only the featured models so visitors reach the rest of
 * the page sooner. Browsing and filtering the full line-up happens on /fleet.
 */
export default function FleetSection() {
  return (
    <section className="bg-navy-950 py-20 sm:py-24" id="fleet">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Fleet"
            title="Pick the car that fits your trip"
            subtitle={`Over ${site.fleetSize.replace("+", "")} well maintained vehicles across ${cars.length} models, available for rent all over Karachi. These are our most requested cars.`}
            inverted
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car, i) => (
            <Reveal key={car.id} delay={Math.min(i, 5) * 60} className="h-full">
              <CarCard car={car} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link
              href="/fleet"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View all {cars.length} models
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
