import { Phone, MessageCircle } from "lucide-react";
import { site, telHref, whatsappHref } from "@/lib/site";

/**
 * Fixed call/WhatsApp bar shown only on small screens, where tapping to call
 * is the primary way customers get in touch.
 */
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-800 bg-navy/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={telHref}
          className="flex items-center justify-center gap-2 rounded-lg border border-white/20 py-3 text-sm font-semibold text-white transition-colors active:bg-white/10"
        >
          <Phone size={16} className="text-brand-400" />
          Call Now
        </a>
        <a
          href={whatsappHref(
            `Hi ${site.name}, I would like to inquire about renting a car in Karachi.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-semibold text-white transition-colors active:bg-brand-600"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
