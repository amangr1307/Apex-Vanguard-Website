"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HardHat, Factory, Utensils, Sprout, Car, ShoppingBag, ArrowUpRight } from "lucide-react";

const INDUSTRIES = [
  {
    name: "Heavy Manufacturing",
    icon: Factory,
    desc: "Electrolytic copper wire rods, custom PVC extrusion profiles, industrial polymers, and synthetic rubbers.",
    link: "/industries#manufacturing",
  },
  {
    name: "Textiles & Pure Silk",
    icon: ShoppingBag,
    desc: "100% Grade 6A Mulberry silk, handloom raw Tussar silk dupion, and pure silk yarns.",
    link: "/industries#retail",
  },
  {
    name: "Food Processing",
    icon: Utensils,
    desc: "Cold pressed virgin coconut oil, Sharbati wheat flour, husked coconuts, and refined oils.",
    link: "/industries#food-processing",
  },
  {
    name: "Construction",
    icon: HardHat,
    desc: "Structural TMT steel rebars, architectural Makrana marble slabs, granite, and AAC hollow blocks.",
    link: "/industries#construction",
  },
  {
    name: "Agriculture",
    icon: Sprout,
    desc: "Bulk raw agricultural exports, organic coconut produce, and farm grain commodities.",
    link: "/industries#agriculture",
  },
  {
    name: "Automotive & OEM",
    icon: Car,
    desc: "Precision molded rubber seals, copper wiring harnesses, and alloy components.",
    link: "/industries#automotive",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-apex-purple font-extrabold bg-apex-purple/10 border border-apex-purple/20 px-3.5 py-1.5 rounded-full">
              Sourcing Sectors
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-apex-dark dark:text-white mt-4">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-gray-400 mt-2 font-normal">
              Custom tailored export procurement workflows engineered for multinational enterprises across 6 major sectors.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-apex-purple hover:underline"
          >
            <span>View All Sector Specifications</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={ind.link}
                  className="block h-full bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-400 hover:-translate-y-1.5 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 text-apex-dark dark:text-white group-hover:bg-apex-purple group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-apex-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-all stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-apex-dark dark:text-white mb-2 group-hover:text-apex-purple transition-colors tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-gray-400 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
