"use client";

import Link from "next/link";
import { ShieldCheck, Search, CheckSquare, Box, FileText, Ship, ArrowUpRight, Award } from "lucide-react";

const SOURCING_PILLARS = [
  {
    icon: ShieldCheck,
    title: "1. Verified Manufacturers Network",
    desc: "We exclusively contract with ISO, CE, and APEDA accredited production facilities in India. Factories undergo physical infrastructure assessment, capacity verification, and financial background checks.",
  },
  {
    icon: Search,
    title: "2. Supplier Verification & Audits",
    desc: "Our field engineers conduct on-site factory audits prior to contract signing. We inspect machinery condition, raw material origin, labor practices, and past export history.",
  },
  {
    icon: CheckSquare,
    title: "3. Multi-Stage Quality Checks",
    desc: "Quality control is executed at 3 critical milestones: Raw material testing, in-line manufacturing monitoring, and pre-shipment container loading inspection with third-party labs (SGS/Intertek).",
  },
  {
    icon: Box,
    title: "4. Heavy-Duty Export Packaging",
    desc: "Products are packaged to withstand maritime transit humidity and long-distance container handling. From vacuum-sealed poly bags to heat-treated ISPM-15 wooden crates and pallets.",
  },
  {
    icon: FileText,
    title: "5. Export Documentation Compliance",
    desc: "We draft and verify all mandatory trade documents including Commercial Invoice, Packing List, Bill of Lading (BL), Certificate of Origin (COO), Phytosanitary Certificates, and Lab Test Reports.",
  },
  {
    icon: Ship,
    title: "6. Integrated Freight & Global Shipping",
    desc: "Full container load (FCL) and less-than-container load (LCL) logistics under FOB, CIF, or CFR Incoterms with direct carrier shipping lines to major worldwide ports.",
  },
];

export default function GlobalSourcingPage() {
  return (
    <div className="w-full bg-apex-white dark:bg-zinc-950 py-12 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Institutional Procurement Standard
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-apex-dark dark:text-white mt-4 tracking-tight">
            Our Global Sourcing Model
          </h1>
          <p className="text-base text-apex-grey dark:text-gray-300 mt-3 leading-relaxed">
            How Apex Vanguard Global guarantees 0% defect rates, 100% specification compliance, and transparent direct-factory pricing for overseas buyers.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SOURCING_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-apex-surface dark:bg-zinc-900 p-8 sm:p-10 rounded-3xl border border-apex-border dark:border-apex-borderDark shadow-apex-soft hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-apex-purple/10 text-apex-purple flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-apex-dark dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-300 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Incoterms Overview Banner */}
        <div className="bg-apex-dark text-white rounded-4xl p-10 sm:p-16 mb-20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-apex-purple font-bold">Standard Incoterms 2020</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Flexible Shipping & Payment Terms</h2>
            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
              We support FOB (Free on Board), CIF (Cost, Insurance & Freight), and CFR (Cost and Freight) options with secure Letter of Credit (LC at Sight) or Telegraphic Transfer (TT) payment protocols.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className="bg-apex-purple hover:bg-apex-purple-hover text-white text-xs font-bold px-6 py-3 rounded-full transition-colors flex items-center gap-2"
              >
                <span>Request Custom Incoterm Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-zinc-800 text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-zinc-700 transition-colors"
              >
                Speak with Trade Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
