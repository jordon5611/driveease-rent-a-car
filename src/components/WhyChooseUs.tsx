import { Wrench, CalendarDays, MapPin, Headphones } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const features = [
  {
    icon: Wrench,
    title: "Well Maintained Fleet",
    text: "Every vehicle in our fleet is regularly serviced and inspected to ensure your safety and comfort on every journey.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Rental Plans",
    text: "We offer daily, weekly and monthly rental plans to suit your schedule and budget, with or without a driver.",
  },
  {
    icon: MapPin,
    title: "Available Across Karachi",
    text: "We serve all major areas of Karachi including DHA, Clifton, Gulshan, North Karachi, Korangi and more.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    text: "Our support team is available around the clock to assist you with any queries or requirements during your rental.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden bg-navy-900 py-20 sm:py-24"
      id="about"
    >
      {/* Soft brand glow to stop the dark section reading as a flat block. */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Rent with people who pick up the phone"
            subtitle="We are committed to providing the most reliable car rental experience in Karachi."
            inverted
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80} className="h-full">
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.07]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 ring-1 ring-brand/25 transition-colors group-hover:bg-brand">
                  <feature.icon
                    size={22}
                    className="text-brand-400 transition-colors group-hover:text-white"
                  />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
