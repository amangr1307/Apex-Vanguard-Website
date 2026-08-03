"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import CompanyIntro from "@/components/home/CompanyIntro";
import CategorySection from "@/components/home/CategorySection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import SourcingTimeline from "@/components/home/SourcingTimeline";
import CTASection from "@/components/home/CTASection";
import { PRODUCTS_DATA, CATEGORIES_INFO, ProductItem } from "@/lib/data";
import { X, ShieldCheck, Download, ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const indProducts = PRODUCTS_DATA.filter((p) => p.category === "industrial");
  const texProducts = PRODUCTS_DATA.filter((p) => p.category === "textiles");
  const foodProducts = PRODUCTS_DATA.filter((p) => p.category === "food");
  const constProducts = PRODUCTS_DATA.filter((p) => p.category === "construction");

  return (
    <div className="w-full bg-gradient-to-b from-slate-50/50 via-white to-gray-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: COMPANY INTRO */}
      <CompanyIntro />

      {/* SECTION 3: INDUSTRIAL MATERIALS */}
      <CategorySection
        categoryId="industrial"
        categoryName="Industrial Materials"
        subtitle="High-purity electrolytic copper cathodes, custom uPVC profiles, and engineering polymer resins."
        bannerImage={CATEGORIES_INFO[0].bannerImage}
        products={indProducts}
        onQuickView={(p) => setSelectedProduct(p)}
      />

      {/* SECTION 4: TEXTILES (PURE SILK ONLY) */}
      <CategorySection
        categoryId="textiles"
        categoryName="Textiles & Pure Silk"
        subtitle="Exquisite 100% Grade 6A pure Mulberry silk, handloom raw Tussar silk dupion, and pure silk yarns."
        bannerImage={CATEGORIES_INFO[1].bannerImage}
        products={texProducts}
        onQuickView={(p) => setSelectedProduct(p)}
      />

      {/* SECTION 5: FOOD PRODUCTS */}
      <CategorySection
        categoryId="food"
        categoryName="Food Products"
        subtitle="Premium agricultural exports sourced directly from audited Indian farm cooperatives under APEDA standards."
        bannerImage={CATEGORIES_INFO[2].bannerImage}
        products={foodProducts}
        onQuickView={(p) => setSelectedProduct(p)}
      />

      {/* SECTION 6: CONSTRUCTION MATERIALS */}
      <CategorySection
        categoryId="construction"
        categoryName="Construction Materials"
        subtitle="Architectural natural Makrana marble slabs, high-yield TMT structural steel rebars, and hollow masonry blocks."
        bannerImage={CATEGORIES_INFO[3].bannerImage}
        products={constProducts}
        onQuickView={(p) => setSelectedProduct(p)}
      />

      {/* SECTION 7: WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SECTION 8: INDUSTRIES WE SERVE */}
      <IndustriesGrid />

      {/* SECTION 9: GLOBAL SOURCING PROCESS */}
      <SourcingTimeline />

      {/* SECTION 10: CALL TO ACTION */}
      <CTASection />

      {/* QUICK VIEW SPECIFICATIONS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white dark:bg-zinc-900 border border-apex-border dark:border-apex-borderDark rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-apex-surface dark:bg-zinc-800 text-apex-dark dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-apex-purple bg-apex-purple-light px-3 py-1 rounded-full w-fit mb-4">
              {selectedProduct.categoryName}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-apex-dark dark:text-white mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-300 leading-relaxed mb-6">
              {selectedProduct.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Specifications */}
              <div className="bg-apex-surface dark:bg-zinc-800/60 p-5 rounded-2xl border border-apex-border dark:border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-apex-dark dark:text-white mb-3">
                  Technical Specifications
                </h4>
                <ul className="space-y-2 text-xs text-apex-grey dark:text-gray-300">
                  {selectedProduct.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-apex-purple shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="bg-apex-surface dark:bg-zinc-800/60 p-5 rounded-2xl border border-apex-border dark:border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-apex-dark dark:text-white mb-3">
                  Primary Applications
                </h4>
                <ul className="space-y-2 text-xs text-apex-grey dark:text-gray-300">
                  {selectedProduct.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Export Details Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-zinc-900 text-white text-xs mb-6">
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Origin</span>
                <span className="font-bold">{selectedProduct.countryOfOrigin}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-semibold">MOQ</span>
                <span className="font-bold">{selectedProduct.moq}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Lead Time</span>
                <span className="font-bold">{selectedProduct.deliveryTime}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Packaging</span>
                <span className="font-bold truncate block">{selectedProduct.packagingOptions[0]}</span>
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={`/request-quote?product=${encodeURIComponent(selectedProduct.name)}`}
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:flex-1 text-center py-3 px-6 rounded-full bg-apex-purple hover:bg-apex-purple-hover text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Quotation for {selectedProduct.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={() => alert(`Downloading Technical Spec Sheet for ${selectedProduct.name}...`)}
                className="w-full sm:w-auto py-3 px-5 rounded-full border border-apex-border dark:border-zinc-700 text-apex-dark dark:text-white text-xs font-semibold hover:bg-apex-surface dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-apex-purple" />
                <span>PDF Spec Sheet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
