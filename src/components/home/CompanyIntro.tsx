"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Building2, ShieldCheck } from "lucide-react";

export default function CompanyIntro() {
  const highlights = [
    { title: "Direct Manufacturer Sourcing", desc: "Bypassing middlemen to deliver factory-direct pricing." },
    { title: "Rigorous Quality Audit", desc: "Pre-shipment SGS/Intertek inspections & lab testing." },
    { title: "End-to-End Export Logistics", desc: "Handling customs clearance, Incoterms, and global shipping." },
  ];

  return (
    <section className="py-28 sm:py-36 bg-apex-surface dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-apex-purple-light text-apex-purple text-xs font-bold uppercase tracking-wider"
          >
            <Building2 className="w-3.5 h-3.5" />
            Who We Are
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-apex-dark dark:text-white leading-tight"
          >
            Apex Vanguard Global is a trusted sourcing and export partner helping buyers connect with verified Indian manufacturers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-apex-grey dark:text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            We bridge the gap between global demand and Indian industrial excellence through transparent pricing, strict quality standards, and seamless international trade logistics.
          </motion.p>
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-apex-border dark:border-apex-borderDark shadow-apex-soft hover-lift"
            >
              <div className="w-12 h-12 rounded-2xl bg-apex-purple/10 text-apex-purple flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-apex-dark dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-apex-grey dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
