import { Search, Phone, Car } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Our Fleet",
    text: "Explore our wide range of vehicles and choose the one that best suits your needs and travel plans.",
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
    text: "Confirm the details with our team, collect your vehicle and enjoy your journey across Karachi and Pakistan.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Renting a car in Karachi has never been easier
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber/10">
                <step.icon size={28} className="text-amber" />
              </div>
              <span className="mt-4 block text-4xl font-bold text-amber/30">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.text}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-gray-300">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <path
                      d="M0 10 L35 10 M30 4 L38 10 L30 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
