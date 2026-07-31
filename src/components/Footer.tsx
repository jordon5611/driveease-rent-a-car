import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import { site, telHref, whatsappHref } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = [
  "DHA Karachi",
  "Clifton",
  "Gulshan e Iqbal",
  "North Karachi",
  "Bahria Town Karachi",
  "Saddar",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-navy-950 pb-24 pt-16 md:pb-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-400">
              Trusted car rental service in {site.city}, Pakistan. Well
              maintained vehicles, transparent rates and quick booking over a
              single WhatsApp message.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-navy-400">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-brand-500" />
                <a
                  href={telHref}
                  className="transition-colors hover:text-brand-400"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle
                  size={15}
                  className="mt-0.5 shrink-0 text-brand-500"
                />
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-400"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="mt-0.5 shrink-0 text-brand-500" />
                <span>{site.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-500" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Service Areas
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-navy-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Rent a Car {site.city} Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
