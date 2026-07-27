"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye, Compass, Award, Globe, Users, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const VALUES = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Integrity",
      desc: "Zero tolerance for substandard grades or specification mismatches. Transparent pricing with full disclosure.",
    },
    {
      icon: Target,
      title: "Export Compliance",
      desc: "Absolute alignment with APEDA, ISO, CE, and international maritime trade regulations.",
    },
    {
      icon: Compass,
      title: "Buyer-First Agility",
      desc: "Tailored Incoterms, flexible payment terms (LC, TT), and dedicated single-point sourcing managers.",
    },
  ];

  const REACH_STATS = [
    { count: "45+", label: "Verified Manufacturing Hubs" },
    { count: "28+", label: "Export Destination Countries" },
    { count: "100%", label: "Pre-Shipment QA Inspection Pass Rate" },
    { count: "$150M+", label: "Facilitated Trade Volume" },
  ];

  return (
    <div className="w-full bg-apex-white dark:bg-zinc-950 transition-colors py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-4 py-1.5 rounded-full">
            About Apex Vanguard Global
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-apex-dark dark:text-white">
            Architecting the Future of <br />
            <span className="text-apex-purple">Cross-Border Sourcing.</span>
          </h1>
          <p className="text-lg text-apex-grey dark:text-gray-300 leading-relaxed font-normal">
            We are an enterprise sourcing and export management firm headquartered in India. Our mission is to connect global buyers, importers, and industrial conglomerates directly with vetted, high-capacity Indian manufacturers.
          </p>
        </div>

        {/* Company Overview Image Banner */}
        <div className="relative rounded-4xl overflow-hidden h-[400px] sm:h-[500px] mb-24 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80"
            alt="Apex Vanguard Operations"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-10 left-8 sm:left-12 right-8 text-white max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-apex-purple font-bold">Our Heritage & Commitment</span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-2">Institutional Rigor in Overseas Trade</h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
              Eliminating the opacity of traditional trade intermediaries by introducing strict factory audits, digital supply chain tracking, and standardized laboratory testing.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-apex-surface dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-apex-border dark:border-apex-borderDark shadow-apex-soft"
          >
            <div className="w-14 h-14 rounded-2xl bg-apex-purple text-white flex items-center justify-center mb-6 shadow-md shadow-apex-purple/30">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-apex-dark dark:text-white mb-4">Our Mission</h3>
            <p className="text-apex-grey dark:text-gray-300 text-sm leading-relaxed">
              To empower international businesses with seamless access to India&apos;s manufacturing powerhouses. We achieve this by enforcing rigorous quality control, competitive direct factory pricing, and friction-free logistics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-apex-surface dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-apex-border dark:border-apex-borderDark shadow-apex-soft"
          >
            <div className="w-14 h-14 rounded-2xl bg-apex-dark dark:bg-zinc-800 text-white flex items-center justify-center mb-6 shadow-md">
              <Eye className="w-7 h-7 text-apex-purple" />
            </div>
            <h3 className="text-2xl font-extrabold text-apex-dark dark:text-white mb-4">Our Vision</h3>
            <p className="text-apex-grey dark:text-gray-300 text-sm leading-relaxed">
              To become the global benchmark for Indian export sourcing—trusted by Fortune 500 corporations, government contractors, and high-growth distributors across 50+ countries.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-apex-purple font-bold">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-apex-dark dark:text-white mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-apex-border dark:border-apex-borderDark shadow-apex-soft hover-lift"
                >
                  <div className="w-12 h-12 rounded-2xl bg-apex-purple/10 text-apex-purple flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-apex-dark dark:text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Reach Counter */}
        <div className="bg-apex-dark text-white rounded-4xl p-10 sm:p-16 mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-apex-purple/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Our Global Footprint</h2>
            <p className="text-sm text-zinc-400 mt-2">Connecting North America, Europe, the Middle East, and Southeast Asia to India.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {REACH_STATS.map((s) => (
              <div key={s.label} className="p-4 border-r last:border-r-0 border-zinc-800">
                <span className="text-3xl sm:text-5xl font-black text-apex-purple block">{s.count}</span>
                <span className="text-xs text-zinc-400 font-medium mt-2 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-apex-surface dark:bg-zinc-900 p-12 rounded-3xl border border-apex-border dark:border-zinc-800">
          <h3 className="text-2xl font-bold text-apex-dark dark:text-white">Partner with Apex Vanguard Global</h3>
          <p className="text-sm text-apex-grey dark:text-gray-400 mt-2 max-w-xl mx-auto">
            Ready to streamline your Indian supply chain? Speak directly with our procurement strategists.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/request-quote"
              className="bg-apex-purple text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-apex-purple-hover transition-colors shadow-lg shadow-apex-purple/20 flex items-center gap-2"
            >
              <span>Initiate RFQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
