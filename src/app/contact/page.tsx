import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Rent a Car in Karachi Pakistan",
  description:
    "Contact Orange Rent Car Services to rent a car in Karachi. Call us or fill the form to book a car for daily, weekly or monthly rental. We serve all areas of Karachi, Pakistan.",
  alternates: { canonical: "https://www.driveease.pk/contact" },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 2589489",
    href: "tel:+923002589489",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 300 2589489",
    href: "https://wa.me/923002589489",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@driveease.pk",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Karachi, Sindh, Pakistan",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "8:00 AM to 10:00 PM (Daily)",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-navy py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Contact Us for Car Rental in Karachi
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Fill in the form below or reach us directly via phone or WhatsApp to
            inquire about our car rental services in Karachi.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Send Us an Inquiry
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <ul className="space-y-4">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/10">
                        <item.icon size={18} className="text-amber" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
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
                            className="text-sm text-gray-600 transition-colors hover:text-amber"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">
                    Karachi, Sindh, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
