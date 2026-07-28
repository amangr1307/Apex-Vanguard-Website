"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+919876543210";
  const defaultMessage = encodeURIComponent(
    "Hello Apex Vanguard Global, I would like to inquire about sourcing products from India."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
        </span>
      </div>
      <span className="hidden sm:inline text-xs font-bold tracking-wide">
        Chat with Sourcing Desk
      </span>
    </a>
  );
}
