"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

const SAMPLE_POSTS = [
  {
    id: "post-1",
    title: "Understanding Indian Export Regulations & APEDA Certification for Food Shipments",
    excerpt: "A comprehensive guide for international buyers on navigating APEDA, FSSAI, and phytosanitary documentation when importing Indian agricultural commodities.",
    date: "July 24, 2026",
    readTime: "6 min read",
    category: "Export Compliance",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "post-2",
    title: "Global Copper Supply Chains: Sourcing Electrolytic Cathodes directly from Indian Refineries",
    excerpt: "Analyzing LME Grade A purity parameters, freight container logistics, and price hedging strategies for industrial metal importers.",
    date: "July 18, 2026",
    readTime: "8 min read",
    category: "Industrial Metals",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "post-3",
    title: "Navigating Incoterms 2020: FOB vs CIF vs CFR for Maritime Container Trade",
    excerpt: "Key cost factors, freight liability transitions, and insurance considerations for global procurement officers.",
    date: "July 10, 2026",
    readTime: "5 min read",
    category: "Trade Logistics",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full bg-apex-white dark:bg-zinc-950 py-12 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Export Market Intelligence
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-apex-dark dark:text-white mt-4 tracking-tight">
            Apex Vanguard Journal
          </h1>
          <p className="text-base text-apex-grey dark:text-gray-300 mt-3 leading-relaxed">
            Insights, market trends, compliance updates, and sourcing guides curated for global supply chain leaders.
          </p>
        </div>

        {/* Featured Post Banner */}
        <div className="bg-apex-surface dark:bg-zinc-900 rounded-4xl p-8 sm:p-12 border border-apex-border dark:border-apex-borderDark shadow-apex-soft mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={SAMPLE_POSTS[0].image}
              alt={SAMPLE_POSTS[0].title}
              fill
              sizes="600px"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3 text-xs text-apex-purple font-bold uppercase tracking-wider">
              <span>{SAMPLE_POSTS[0].category}</span>
              <span>•</span>
              <span className="text-gray-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {SAMPLE_POSTS[0].readTime}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-apex-dark dark:text-white">
              {SAMPLE_POSTS[0].title}
            </h2>
            <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-300 leading-relaxed">
              {SAMPLE_POSTS[0].excerpt}
            </p>
            <div className="pt-2">
              <button onClick={() => alert("Article view mode ready for production blog engine.")} className="inline-flex items-center gap-2 bg-apex-purple text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-apex-purple-hover transition-colors">
                <span>Read Full Report</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-apex-border dark:border-apex-borderDark shadow-apex-soft hover-lift flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase text-apex-purple bg-apex-purple-light px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-apex-dark dark:text-white mt-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-apex-grey dark:text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between text-xs text-gray-400">
                  <span>{post.date}</span>
                  <button onClick={() => alert("Article view mode ready for production blog engine.")} className="text-apex-purple font-semibold hover:underline flex items-center gap-1">
                    Read Article <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
