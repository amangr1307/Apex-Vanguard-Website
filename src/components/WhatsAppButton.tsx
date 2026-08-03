"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappNumber = "+919731138068";
  const defaultMessage = encodeURIComponent(
    "Hello Apex Vanguard Global, I would like to inquire about sourcing products from India."
  );

  const buttonContent = (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 99999,
        backgroundColor: "#25D366",
        boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)"
      }}
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center hover:scale-108 active:scale-95 transition-transform duration-300 relative group text-white cursor-pointer"
    >
      {/* Official WhatsApp Flat Emblem Icon */}
      <div className="relative z-10 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-current"
        >
          <path d="M16 2a13.72 13.72 0 0 0-11.75 20.81L2.5 29.5l6.89-1.72A13.73 13.73 0 1 0 16 2zm7.9 19.53c-.33.93-1.63 1.77-2.68 1.95-.72.13-1.66.24-4.83-1.07-4.05-1.67-6.66-5.8-6.86-6.07-.2-.27-1.64-2.18-1.64-4.16 0-1.98 1.03-2.95 1.4-3.35.37-.4.8-.5 1.07-.5s.54.01.78.02c.26.01.61-.1.95.72.35.85 1.2 2.93 1.3 3.14.1.2.17.44.03.71-.14.27-.21.44-.41.68-.2.24-.42.53-.6.71-.2.2-.41.42-.18.82.23.4.99 1.63 2.13 2.65 1.47 1.31 2.7 1.72 3.1 1.92.4.2.64.17.88-.1.24-.27 1.03-1.2 1.3-1.6.27-.4.54-.34.91-.2.37.14 2.37 1.12 2.77 1.32.4.2.67.3.77.47.1.17.1 1-.23 1.93z" />
        </svg>

        {/* Subtle pulsing online status dot */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-sm">
          <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping" />
        </span>
      </div>
    </a>
  );

  if (!mounted) return null;

  return createPortal(buttonContent, document.body);
}
