"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, FileText } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-apex-purple text-white relative overflow-hidden">
      {/* Background Accent Graphics */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold bg-white/20 text-white px-4 py-1.5 rounded-full border border-white/20">
            Custom Procurement Desk
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Need a Product? Can&apos;t find it? <br className="hidden sm:inline" />
            <span className="underline decoration-white/40 underline-offset-8">We will source it for you.</span>
          </h2>

          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Our extensive network covers thousands of certified Indian manufacturers. Send us your technical drawing or specifications for a fast feasibility study and direct quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/request-product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-apex-dark font-bold text-base px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:scale-105"
            >
              <Search className="w-5 h-5 text-apex-purple" />
              <span>Request Product</span>
              <ArrowUpRight className="w-5 h-5 text-apex-purple" />
            </Link>

            <Link
              href="/request-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-apex-dark text-white font-bold text-base px-8 py-4 rounded-full hover:bg-zinc-900 transition-all duration-300 shadow-xl hover:scale-105 border border-white/20"
            >
              <FileText className="w-5 h-5 text-apex-purple" />
              <span>Request Quote</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
