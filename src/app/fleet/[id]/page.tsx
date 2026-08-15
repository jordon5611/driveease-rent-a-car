import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Users, Settings, Fuel, Snowflake, MessageCircle, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { cars, carImageUrl } from "@/data/cars";
import { site, whatsappHref, absoluteUrl } from "@/lib/site";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const car = cars.find((c) => c.id === params.id);
  if (!car) return {};

  const title = `Rent ${car.name} in Karachi | ${site.shortName}`;
  const description = `Rent the ${car.name} in Karachi for ${car.price}. ${car.description}`;

  return {
    title,
    description,
    alternates: { canonical: `/fleet/${car.id}` },
    openGraph: {
      url: `/fleet/${car.id}`,
      title,
      description,
      images: [
        {
          url: absoluteUrl(carImageUrl(car)),
          width: 800,
          height: 500,
          alt: car.altText,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [absoluteUrl(carImageUrl(car))],
    },
  };
}

export default function CarDetailsPage({ params }: Props) {
  const car = cars.find((c) => c.id === params.id);
  
  if (!car) {
    notFound();
  }

  const specs = [
    { icon: Users, label: `${car.seats} Seats` },
    { icon: Settings, label: car.transmission },
    { icon: Fuel, label: car.fuel },
    { icon: Snowflake, label: car.ac ? "Air Conditioning" : "No AC" },
  ];

  return (
    <main className="bg-navy-50 min-h-screen">
      <Navbar />

      <article className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <Reveal className="mb-8">
            <Link 
              href="/fleet" 
              className="inline-flex items-center text-sm font-medium text-navy-500 transition-colors hover:text-brand-600"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Fleet
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            
            {/* Image Gallery Column */}
            <Reveal delay={100} className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-navy-100">
              <Image
                src={carImageUrl(car)}
                alt={car.altText}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-6 top-6 rounded-full bg-navy-900/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                {car.category}
              </div>
            </Reveal>

            {/* Details Column */}
            <Reveal delay={200} className="flex flex-col">
              <div className="border-b border-navy-100 pb-8">
                <h1 className="font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                  {car.name}
                </h1>
                <p className="mt-4 text-3xl font-semibold text-brand-500">
                  {car.price}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-navy-600">
                  {car.description}
                </p>
              </div>

              <div className="py-8">
                <h2 className="font-display text-xl font-bold text-navy-900 mb-6">
                  Vehicle Specifications
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-navy-100"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <spec.icon size={20} />
                      </div>
                      <span className="font-medium text-navy-700">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappHref(
                    `Hi ${site.name}, I would like to book the ${car.name} (${car.price}). Can you confirm availability?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-1 hover:bg-brand-600 hover:shadow-brand-500/40"
                >
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex h-14 flex-1 items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-navy-900 shadow-sm ring-1 ring-inset ring-navy-200 transition-all hover:bg-navy-50"
                >
                  Contact Us
                </Link>
              </div>

            </Reveal>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
