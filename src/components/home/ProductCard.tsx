"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { ProductItem } from "@/lib/data";

interface ProductCardProps {
  product: ProductItem;
  onQuickView?: (product: ProductItem) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex-shrink-0 w-80 sm:w-88 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-zinc-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between"
    >
      {/* Image container with slow zoom on hover */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-zinc-800">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Category tag */}
        <span className="absolute top-4 left-4 z-10 text-[11px] font-bold uppercase tracking-wider bg-white/95 dark:bg-zinc-900/90 text-apex-purple backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
          {product.categoryName}
        </span>

        {/* Verified Origin Badge */}
        <span className="absolute top-4 right-4 z-10 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-zinc-900/90 text-white backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-apex-purple" />
          Verified
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <h3 className="text-lg font-extrabold text-apex-dark dark:text-white group-hover:text-apex-purple transition-colors line-clamp-1 tracking-tight">
            {product.name}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Specs highlight */}
        <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-gray-400">
          <span className="font-medium">MOQ: <span className="text-apex-dark dark:text-zinc-200 font-bold">{product.moq}</span></span>
          <span className="text-[11px] text-apex-purple font-extrabold">{product.countryOfOrigin}</span>
        </div>

        {/* Card Footer buttons */}
        <div className="pt-2 flex items-center gap-2">
          {onQuickView ? (
            <button
              onClick={() => onQuickView(product)}
              className="flex-1 text-center py-2.5 px-3 rounded-full text-xs font-bold bg-slate-100 dark:bg-zinc-800 hover:bg-apex-purple hover:text-white text-apex-dark dark:text-white transition-colors duration-300"
            >
              Specs & Details
            </button>
          ) : (
            <Link
              href={`/products?id=${product.id}`}
              className="flex-1 text-center py-2.5 px-3 rounded-full text-xs font-bold bg-slate-100 dark:bg-zinc-800 hover:bg-apex-purple hover:text-white text-apex-dark dark:text-white transition-colors duration-300"
            >
              View Specs
            </Link>
          )}

          <Link
            href={`/request-quote?product=${encodeURIComponent(product.name)}`}
            className="w-10 h-10 rounded-full bg-apex-purple text-white flex items-center justify-center hover:bg-apex-purple-hover transition-transform duration-300 group-hover:scale-105 shadow-md shadow-apex-purple/30"
            aria-label="Request Quote for product"
          >
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
