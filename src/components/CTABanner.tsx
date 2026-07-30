import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { site, telHref, whatsappHref } from "@/lib/site";

export default function CTABanner() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 sm:py-20">
            {/* Brand wash + grid to give the panel depth. */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-50 [background-size:48px_48px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white text-balance sm:text-4xl">
                Ready to rent a car in Karachi?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-300">
                Tell us your dates and where you are in the city. We will
                confirm availability and get you on the road.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappHref(
                    `Hi ${site.name}, I would like to book a car in Karachi.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-brand transition-all hover:bg-brand-600 sm:w-auto"
                >
                  <MessageCircle size={18} />
                  Book on WhatsApp
                </a>
                <a
                  href={telHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto"
                >
                  <Phone size={18} className="text-brand-400" />
                  {site.phoneDisplay}
                </a>
              </div>

              <p className="mt-6 text-xs text-navy-400">
                Or{" "}
                <Link
                  href="/contact"
                  className="font-medium text-brand-400 underline underline-offset-4 hover:text-brand-300"
                >
                  send us an inquiry
                </Link>{" "}
                and we will get back to you. Open {site.hours}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
