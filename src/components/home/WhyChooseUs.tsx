"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, DollarSign, Globe2 } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Manufacturers",
    description: "Every factory undergoes thorough physical audits, financial background checks, and ISO/CE export accreditation verification.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Pre-shipment batch testing, container loading supervision, and Third-Party Lab certifications (SGS, Intertek, TUV).",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Direct-from-source bulk manufacturing contracts eliminating trading markups, ensuring maximal margin profitability.",
  },
  {
    icon: Globe2,
    title: "Global Export Support",
    description: "Complete handling of custom export documentations, BL releases, Certificate of Origin, and international Incoterms (FOB, CIF, CFR).",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 sm:py-36 bg-apex-dark text-white relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-apex-purple/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple/10 border border-apex-purple/20 px-4 py-1.5 rounded-full">
            Trust & Security
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Why International Buyers Choose Us
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal">
            Eliminating risk in overseas procurement with institutional transparency and standard operating procedures.
          </p>
        </div>

        {/* 4 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-3xl hover:border-apex-purple/60 transition-all duration-500 hover:-translate-y-2 group shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-apex-purple/20 text-apex-purple flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-apex-purple group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-apex-purple transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
