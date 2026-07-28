"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  PackagePlus,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Ship,
  CheckCircle,
} from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { currentCurrencyDetails } = useCurrency();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white font-sans py-20 lg:py-28">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Trust Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-200 tracking-wide">
              Connecting Global Buyers with Verified Indian Manufacturers
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Apex Vanguard Global
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-teal-300">
              International Trade & Sourcing House
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your single trusted partner for bulk agricultural commodities, structural steel, natural marble, industrial metals, textiles, and engineering polymers. Delivered with strict pre-shipment quality inspection and end-to-end maritime freight.
          </p>

          {/* Live Product Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto pt-4">
            <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2 shadow-2xl focus-within:border-sky-500 transition-colors">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search products (e.g. Coconuts, TMT Steel, Copper Cathodes, Yarns, Polymers...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-transparent text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/request-product"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all hover:scale-[1.02]"
            >
              <PackagePlus className="w-5 h-5" />
              <span>Request Any Product (Custom Sourcing)</span>
            </Link>

            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 transition-colors"
            >
              <span>Request a Quote (RFQ)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Key Value Props Pill Bar */}
          <div className="pt-8 border-t border-slate-900 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              APEDA & FSSAI Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Incoterms: FOB, CIF, CFR, EXW, DDP
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              SGS & Intertek Inspected
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Quotes in {currentCurrencyDetails.code} ({currentCurrencyDetails.symbol})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
