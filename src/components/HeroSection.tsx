import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rent a Car in Karachi, Pakistan
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Reliable and affordable car rental service in Karachi. Choose from a
            wide fleet of sedans, SUVs, hatchbacks and hybrid vehicles for daily,
            weekly or monthly rentals.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center rounded-lg bg-amber px-8 py-3 text-base font-semibold text-navy transition-all hover:bg-amber-400 hover:shadow-lg"
            >
              View Our Fleet
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-navy"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <span>Daily Rentals</span>
            <span className="mx-3 text-gray-600">|</span>
            <span>Weekly Rentals</span>
            <span className="mx-3 text-gray-600">|</span>
            <span>Monthly Rentals</span>
            <span className="mx-3 text-gray-600">|</span>
            <span>With or Without Driver</span>
          </div>
        </div>
      </div>
    </section>
  );
}
