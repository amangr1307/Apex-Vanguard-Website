"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Building2, ShieldCheck } from "lucide-react";

export default function CompanyIntro() {
  const highlights = [
    { title: "Direct Factory Sourcing", desc: "Bypassing intermediaries to deliver true ex-factory transparent pricing." },
    { title: "Rigorous Quality Audit", desc: "Pre-shipment ISO, APEDA & Intertek lab inspections." },
    { title: "End-to-End Export Logistics", desc: "Complete customs, Incoterms, and door-to-port vessel tracking." },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-apex-purple/10 border border-apex-purple/20 text-apex-purple text-xs font-extrabold uppercase tracking-widest"
          >
            <Building2 className="w-4 h-4 text-apex-purple" />
            <span>Industrial Trade Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-apex-dark dark:text-white leading-[1.12]"
          >
            Connecting International Enterprise Buyers with Verified Indian Manufacturers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-600 dark:text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            We bridge global commercial demand with Indian manufacturing scale across Industrial Metals, Pure Silk Textiles, Farm Commodities, and Construction Steel through verified compliance and transparent pricing.
          </motion.p>

          {/* Social Proof Avatars & Trust Rating */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold text-zinc-500"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Buyer Avatar 1" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Buyer Avatar 2" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Buyer Avatar 3" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Buyer Avatar 4" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">★★★★★</div>
              <span className="text-apex-dark dark:text-white font-bold">4.9/5</span>
              <span>Trusted by 140+ Importers across Europe, US & Middle East</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-apex-purple/10 text-apex-purple flex items-center justify-center mb-6 border border-apex-purple/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-apex-dark dark:text-white mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-gray-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
