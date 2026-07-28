"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  DollarSign,
  Award,
  Clock,
  PackageCheck,
  Globe2,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: "Direct Factory Pricing",
      description: "We eliminate unnecessary intermediaries by contracting directly with primary Indian mills and agricultural plantations for maximum cost savings.",
      icon: DollarSign,
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/50",
    },
    {
      title: "Pre-Shipment Quality Audits",
      description: "Every container load is subjected to rigorous physical and lab testing (moisture, tensile strength, purity) with optional SGS/Intertek verification.",
      icon: ShieldCheck,
      color: "text-sky-500",
      bg: "bg-sky-50 dark:bg-sky-950/50",
    },
    {
      title: "Custom Export Packaging",
      description: "Seaworthy packaging engineered for long ocean transit: reefer airflow bags, VCI anti-rust wrapping, ISPM-15 wooden crates, and private labeling.",
      icon: PackageCheck,
      color: "text-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-950/50",
    },
    {
      title: "Multimodal Logistics & Insurance",
      description: "Full FCL/LCL vessel booking with primary shipping lines (Maersk, MSC, CMA CGM) accompanied by comprehensive marine transit insurance.",
      icon: Truck,
      color: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-950/50",
    },
    {
      title: "Flawless Regulatory Paperwork",
      description: "Guaranteed fast customs clearance with accurate Certificates of Origin (COO), Phytosanitary paperwork, APEDA licenses, and Form A documents.",
      icon: Award,
      color: "text-teal-500",
      bg: "bg-teal-50 dark:bg-teal-950/50",
    },
    {
      title: "On-Time Dispatch Guarantee",
      description: "Strict contract execution SLAs with dedicated account managers giving you real-time container tracking and status updates from port to destination.",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950/50",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 font-sans border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/80 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800">
            Competitive Trading Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Partner with Apex Vanguard Global?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We bridge the gap between Indian manufacturing excellence and international buyer standards with uncompromised quality, integrity, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt) => (
            <div
              key={pt.title}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 hover:shadow-lg transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl ${pt.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <pt.icon className={`w-6 h-6 ${pt.color}`} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {pt.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
