import Image from "next/image";
import Link from "next/link";
import { Users, Settings, Fuel, Snowflake } from "lucide-react";
import type { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <Image
          src={car.image}
          alt={car.altText}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-amber px-3 py-1 text-xs font-semibold text-navy">
          {car.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{car.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {car.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Users size={14} className="text-amber" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings size={14} className="text-amber" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={14} className="text-amber" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Snowflake size={14} className="text-amber" />
            <span>AC</span>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-4 block w-full rounded-lg bg-amber py-2.5 text-center text-sm font-semibold text-navy transition-all hover:bg-amber-400"
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
}
