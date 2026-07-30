export const site = {
  name: "Orange Rent Car Services",
  shortName: "Orange",
  city: "Karachi",
  email: "info@driveease.pk",
  // Display form shown to users.
  phoneDisplay: "+92 300 2589489",
  // E.164 form used by tel: links.
  phoneRaw: "+923002589489",
  // Digits only, as required by wa.me links.
  whatsappNumber: "923002589489",
  hours: "8:00 AM to 10:00 PM (Daily)",
  address: "Karachi, Sindh, Pakistan",
} as const;

/**
 * Areas we serve. Shared so the count shown in the hero can never drift out of
 * sync with the list rendered in the service areas section.
 */
export const serviceAreas = [
  "DHA",
  "Clifton",
  "Gulshan",
  "Saddar",
  "North Karachi",
  "Korangi",
  "Malir",
  "Bahria Town",
  "Scheme 33",
  "PECHS",
  "Nazimabad",
  "Landhi",
] as const;

export const telHref = `tel:${site.phoneRaw}`;

/** Builds a wa.me link, optionally pre-filling the chat with a message. */
export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
