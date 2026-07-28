"use client";

import React from "react";
import Link from "next/link";
import { PackagePlus, Search, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";

export const CustomSourcingBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-y border-indigo-900/50">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Procurement & Global Sourcing
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Can’t Find the Product You’re Looking For?
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              We source products directly from trusted, audited manufacturers across India based on your exact specifications, custom dimensions, or raw material standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Dimensions & Specifications</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Audited Factory Solvency & Machinery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Private Labeling & OEM Branding</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pre-Shipment SGS Lab Inspection</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 w-full lg:w-auto shrink-0">
            <Link
              href="/request-product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
            >
              <PackagePlus className="w-5 h-5 text-emerald-100" />
              <span>Request Any Product</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/request-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors text-center"
            >
              <span>Submit General RFQ</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
