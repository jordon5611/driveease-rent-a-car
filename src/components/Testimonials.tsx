import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Excellent service and very cooperative staff. The Fortuner was in perfect condition for our family trip to Murree.",
    name: "Ahmed K.",
    city: "Karachi",
    rating: 5,
  },
  {
    quote:
      "I needed a car on short notice and DriveEase arranged it within hours. The Corolla was clean and well maintained.",
    name: "Sara M.",
    city: "Karachi",
    rating: 5,
  },
  {
    quote:
      "Great experience renting the Prius for a whole month. Fuel efficient, comfortable and hassle free process.",
    name: "Bilal R.",
    city: "Karachi",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber text-amber" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Hundreds of satisfied customers across Karachi trust DriveEase
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <StarRating count={t.rating} />
              <p className="mt-4 text-gray-700 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber text-sm font-bold text-navy">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
