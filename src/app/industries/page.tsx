"use client";

import React from "react";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/data";
import {
  Building2,
  Utensils,
  Scissors,
  Factory,
  ShoppingBag,
  Car,
  Sprout,
  Zap,
  ArrowRight,
  PackagePlus,
  ShieldCheck,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8 text-sky-500" />,
  Utensils: <Utensils className="w-8 h-8 text-amber-500" />,
  Scissors: <Scissors className="w-8 h-8 text-pink-500" />,
  Factory: <Factory className="w-8 h-8 text-indigo-500" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8 text-emerald-500" />,
  Car: <Car className="w-8 h-8 text-red-500" />,
  Sprout: <Sprout className="w-8 h-8 text-teal-500" />,
  Zap: <Zap className="w-8 h-8 text-yellow-500" />,
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header Banner */}
      <section className="py-20 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800">
            Sector Procurement Specialization
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Apex Vanguard Global provides raw materials, custom components, and specialized export packaging tailored to 8 core global industry verticals.
          </p>
        </div>
      </section>

      {/* Industries Detailed Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {INDUSTRIES_DATA.map((ind, idx) => (
          <div
            key={ind.id}
            id={ind.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 rounded-3xl bg-slate-900 border border-slate-800 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 text-sky-400 text-xs font-bold border border-slate-700">
                {ind.name}
              </span>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {iconMap[ind.icon] || <Factory className="w-6 h-6 text-sky-400" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{ind.name}</h2>
                  <p className="text-xs font-semibold text-sky-400">{ind.tagline}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {ind.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Primary Supply Capabilities:
                </span>
                <div className="flex flex-wrap gap-2">
                  {ind.keyProducts.map((prod, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-3 py-1 rounded-lg bg-slate-950 text-slate-200 text-xs font-semibold border border-slate-800"
                    >
                      ✓ {prod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors"
                >
                  Request RFQ for {ind.name}
                </Link>

                <Link
                  href="/request-product"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <PackagePlus className="w-3.5 h-3.5" />
                  <span>Custom Sourcing</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
