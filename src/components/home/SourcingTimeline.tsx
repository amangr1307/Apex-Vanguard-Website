"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  SlidersHorizontal,
  CheckCircle,
  FileText,
  Factory,
  ShieldCheck,
  FileCheck2,
  Ship,
  Truck,
} from "lucide-react";

const STEPS = [
  { step: "01", title: "Buyer Inquiry", icon: FileSearch, desc: "Submit product specifications and target volume." },
  { step: "02", title: "Requirement Analysis", icon: SlidersHorizontal, desc: "Review compliance, standard specifications & Incoterms." },
  { step: "03", title: "Supplier Selection", icon: CheckCircle, desc: "Match with audited, ISO-certified manufacturing plants." },
  { step: "04", title: "Quotation", icon: FileText, desc: "Transparent FOB/CIF factory direct pricing proposal." },
  { step: "05", title: "Production", icon: Factory, desc: "Monitored batch manufacturing with progress tracking." },
  { step: "06", title: "Quality Inspection", icon: ShieldCheck, desc: "Rigorous SGS / Intertek lab testing & pre-shipment audit." },
  { step: "07", title: "Documentation", icon: FileCheck2, desc: "Certificate of Origin, Phytosanitary, and BL release." },
  { step: "08", title: "Shipping", icon: Ship, desc: "Vessel container loading & sea freight booking." },
  { step: "09", title: "Delivery", icon: Truck, desc: "Final port clearance & door-to-door port arrival." },
];

export default function SourcingTimeline() {
  return (
    <section className="py-28 sm:py-36 border-t border-apex-border dark:border-apex-borderDark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Transparent Sourcing Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apex-dark dark:text-white mt-4">
            Global Sourcing Process
          </h2>
          <p className="text-base text-apex-grey dark:text-gray-400 mt-2">
            A battle-tested 9-step execution framework designed for risk-free international trade.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Animated Connecting Line behind steps */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-1 bg-gray-200 dark:bg-zinc-800 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-apex-purple via-indigo-500 to-apex-purple"
            />
          </div>

          {/* Grid / Horizontal Flex */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 relative z-10">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-apex-border dark:border-zinc-700 text-apex-dark dark:text-white flex items-center justify-center mb-4 shadow-md group-hover:border-apex-purple group-hover:bg-apex-purple group-hover:text-white transition-all duration-300 relative">
                    <Icon className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 text-[10px] font-extrabold bg-apex-purple text-white px-2 py-0.5 rounded-full shadow">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-apex-dark dark:text-white group-hover:text-apex-purple transition-colors mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-apex-grey dark:text-gray-400 leading-tight">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
