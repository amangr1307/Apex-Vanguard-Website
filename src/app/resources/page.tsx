"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RESOURCE_ARTICLES, FAQ_DATA } from "@/lib/data";
import {
  BookOpen,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Package,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function ResourcesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const incotermsSummary = [
    { term: "FOB (Free on Board)", sellerRisk: "Loaded onto vessel in India", buyerRisk: "Ocean freight & destination port", suitableFor: "Maritime FCL/LCL" },
    { term: "CIF (Cost, Insurance & Freight)", sellerRisk: "Delivered to destination port + Insurance", buyerRisk: "Destination port customs & unloading", suitableFor: "Bulk Maritime Commodities" },
    { term: "CFR (Cost & Freight)", sellerRisk: "Delivered to destination port (No Insurance)", buyerRisk: "Marine Insurance & destination import", suitableFor: "Maritime Cargo" },
    { term: "EXW (Ex-Works)", sellerRisk: "Factory gate in India", buyerRisk: "All freight from factory door", suitableFor: "Buyers with own forwarders" },
    { term: "DDP (Delivered Duty Paid)", sellerRisk: "Doorstep delivery in buyer country + Tariffs", buyerRisk: "Unloading at destination warehouse", suitableFor: "Turnkey Doorstep Delivery" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800">
            Export Intelligence & Tools
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight">
            International Trade Resources & Guides
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Knowledge hub for global buyers and importers: Incoterms 2020 reference tables, export packaging standards, compliance guides, and trade FAQs.
          </p>
        </div>
      </section>

      {/* Incoterms 2020 Quick Reference Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-sky-400" />
            <h2 className="text-2xl font-extrabold text-white">Incoterms 2020 Quick Reference Guide</h2>
          </div>
          <p className="text-xs text-slate-400">
            Understand risk transfer points, freight responsibilities, and insurance obligations when sourcing goods from Apex Vanguard Global.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Incoterm</th>
                  <th className="p-4">Seller Responsibility (India)</th>
                  <th className="p-4">Buyer Responsibility</th>
                  <th className="p-4">Recommended Freight Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {incotermsSummary.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 font-bold text-sky-400">{item.term}</td>
                    <td className="p-4">{item.sellerRisk}</td>
                    <td className="p-4">{item.buyerRisk}</td>
                    <td className="p-4 font-semibold text-slate-200">{item.suitableFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Export Guides Articles */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Export & Sourcing Guides</h2>
              <p className="text-xs text-slate-400 mt-1">Practical insights on international trade compliance and logistics.</p>
            </div>
            <Link href="/blog" className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1">
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCE_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 hover:border-sky-500/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-sky-400 uppercase tracking-wider">{article.category}</span>
                    <span className="text-slate-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">{article.title}</h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{article.summary}</p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>By {article.author}</span>
                  <Link href="/blog" className="text-sky-400 font-bold hover:underline">Read Guide →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade FAQ Accordion */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <HelpCircle className="w-8 h-8 text-sky-400 mx-auto" />
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Trade Questions</h2>
          <p className="text-xs text-slate-400">Everything you need to know about ordering, inspections, payment terms, and MOQs.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-white hover:bg-slate-800/60 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-sky-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
