import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { site, telHref, whatsappHref } from "@/lib/site";
import { services } from "@/data/services";
import JsonLd from "@/components/JsonLd";
import { contactSchema, ogImage } from "@/lib/seo";

const title = "Contact Us | Rent a Car in Karachi Pakistan";
const description = `Contact ${site.name} to rent a car in Karachi. Call or WhatsApp ${site.phoneDisplay} to book daily, weekly or monthly rentals, airport pick up and drop off, or a car with driver anywhere in Karachi.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title,
    description,
    images: [ogImage],
  },
  twitter: { title, description, images: [ogImage.url] },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phoneDisplay,
    href: telHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappHref(),
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: site.address,
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours,
  },
];

export default function ContactPage() {
  return (
    <main>
      <JsonLd schema={contactSchema} />
      <Navbar />

      <PageHero
        eyebrow="Contact"
        title="Contact us for car rental in Karachi"
        subtitle="One call or WhatsApp message is all it takes. Tell us the dates and the car you need, and we will confirm availability right away."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            <Reveal className="lg:col-span-3">
              <div className="rounded-2xl border border-navy-200 bg-navy-50 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy-900">
                  Contact information
                </h2>
                <p className="mt-1.5 text-sm text-navy-500">
                  We answer fastest on WhatsApp, every day between{" "}
                  {site.hours.replace(" (Daily)", "")}.
                </p>
                <ul className="mt-6 space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                        <item.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                          {item.label}
                        </p>
                        {"href" in item && item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="mt-0.5 block break-words text-sm font-medium text-navy-800 transition-colors hover:text-brand-600"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-navy-800">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappHref(
                      `Hi ${site.name}, I would like to inquire about renting a car in ${site.city}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white shadow-brand transition-colors hover:bg-brand-600"
                  >
                    <MessageCircle size={17} />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={telHref}
                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-navy-300 text-sm font-semibold text-navy-800 transition-colors hover:border-brand hover:text-brand-600"
                  >
                    <Phone size={16} />
                    Call {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex h-44 items-center justify-center rounded-2xl border border-navy-200 bg-navy-100">
                <div className="text-center">
                  <MapPin size={28} className="mx-auto text-navy-400" />
                  <p className="mt-2 text-sm font-medium text-navy-600">
                    {site.address}
                  </p>
                  <p className="mt-0.5 text-xs text-navy-400">
                    Serving all major areas of {site.city}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-2">
              <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-xl font-bold text-navy-900">
                  What we can arrange
                </h2>
                <p className="mt-1.5 text-sm text-navy-500">
                  Mention any of these in your message and we will take care of
                  the rest.
                </p>
                <ul className="mt-6 space-y-4">
                  {services.map((service) => (
                    <li key={service.slug} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-500"
                      />
                      <span className="text-sm font-medium text-navy-800">
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#services"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 underline-offset-2 hover:underline"
                >
                  Learn more about our services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
