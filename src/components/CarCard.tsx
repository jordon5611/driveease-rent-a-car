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
    { icon: Snowflake, label: car.ac ? "AC" : "Non AC" },
  ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
      <div className="relative h-52 overflow-hidden bg-navy-100">
        <Image
          src={car.image}
          alt={car.altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/60 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 shadow-sm backdrop-blur-sm">
          {car.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-navy-900">
          {car.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-navy-500">
          {car.description}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center gap-2 rounded-lg bg-navy-50 px-2.5 py-2 text-xs font-medium text-navy-700"
            >
              <spec.icon size={14} className="shrink-0 text-brand-500" />
              <span className="truncate">{spec.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex gap-2 pt-5">
          <Link
            href="/contact"
            className="flex h-10 flex-1 items-center justify-center rounded-xl bg-navy-900 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Inquire Now
          </Link>
          <a
            href={whatsappHref(
              `Hi ${site.name}, I am interested in renting the ${car.name}. Is it available?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about the ${car.name} on WhatsApp`}
            className="flex h-10 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition-colors hover:bg-brand-600"
          >
            <MessageCircle size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
