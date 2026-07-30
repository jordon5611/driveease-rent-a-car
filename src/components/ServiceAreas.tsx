import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { serviceAreas } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-20 sm:py-24" id="service-areas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Service Areas"
            title="Car rental across all of Karachi"
            subtitle="Orange Rent Car Services provides reliable rent a car services across all major areas of Karachi, Pakistan. Whether you need a car for daily use, a family trip, corporate travel or airport pickup, our fleet is available throughout the city."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                <MapPin size={13} className="text-brand-500" />
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-navy-500">
            Our cars are available for short term daily rentals, weekly hire and
            long term monthly car rental packages in Karachi. Contact us today to
            inquire about availability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
