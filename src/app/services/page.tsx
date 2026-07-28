"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data";
import {
  Globe,
  Ship,
  Truck,
  Search,
  UserCheck,
  PackageCheck,
  FileSpreadsheet,
  Anchor,
  CheckCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  PackagePlus,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-7 h-7 text-sky-500" />,
  Ship: <Ship className="w-7 h-7 text-indigo-500" />,
  Truck: <Truck className="w-7 h-7 text-amber-500" />,
  Search: <Search className="w-7 h-7 text-emerald-500" />,
  UserCheck: <UserCheck className="w-7 h-7 text-pink-500" />,
  PackageCheck: <PackageCheck className="w-7 h-7 text-teal-500" />,
  FileSpreadsheet: <FileSpreadsheet className="w-7 h-7 text-purple-500" />,
  Anchor: <Anchor className="w-7 h-7 text-blue-500" />,
  CheckCircle: <CheckCircle className="w-7 h-7 text-emerald-500" />,
  FileText: <FileText className="w-7 h-7 text-sky-400" />,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header Banner */}
      <section className="relative py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800">
            Comprehensive Trade Facilitation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            International Trade & Sourcing Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Apex Vanguard Global is a full-spectrum international trade service company. Beyond product supply, we manage end-to-end global sourcing, factory auditing, OEM private labeling, quality inspection, customs clearance, and ocean freight logistics.
          </p>
        </div>
      </section>

      {/* 10 Core Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName] || <Globe className="w-7 h-7 text-sky-400" />}
                  </div>

                  {service.badge && (
                    <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold text-xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                  {service.title}
                </h2>

                <p className="text-xs font-semibold text-sky-400 mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/request-product"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold hover:bg-emerald-900 transition-colors"
                >
                  <PackagePlus className="w-3.5 h-3.5" />
                  <span>Custom Sourcing</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Callout Section */}
      <section className="py-16 bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Sparkles className="w-8 h-8 text-sky-400 mx-auto" />
          <h2 className="text-3xl font-extrabold text-white">
            Need a Bespoke Procurement & Sourcing Package?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you require a dedicated manufacturer audit in Rajasthan or full container logistics to Rotterdam, our trade specialists are ready to manage your supply chain.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-product"
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              Request Custom Sourcing
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
            >
              Speak with Trade Specialist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
