import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/#how-it-works", label: "How It Works" },
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
    <footer className="bg-navy pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-white sm:text-2xl">
              <span className="text-amber">Orange</span> Rent Car Services
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Trusted car rental service in Karachi, Pakistan
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="text-amber shrink-0" />
                <a
                  href="tel:+923002589489"
                  className="transition-colors hover:text-amber"
                >
                  +92 300 2589489
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MessageCircle size={14} className="text-amber shrink-0" />
                <a
                  href="https://wa.me/923002589489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber"
                >
                  +92 300 2589489
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-amber shrink-0" />
                <span>info@driveease.pk</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-amber shrink-0" />
                <span>Karachi, Sindh, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-gray-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            2025 Orange Rent Car Services. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Rent a Car Karachi Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
