"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { ProductItem } from "@/lib/data";
import ProductCard from "./ProductCard";
import { useRef } from "react";

interface CategorySectionProps {
  categoryId: string;
  categoryName: string;
  subtitle: string;
  bannerImage: string;
  products: ProductItem[];
  reverseBanner?: boolean;
  onQuickView?: (product: ProductItem) => void;
}

export default function CategorySection({
  categoryId,
  categoryName,
  subtitle,
  bannerImage,
  products,
  onQuickView,
}: CategorySectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={categoryId} className="py-20 sm:py-28 border-t border-apex-border dark:border-apex-borderDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Cinematic Premium Banner */}
        <div className="relative rounded-4xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] mb-12 group">
          <Image
            src={bannerImage}
            alt={categoryName}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          
          <div className="absolute inset-0 p-8 sm:p-14 flex flex-col justify-end max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-apex-purple bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full w-fit">
                <Layers className="w-3.5 h-3.5" />
                Featured Category
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {categoryName}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                {subtitle}
              </p>
              <div className="pt-2">
                <Link
                  href={`/products?category=${categoryId}`}
                  className="inline-flex items-center gap-2 bg-white text-apex-dark hover:bg-apex-purple hover:text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
                >
                  <span>Explore {categoryName}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section Header & Slider Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-apex-dark dark:text-white">
              Catalog Items in {categoryName}
            </h3>
            <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-400 mt-1">
              Export-ready verified items with instant RFQ capability.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollSlider("left")}
              aria-label="Scroll left"
              className="p-2.5 rounded-full bg-apex-surface dark:bg-zinc-800 text-apex-dark dark:text-white hover:bg-apex-purple hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              aria-label="Scroll right"
              className="p-2.5 rounded-full bg-apex-surface dark:bg-zinc-800 text-apex-dark dark:text-white hover:bg-apex-purple hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider of Product Cards */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div key={product.id} className="snap-start">
              <ProductCard product={product} onQuickView={onQuickView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
