import { site } from "@/lib/site";

/**
 * Service content lives here rather than in a component so the same list feeds
 * the visible Services section, the contact page and the OfferCatalog
 * structured data. Search engines only trust service markup that matches what
 * the visitor can actually read on the page.
 */
export interface Service {
  slug: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "airport-pickup",
    name: "Airport Pick Up & Drop Off",
    description: `Landing at Jinnah International Airport? We pick you up from arrivals and drop you back for your departure, any day between ${site.hours.replace(" (Daily)", "")}. Share your flight details on WhatsApp and the car will be waiting.`,
  },
  {
    slug: "with-driver",
    name: "Car Rental with Driver",
    description:
      "Hire a car with an experienced, licensed driver who knows every route in Karachi. Ideal for guests, business visitors and families who would rather not deal with city traffic.",
  },
  {
    slug: "self-drive",
    name: "Self Drive Car Rental",
    description:
      "Prefer to drive yourself? Rent any car from our fleet on a self drive basis with a valid CNIC or passport and driving license. Simple paperwork, no hidden charges.",
  },
  {
    slug: "monthly-corporate",
    name: "Monthly & Corporate Rental",
    description:
      "Long term and corporate packages at rates well below daily hire. One car or a small fleet for your office, with a single monthly invoice and replacement cover during servicing.",
  },
  {
    slug: "wedding-events",
    name: "Wedding & Event Cars",
    description:
      "Clean, well presented cars with drivers for weddings, valimas and family events across Karachi. Book early for wedding season dates.",
  },
  {
    slug: "outstation",
    name: "Outstation & Intercity Trips",
    description:
      "Travelling beyond Karachi? Take a car with driver to Hyderabad, Thatta, Bhit Shah or anywhere in Sindh and beyond, for a day trip or a longer tour.",
  },
];
