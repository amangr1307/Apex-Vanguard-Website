"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PRODUCTS_DATA, CATEGORIES_INFO, ProductItem } from "@/lib/data";
import { useCurrency } from "@/context/CurrencyContext";
import { CustomSourcingBanner } from "@/components/home/CustomSourcingBanner";
import {
  Search,
  Filter,
  CheckCircle2,
  Globe,
  Package,
  Truck,
  ArrowRight,
  X,
  FileText,
  PackagePlus,
  Info,
} from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const { formatPrice, currentCurrencyDetails } = useCurrency();

  useEffect(() => {
    if (searchParams.get("category")) {
      setSelectedCategory(searchParams.get("category") || "all");
    }
    if (searchParams.get("search")) {
      setSearchQuery(searchParams.get("search") || "");
    }
  }, [searchParams]);

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specifications.some((spec) =>
        spec.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Page Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800">
            Export Product Portfolios
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight">
            International Product Catalog
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Browse our audited product lines across 6 major sectors. All products feature full technical specifications, seaworthy export packaging, and MOQ parameters.
          </p>

          {/* Search & Filter Inputs */}
          <div className="max-w-2xl mx-auto pt-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search products by name, specs, or application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-700 text-xs focus:outline-none focus:border-sky-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6 Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-slate-900">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All Categories ({PRODUCTS_DATA.length})
          </button>

          {CATEGORIES_INFO.map((cat) => {
            const count = PRODUCTS_DATA.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900 rounded-3xl border border-slate-800 space-y-4">
            <Info className="w-10 h-10 text-sky-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">No products found matching your filter</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              We may not have listed this exact item online yet, but we can source it directly from our audited Indian supplier network!
            </p>
            <div className="pt-2">
              <Link
                href="/request-product"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-400 transition-colors"
              >
                <PackagePlus className="w-4 h-4" />
                Request Custom Sourcing
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-sky-500/50 shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 text-sky-400 font-bold text-[10px] uppercase border border-slate-800 backdrop-blur-md">
                      {product.categoryName}
                    </span>

                    {product.approxPriceUSD && (
                      <span className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-emerald-950/90 text-emerald-300 font-mono font-extrabold text-xs border border-emerald-800 backdrop-blur-md">
                        Est. ~{formatPrice(product.approxPriceUSD)}
                      </span>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {product.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 font-semibold">Origin:</span>
                        <span className="font-bold text-white">{product.countryOfOrigin}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 font-semibold">MOQ:</span>
                        <span className="font-bold text-sky-400">{product.moq}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                  >
                    <span>View Specifications</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                    className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote (RFQ)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Product Specification Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-sky-400 bg-sky-950 px-2.5 py-1 rounded-md border border-sky-800">
                {activeModalProduct.categoryName}
              </span>
              <h2 className="text-2xl font-extrabold text-white">{activeModalProduct.name}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{activeModalProduct.fullDescription}</p>
            </div>

            {/* Specifications Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technical Specifications</h4>
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-1.5 text-xs text-slate-200">
                {activeModalProduct.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Packaging Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-1">
                <span className="font-bold text-sky-400 block mb-1">Packaging Options</span>
                <p className="text-slate-300">{activeModalProduct.packagingOptions.join(" • ")}</p>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-1">
                <span className="font-bold text-sky-400 block mb-1">Minimum Order Quantity (MOQ)</span>
                <p className="text-slate-300">{activeModalProduct.moq}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/request-quote?product=${encodeURIComponent(activeModalProduct.name)}`}
                className="flex-1 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-colors"
              >
                Request Quote for {activeModalProduct.name}
              </Link>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Sourcing Banner */}
      <CustomSourcingBanner />
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white p-20 text-center">Loading product catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
