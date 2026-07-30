import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { site, telHref, whatsappHref } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { contactSchema, ogImage } from "@/lib/seo";

const title = "Contact Us | Rent a Car in Karachi Pakistan";
const description = `Contact ${site.name} to rent a car in Karachi. Call or WhatsApp ${site.phoneDisplay}, or send an enquiry to book a car for daily, weekly or monthly rental. We serve all areas of Karachi, Pakistan.`;

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
        subtitle="Fill in the form below or reach us directly via phone or WhatsApp to inquire about our car rental services in Karachi."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            <Reveal className="lg:col-span-3">
              <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-xl font-bold text-navy-900">
                  Send us an inquiry
                </h2>
                <p className="mt-1.5 text-sm text-navy-500">
                  Share a few details and we will confirm availability right
                  away.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-2">
              <div className="rounded-2xl border border-navy-200 bg-navy-50 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy-900">
                  Contact information
                </h2>
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

                <a
                  href={whatsappHref(
                    `Hi ${site.name}, I would like to inquire about renting a car in ${site.city}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex h-11 items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white shadow-brand transition-colors hover:bg-brand-600"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                </a>
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
