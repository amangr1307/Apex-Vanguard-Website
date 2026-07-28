"use client";

import React from "react";
import { Globe2, Ship, Factory, Award, TrendingUp, Users } from "lucide-react";

export const GlobalReachMap: React.FC = () => {
  const stats = [
    { label: "Countries Served", value: "35+", icon: Globe2, color: "text-sky-500" },
    { label: "Verified Manufacturers", value: "500+", icon: Factory, color: "text-indigo-500" },
    { label: "Export Portfolios", value: "150+", icon: Ship, color: "text-emerald-500" },
    { label: "Annual Trade Volume", value: "$50M+", icon: TrendingUp, color: "text-amber-500" },
  ];

  const tradeCorridors = [
    { region: "Middle East & GCC", ports: "Jebel Ali, Dammam, Muscat, Hamad Port" },
    { region: "Europe & UK", ports: "Rotterdam, Hamburg, Felixstowe, Antwerp" },
    { region: "North America", ports: "Los Angeles, Houston, New York, Vancouver" },
    { region: "Southeast Asia & Asia-Pacific", ports: "Singapore, Port Klang, Bangkok, Sydney" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Statistics Header */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-800">
              International Logistics & Footprint
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Global Presence & Active Export Corridors
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Apex Vanguard Global manages container freight logistics linking Indian ports (Chennai, Tuticorin, Nhava Sheva, Mundra) to major seaports across North America, Europe, the Middle East, and Asia-Pacific.
            </p>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <item.icon className={`w-5 h-5 ${item.color} mb-2`} />
                  <div className="text-2xl sm:text-3xl font-black text-white">{item.value}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trade Corridors Graphic Container */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-slate-800 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-sky-400" />
                <h3 className="text-base font-bold text-white">Active Maritime Shipping Corridors</h3>
              </div>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span> Live Shipping Lines
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tradeCorridors.map((corridor, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-sky-500/50 transition-colors">
                  <h4 className="text-xs font-bold uppercase text-sky-400 mb-1">{corridor.region}</h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">{corridor.ports}</p>
                </div>
              ))}
            </div>

            {/* Maritime Route Highlights */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-sky-950/50 to-indigo-950/50 border border-sky-800/40 flex items-center gap-3">
              <Ship className="w-6 h-6 text-sky-400 shrink-0" />
              <p className="text-xs text-slate-300">
                Partnered with primary ocean liners (Maersk, Hapag-Lloyd, MSC, CMA CGM) for guaranteed FCL/LCL vessel space allocation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
