import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { site, whatsappHref, serviceAreas } from "@/lib/site";
import { cars } from "@/data/cars";

const highlights = [
  "Daily, weekly & monthly",
  "With or without driver",
  "All major areas of Karachi",
];

// Counts are derived from the real data so they stay truthful as it grows.
const stats = [
  { value: String(cars.length), label: "Vehicles in fleet" },
  { value: String(serviceAreas.length), label: "Areas covered" },
  { value: "24/7", label: "Customer support" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
        alt="Car rental service in Karachi, Pakistan"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Layered scrims keep the headline readable over the photo. */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      <div className="absolute inset-0 bg-grid-navy opacity-40 [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Trusted rent a car in Karachi
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rent a Car in Karachi,{" "}
            <span className="text-brand-400">Without the Hassle</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-300">
            Well maintained sedans, SUVs, hatchbacks and hybrids at honest
            rates. Book in minutes over a call or WhatsApp.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20">
                  <Check size={12} className="text-brand-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/fleet"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-brand transition-all hover:bg-brand-600"
            >
              Browse Our Fleet
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={whatsappHref(
                `Hi ${site.name}, I would like to inquire about renting a car in Karachi.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-navy-400 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
