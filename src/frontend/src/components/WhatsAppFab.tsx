import { SiWhatsapp } from "react-icons/si";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/61488841883"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 whatsapp-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
    >
      {/* Icon only on mobile, label on desktop */}
      <span className="flex items-center gap-2 px-4 py-3 md:px-5 md:py-3">
        <SiWhatsapp className="h-6 w-6 shrink-0" />
        <span className="hidden sm:inline text-sm font-bold whitespace-nowrap">
          WhatsApp Us
        </span>
      </span>
    </a>
  );
}
