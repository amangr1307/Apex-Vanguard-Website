"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919876543210"; // Placeholder business WhatsApp line

  const handleOpenWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Expanded Quick Inquiry Popup */}
      {isOpen && (
        <div className="w-80 rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Apex Vanguard Global</h4>
                <p className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">● Live Sourcing Desk Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            Welcome to Apex Vanguard Global Trade Desk! How can we assist your international procurement today?
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() =>
                handleOpenWhatsApp("Hello Apex Vanguard Global, I would like to Request a Product Quote for export.")
              }
              className="w-full rounded-xl bg-slate-50 px-3 py-2 text-left text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400 transition-colors border border-slate-100 dark:border-slate-700/60"
            >
              📦 Request a Product Quote
            </button>
            <button
              onClick={() =>
                handleOpenWhatsApp("Hello, I cannot find my required product. I need custom sourcing from India.")
              }
              className="w-full rounded-xl bg-slate-50 px-3 py-2 text-left text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400 transition-colors border border-slate-100 dark:border-slate-700/60"
            >
              🔍 Custom Sourcing Inquiry
            </button>
            <button
              onClick={() =>
                handleOpenWhatsApp("Hello, I am a manufacturer in India and would like to Become a Registered Supplier.")
              }
              className="w-full rounded-xl bg-slate-50 px-3 py-2 text-left text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400 transition-colors border border-slate-100 dark:border-slate-700/60"
            >
              🏭 Manufacturer / Supplier Registration
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Live WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-6" />
      </button>
    </div>
  );
};
