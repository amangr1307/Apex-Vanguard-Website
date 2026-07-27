"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HardHat, Factory, Utensils, Sprout, Car, ShoppingBag, ArrowUpRight } from "lucide-react";

const INDUSTRIES = [
  {
    name: "Construction",
    icon: HardHat,
    desc: "Structural steel, natural marble slabs, tiles, and high-density hollow blocks.",
    link: "/industries#construction",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    desc: "Copper wire rods, PVC extrusion profiles, industrial polymers, and synthetic rubbers.",
    link: "/industries#manufacturing",
  },
  {
    name: "Food Processing",
    icon: Utensils,
    desc: "Cold pressed oils, high-gluten wheat flour, desiccated coconut, and spices.",
    link: "/industries#food-processing",
  },
  {
    name: "Agriculture",
    icon: Sprout,
    desc: "Bulk raw agricultural exports, organic coconut produce, and grain commodities.",
    link: "/industries#agriculture",
  },
  {
    name: "Automotive",
    icon: Car,
    desc: "Precision molded rubber seals, copper wiring harnesses, and alloy components.",
    link: "/industries#automotive",
  },
  {
    name: "Retail & FMCG",
    icon: ShoppingBag,
    desc: "Private-label packaged oils, organic silks, consumer textiles, and packaged food.",
    link: "/industries#retail",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="py-28 sm:py-36 bg-apex-surface dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
              Sourcing Sectors
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apex-dark dark:text-white mt-4">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-apex-grey dark:text-gray-400 mt-2">
              Custom tailored export procurement workflows tailored for multinational enterprises across 6 major sectors.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-apex-purple hover:underline"
          >
            <span>View All Sector Specifications</span>
            <ArrowUpRight className="w-4 h-4" />
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
                  className="block h-full bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-apex-border dark:border-apex-borderDark shadow-apex-soft hover:shadow-apex-hover transition-all duration-400 hover:-translate-y-1.5 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-apex-surface dark:bg-zinc-800 text-apex-dark dark:text-white group-hover:bg-apex-purple group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-apex-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-apex-dark dark:text-white mb-2 group-hover:text-apex-purple transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-400 leading-relaxed font-normal">
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
