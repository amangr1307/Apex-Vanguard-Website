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
} from "lucide-react";

export const IndustriesGrid: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5 text-sky-500" />,
    Utensils: <Utensils className="w-5 h-5 text-amber-500" />,
    Scissors: <Scissors className="w-5 h-5 text-pink-500" />,
    Factory: <Factory className="w-5 h-5 text-indigo-500" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-emerald-500" />,
    Car: <Car className="w-5 h-5 text-red-500" />,
    Sprout: <Sprout className="w-5 h-5 text-teal-500" />,
    Zap: <Zap className="w-5 h-5 text-yellow-500" />,
  };

  return (
    <section className="py-20 bg-slate-900 text-white font-sans border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-sm text-slate-300">
              Tailored raw material procurement, specialized export packaging, and supply chain solutions tailored for 8 key global industry verticals.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors shrink-0"
          >
            <span>Explore All Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries#${ind.id}`}
              className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {iconMap[ind.icon] || <Factory className="w-5 h-5 text-sky-400" />}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Sector
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mb-1.5">
                  {ind.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ind.tagline}
                </p>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">Key Supplies:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.keyProducts.slice(0, 3).map((prod, idx) => (
                      <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-sky-400">
                <span>View Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
