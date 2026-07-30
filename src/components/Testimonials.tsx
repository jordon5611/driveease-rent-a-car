import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Excellent service and very cooperative staff. The Fortuner was in perfect condition for our family trip to Murree.",
    name: "Ahmed K.",
    city: "DHA, Karachi",
    rating: 5,
  },
  {
    quote:
      "I needed a car on short notice and Elite Motors Karachi arranged it within hours. The Corolla was clean and well maintained.",
    name: "Sara M.",
    city: "Clifton, Karachi",
    rating: 5,
  },
  {
    quote:
      "Great experience renting the Prius for a whole month. Fuel efficient, comfortable and hassle free process.",
    name: "Bilal R.",
    city: "Gulshan, Karachi",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`Rated ${count} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} className="fill-brand text-brand" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-navy-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our customers say"
            subtitle="Hundreds of satisfied customers across Karachi trust us with their journeys."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="relative flex h-full flex-col rounded-2xl border border-navy-200 bg-white p-7 shadow-card">
                <Quote
                  size={36}
                  className="absolute right-5 top-5 text-brand-100"
                  aria-hidden
                />
                <StarRating count={t.rating} />
                <blockquote className="relative mt-4 flex-1 text-[15px] leading-relaxed text-navy-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand-600">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-900">
                      {t.name}
                    </span>
                    <span className="block text-xs text-navy-500">
                      {t.city}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
