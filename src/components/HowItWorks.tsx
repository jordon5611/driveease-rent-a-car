import { Search, Phone, Car } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Our Fleet",
    text: "Explore our range of vehicles and choose the one that best suits your needs and travel plans.",
  },
  {
    number: "02",
    icon: Phone,
    title: "Get in Touch",
    text: "Contact us via phone or WhatsApp or fill out our inquiry form and we will get back to you promptly.",
  },
  {
    number: "03",
    icon: Car,
    title: "Collect and Drive",
    text: "Confirm the details with our team, collect your vehicle and enjoy your journey across Karachi.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="bg-gradient-to-b from-white to-navy-50 py-20 sm:py-24"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Three steps and you're on the road"
            subtitle="Renting a car in Karachi has never been easier."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Connector line behind the step markers on desktop. */}
          <div
            aria-hidden
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 md:block"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="relative text-center">
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-brand">
                    <step.icon size={24} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[11px] font-bold text-white ring-2 ring-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-navy-500">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
