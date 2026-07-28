"use client";

import React from "react";
import Link from "next/link";
import {
  Globe2,
  ShieldCheck,
  Award,
  CheckCircle,
  Truck,
  FileText,
  Users,
  Building2,
  ArrowRight,
  PackagePlus,
  Compass,
  Target,
} from "lucide-react";
import { CertificationsSection } from "@/components/home/CertificationsSection";

export default function AboutPage() {
  const steps = [
    {
      number: "01",
      title: "Supplier Vetting & Factory Audit",
      description: "We verify GST/IEC credentials, assess manufacturing plant machinery, financial solvency, and pre-production raw material quality.",
    },
    {
      number: "02",
      title: "Quality & Specifications Testing",
      description: "Our quality control engineers inspect product dimensions, chemical purity, and moisture levels against your precise contract parameters.",
    },
    {
      number: "03",
      title: "Custom Packaging & Seaworthy Prep",
      description: "Goods are prepared with ISPM-15 heat-treated wood, VCI anti-rust wrapping, reefer temperature controls, or OEM private label branding.",
    },
    {
      number: "04",
      title: "Customs Clearance & Vessel Freight",
      description: "We issue complete Certificate of Origin, Bill of Lading, Phytosanitary paperwork, and manage vessel booking to your destination port.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header Banner */}
      <section className="relative py-20 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800">
            Corporate Profile & Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            About Apex Vanguard Global
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Headquartered in Tamil Nadu, India, Apex Vanguard Global is an accredited international trading house and bespoke global sourcing enterprise bridging Indian manufacturing excellence with global industry standards.
          </p>
        </div>
      </section>

      {/* Corporate Narrative & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Reinventing International Trade Through Integrity & Precision
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Apex Vanguard Global was established with a singular objective: to serve as a reliable, transparent, and quality-obsessed trade link between international buyers and top-tier Indian producers.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Instead of operating as a traditional single-product vendor, we operate as an end-to-end **Sourcing & Trade Facilitator**. Our extensive network encompasses certified agricultural plantations in Pollachi, steel rebar rolling mills, Rajasthan marble quarries, copper refineries, and polymer processing plants across India.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <Compass className="w-6 h-6 text-sky-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Our Mission</h4>
                <p className="text-xs text-slate-400">To deliver zero-defect Indian commodities and manufactured goods with complete regulatory compliance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <Target className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Our Vision</h4>
                <p className="text-xs text-slate-400">To be recognized worldwide as the most trusted multi-sector sourcing partner for international enterprises.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Statutory Compliance & Standards
            </h3>

            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Import Export Code (IEC) Authorization:</strong>
                  Official DGFT government authorization for cross-border maritime & air shipments.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">APEDA & FSSAI Food Safety Licenses:</strong>
                  Strict hygiene, laboratory testing, and phytosanitary certification for food exports.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">MSME Udyam & GST Registered:</strong>
                  Recognized trade status ensuring transparent tax processing and financial stability.
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/request-product"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs transition-colors"
              >
                <PackagePlus className="w-4 h-4" />
                <span>Request Custom Product Sourcing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our 4-Step Sourcing Process */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
              Methodology & Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 4-Step Trade & Sourcing Process
            </h2>
            <p className="text-sm text-slate-300">
              From contract signing to final container discharge at your port, every phase is managed with standard operating procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.number} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <span className="text-4xl font-black text-sky-500/40 block font-mono">{st.number}</span>
                <h3 className="text-lg font-bold text-white">{st.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Component */}
      <CertificationsSection />
    </main>
  );
}
