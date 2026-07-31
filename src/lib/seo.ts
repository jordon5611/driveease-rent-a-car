import { site, absoluteUrl, serviceAreas } from "@/lib/site";
import { faqs } from "@/data/faqs";
import { cars, featuredCars, carImageUrl, type Car } from "@/data/cars";
import { services } from "@/data/services";

/** Stable node ids so the graph can cross reference itself. */
const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

/**
 * Next only inherits the opengraph-image file convention when a nested page
 * leaves `openGraph` alone. Any page that sets its own title or url there has to
 * name the image again, or the share card silently loses its picture.
 */
export const ogImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name} - rent a car in ${site.city}`,
};

/**
 * The business itself. CarRental is the closest schema.org type, and it
 * inherits LocalBusiness so it feeds Google's local results too.
 *
 * Deliberately omitted: priceRange, aggregateRating and review. Those need real
 * figures, and inventing them is exactly what earns a structured data penalty.
 */
export const organizationSchema = {
  "@type": "CarRental",
  "@id": ORG_ID,
  name: site.name,
  description: `Car rental service in ${site.city}, Pakistan with a fleet of ${site.fleetSize} vehicles, offering daily, weekly and monthly rentals with or without a driver, plus airport pick up and drop off.`,
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  logo: absoluteUrl("/icon.png"),
  image: absoluteUrl("/opengraph-image.png"),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.8607,
    longitude: 67.0011,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: `${area}, ${site.city}`,
  })),
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
  currenciesAccepted: "PKR",
  // Mirrors the visible Services section. Each entry stays price free because
  // rates are quoted per booking; inventing an Offer price would be false.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Car rental services in ${site.city}`,
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "City", name: site.city },
      },
    })),
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: site.url,
  name: site.name,
  inLanguage: "en-PK",
  publisher: { "@id": ORG_ID },
};

/** Mirrors the visible FAQ accordion, which is what makes it eligible. */
const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/**
 * The model line-up, so individual vehicles can surface in search. Structured
 * data has to mirror what the page actually shows, so the home page marks up
 * only the featured cards while /fleet marks up the full list.
 */
function fleetSchema(list: Car[]) {
  return {
    "@type": "ItemList",
    name: `Rental fleet models in ${site.city}`,
    numberOfItems: list.length,
    itemListElement: list.map((car, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Car",
        name: car.name,
        description: car.description,
        image: carImageUrl(car),
        vehicleSeatingCapacity: car.seats,
        vehicleTransmission: car.transmission,
        fuelType: car.fuel,
      },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })
    ),
  };
}

/**
 * Wraps nodes in a single @graph. One script tag with shared ids is easier for
 * crawlers to reconcile than several disconnected blocks.
 */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const homeSchema = graph(
  organizationSchema,
  websiteSchema,
  faqSchema,
  fleetSchema(featuredCars)
);

export const fleetSchemaGraph = graph(
  fleetSchema(cars),
  breadcrumbSchema([{ name: "Our Fleet", path: "/fleet" }])
);

export const contactSchema = graph(
  {
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: absoluteUrl("/contact"),
    about: { "@id": ORG_ID },
  },
  breadcrumbSchema([{ name: "Contact", path: "/contact" }])
);
