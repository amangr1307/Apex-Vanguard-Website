"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_DATA, ProductItem } from "@/lib/data";
import { Search, Filter, ShieldCheck, Download, ArrowUpRight, CheckCircle, X, Layers } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-apex-white dark:bg-zinc-950 min-h-screen py-12 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Export Product Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-apex-dark dark:text-white mt-4 tracking-tight">
            Verified Indian Exports
          </h1>
          <p className="text-base text-apex-grey dark:text-gray-300 mt-3">
            Explore our curated, ISO & APEDA compliant export inventory spanning Food, Construction, Industrial, and Textiles.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-apex-border dark:border-apex-borderDark">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: "All Categories" },
              { id: "food", label: "Food Products" },
              { id: "construction", label: "Construction Materials" },
              { id: "industrial", label: "Industrial Materials" },
              { id: "textiles", label: "Textiles" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === tab.id
                    ? "bg-apex-purple text-white shadow-md shadow-apex-purple/30"
                    : "bg-apex-surface dark:bg-zinc-900 text-apex-dark dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-apex-grey" />
            <input
              type="text"
              placeholder="Search product, spec, grade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-apex-surface dark:bg-zinc-900 border border-apex-border dark:border-apex-borderDark rounded-full pl-10 pr-4 py-2.5 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple transition-colors"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-apex-surface dark:bg-zinc-900 rounded-3xl border border-apex-border dark:border-zinc-800">
            <Layers className="w-10 h-10 text-apex-purple mx-auto mb-3" />
            <h3 className="text-lg font-bold text-apex-dark dark:text-white">No products found</h3>
            <p className="text-xs text-apex-grey dark:text-gray-400 mt-1">Try adjusting your category filter or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-apex-border dark:border-apex-borderDark shadow-apex-soft hover:shadow-apex-hover transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-60 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-zinc-900/90 text-apex-purple px-3 py-1 rounded-full border border-white/20">
                    {product.categoryName}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-apex-dark dark:text-white group-hover:text-apex-purple transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-apex-grey dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-zinc-800 text-xs text-apex-grey dark:text-gray-400 space-y-1">
                    <div className="flex justify-between">
                      <span>MOQ:</span>
                      <span className="font-semibold text-apex-dark dark:text-white">{product.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Time:</span>
                      <span className="font-semibold text-apex-dark dark:text-white">{product.deliveryTime}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="flex-1 py-2.5 px-3 rounded-full text-xs font-semibold bg-apex-surface dark:bg-zinc-800 hover:bg-apex-purple hover:text-white text-apex-dark dark:text-white transition-colors"
                    >
                      Specifications & Details
                    </button>
                    <Link
                      href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                      className="w-10 h-10 rounded-full bg-apex-purple text-white flex items-center justify-center hover:bg-apex-purple-hover transition-transform group-hover:scale-105 shadow-md shadow-apex-purple/30"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DETAILED SPECIFICATIONS MODAL */}
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in-up">
            <div className="bg-white dark:bg-zinc-900 border border-apex-border dark:border-zinc-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl">
              <button
                onClick={() => setActiveProduct(null)}
                aria-label="Close product modal"
                className="absolute top-6 right-6 p-2.5 rounded-full bg-apex-surface dark:bg-zinc-800 text-apex-dark dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Image & Download PDF */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={activeProduct.imageUrl}
                      alt={activeProduct.name}
                      fill
                      sizes="400px"
                      className="object-cover"
                    />
                  </div>
                  <button
                    onClick={() => alert(`Downloading official PDF Catalogue & Spec Sheet for ${activeProduct.name}`)}
                    className="w-full py-3 rounded-2xl border border-apex-border dark:border-zinc-700 bg-apex-surface dark:bg-zinc-800 text-apex-dark dark:text-white text-xs font-bold hover:bg-apex-purple hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Specification Sheet</span>
                  </button>
                </div>

                {/* Right Column: Specs & Forms */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-apex-purple bg-apex-purple-light px-3 py-1 rounded-full">
                      {activeProduct.categoryName}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-apex-dark dark:text-white mt-2">
                      {activeProduct.name}
                    </h2>
                    <p className="text-xs text-apex-grey dark:text-gray-300 mt-2 leading-relaxed">
                      {activeProduct.fullDescription}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-apex-dark dark:text-white mb-2">
                      Technical Parameters
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-apex-grey dark:text-gray-300">
                      {activeProduct.specifications.map((s, i) => (
                        <li key={i} className="flex items-center gap-2 bg-apex-surface dark:bg-zinc-800/80 p-2.5 rounded-xl border border-apex-border dark:border-zinc-800">
                          <CheckCircle className="w-3.5 h-3.5 text-apex-purple shrink-0" />
                          <span className="truncate">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sizes & Packaging */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-apex-surface dark:bg-zinc-800/60 p-4 rounded-xl border border-apex-border dark:border-zinc-800">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Available Sizes</span>
                      <p className="font-semibold text-apex-dark dark:text-white">{activeProduct.availableSizes.join(", ")}</p>
                    </div>
                    <div className="bg-apex-surface dark:bg-zinc-800/60 p-4 rounded-xl border border-apex-border dark:border-zinc-800">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Packaging Options</span>
                      <p className="font-semibold text-apex-dark dark:text-white">{activeProduct.packagingOptions.join(", ")}</p>
                    </div>
                  </div>

                  {/* MOQ & Delivery */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 text-white text-xs">
                    <div>
                      <span className="text-zinc-400 text-[10px] uppercase block">Minimum Order</span>
                      <span className="font-bold">{activeProduct.moq}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-[10px] uppercase block">Origin</span>
                      <span className="font-bold text-apex-purple">{activeProduct.countryOfOrigin}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-[10px] uppercase block">Est. Delivery</span>
                      <span className="font-bold">{activeProduct.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2">
                    <Link
                      href={`/request-quote?product=${encodeURIComponent(activeProduct.name)}`}
                      onClick={() => setActiveProduct(null)}
                      className="w-full py-3.5 px-6 rounded-full bg-apex-purple hover:bg-apex-purple-hover text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <span>Request Instant Quotation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
