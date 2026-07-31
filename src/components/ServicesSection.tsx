import type { LucideIcon } from "lucide-react";
import {
  Plane,
  UserRound,
  KeyRound,
  Building2,
  Sparkles,
  Route,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { services } from "@/data/services";
import { site, whatsappHref } from "@/lib/site";

/** Icons stay here so the data file remains plain content shared with SEO. */
const icons: Record<string, LucideIcon> = {
  "airport-pickup": Plane,
  "with-driver": UserRound,
  "self-drive": KeyRound,
  "monthly-corporate": Building2,
  "wedding-events": Sparkles,
  outstation: Route,
};

export default function ServicesSection() {
  return (
    <section className="bg-navy-50 py-20 sm:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="More than just a car with keys"
            subtitle="From airport pick up to monthly corporate hire, every service comes with a well maintained car and a driver you can rely on."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.slug];
            return (
              <Reveal key={service.slug} delay={i * 70} className="h-full">
                <div className="group h-full rounded-2xl border border-navy-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-navy-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mt-10 text-center text-sm text-navy-500">
            Need something specific?{" "}
            <a
              href={whatsappHref(
                `Hi ${site.name}, I would like to ask about a car rental service in ${site.city}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 underline-offset-2 hover:underline"
            >
              Message us on WhatsApp
            </a>{" "}
            and we will arrange it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
