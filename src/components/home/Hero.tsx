"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-apex-dark text-white -mt-20">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85"
          alt="Apex Vanguard Global Sourcing Shipping Logistics"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom opacity-40 mix-blend-luminosity scale-105"
        />
        {/* Dark Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-apex-dark via-apex-dark/70 to-apex-dark/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-apex-purple/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
        {/* Verification Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium mb-8 text-zinc-200"
        >
          <ShieldCheck className="w-4 h-4 text-apex-purple animate-pulse" />
          <span>Verified Export House • ISO & APEDA Certified</span>
          <span className="w-1.5 h-1.5 rounded-full bg-apex-purple" />
          <span className="hidden sm:inline text-zinc-400">Global Logistics Ready</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] max-w-5xl mx-auto"
        >
          Connecting Global Buyers with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-zinc-100 to-apex-purple bg-clip-text text-transparent">
            Trusted Indian Manufacturers.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto font-normal leading-relaxed text-balance"
        >
          Premium sourcing solutions across Food Products, Construction Materials, Industrial Materials and Textiles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-apex-dark font-bold text-base px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:scale-105"
          >
            <span>Explore Products</span>
            <ArrowUpRight className="w-5 h-5 text-apex-purple" />
          </Link>

          <Link
            href="/request-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-apex-purple hover:bg-apex-purple-hover text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-apex-purple/30 hover:scale-105"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* AI Video Reel Badge Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 inline-flex items-center gap-2 text-xs text-zinc-400 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-800"
        >
          <Sparkles className="w-3.5 h-3.5 text-apex-purple" />
          <span>Cinematic Preview Mode (AI Video Ready)</span>
        </motion.div>
      </div>

      {/* Bottom Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-zinc-500 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-apex-purple"
          />
        </div>
      </div>
    </section>
  );
}
