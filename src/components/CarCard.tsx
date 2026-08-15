import Image from "next/image";
import Link from "next/link";
import { Users, Settings, Fuel, Snowflake, MessageCircle } from "lucide-react";
import type { Car } from "@/data/cars";
import { site, whatsappHref } from "@/lib/site";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const specs = [
    { icon: Users, label: `${car.seats} Seats` },
    { icon: Settings, label: car.transmission },
    { icon: Fuel, label: car.fuel },
    { icon: Snowflake, label: car.ac ? "AC" : "No AC" },
  ];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/50 hover:bg-black/60 hover:shadow-[0_8px_40px_rgb(249,115,22,0.15)]">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={car.image}
          alt={car.altText}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent mix-blend-multiply" />
        
        {/* Category Badge */}
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
          {car.category}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-6 -mt-6">
        
        {/* Title and Price */}
        <div className="mb-4">
          <h3 className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-brand-400 transition-colors">
            {car.name}
          </h3>
          <p className="mt-2 text-xl font-semibold text-brand-500">
            {car.price}
          </p>
        </div>

        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-400">
          {car.description}
        </p>

        {/* Specs Grid */}
        <div className="mt-auto grid grid-cols-2 gap-3 pb-6">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 text-xs font-medium text-gray-300 backdrop-blur-sm transition-colors group-hover:bg-white/10"
            >
              <spec.icon size={16} className="shrink-0 text-brand-500" />
              <span className="truncate">{spec.label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/fleet/${car.id}`}
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/30"
          >
            View Details
          </Link>
          <a
            href={whatsappHref(
              `Hi ${site.name}, I am interested in renting the ${car.name} (${car.price}). Is it available?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about the ${car.name} on WhatsApp`}
            className="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg transition-all hover:scale-105 hover:shadow-brand/50"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}
