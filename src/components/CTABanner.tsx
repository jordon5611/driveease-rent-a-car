import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-amber py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Ready to Rent a Car in Karachi?
        </h2>
        <p className="mt-4 text-navy/80 text-lg">
          Get in touch with our team today and we will find the right car for your needs.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-navy px-8 py-3 text-base font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-lg"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}
