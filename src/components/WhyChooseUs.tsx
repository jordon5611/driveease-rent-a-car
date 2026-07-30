import { Wrench, CalendarDays, MapPin, Headphones } from "lucide-react";

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
    <section className="bg-navy py-16 sm:py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Rent With DriveEase
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            We are committed to providing the best car rental experience in Karachi
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-navy-800 p-6 transition-all hover:bg-navy-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber">
                  <feature.icon size={24} className="text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
