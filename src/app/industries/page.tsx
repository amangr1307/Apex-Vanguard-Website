"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS_DATA } from "@/lib/data";

const INDUSTRY_SECTORS = [
  {
    id: "construction",
    name: "Construction & Infrastructure",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description: "Sourcing architectural natural marble, high-yield TMT steel rebars, and AAC hollow masonry blocks for high-rise developments, civil bridges, and commercial estates.",
    highlights: ["IS 1786 & ASTM Compliant Rebars", "Gangsaw Polished Natural Marble Slabs", "Lightweight AAC Thermal Masonry"],
    relatedCategory: "construction",
  },
  {
    id: "manufacturing",
    name: "Heavy Manufacturing & Heavy Industry",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    description: "Providing high-purity electrolytic copper cathodes, custom extrusions, industrial polymers, and synthetic rubber compounds for cable factories and electrical OEMs.",
    highlights: ["99.99% Grade A Copper Cathodes", "Precision uPVC Extrusion Die Profiles", "Virgin HDPE / LLDPE Resin Granules"],
    relatedCategory: "industrial",
  },
  {
    id: "food-processing",
    name: "Food Processing & Commodity Distribution",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    description: "Direct farm-gate sourcing of mature husked coconuts, cold pressed virgin coconut oil, Sharbati wheat flour (Atta), and refined sunflower oil under strict APEDA compliance.",
    highlights: ["100% Cold-Pressed Organic VCO", "APEDA Certified Agricultural Shipments", "Bulk Reefer & Flexitank Logistics"],
    relatedCategory: "food",
  },
  {
    id: "agriculture",
    name: "Agriculture & Agro Commodities",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    description: "Bulk raw agricultural exports, organic coconut produce, grain commodities, and specialized oilseeds sourced directly from farmer producer organizations (FPOs).",
    highlights: ["Traceable Farm Sourcing", "Custom Moisture & Quality Grading", "Bulk Vessel & FCL Freight Booking"],
    relatedCategory: "food",
  },
  {
    id: "automotive",
    name: "Automotive & OEM Supply Chain",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    description: "Engineered rubber gaskets, copper wiring harnesses, plastic trim extrusions, and precision alloy castings tailored for automotive assembly lines.",
    highlights: ["IATF 16949 Audited Facilities", "High Tensile Vulcanized Rubber Seals", "Electrolytic Wire Rod Harnesses"],
    relatedCategory: "industrial",
  },
  {
    id: "retail",
    name: "Retail & FMCG Private Labeling",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    description: "White-label consumer packaged virgin coconut oil, organic silk scarves, branded bed linens, and retail packaged food products for international store chains.",
    highlights: ["Custom Retail Bottle & Jar Packaging", "OEKO-TEX & Silk Mark Certified Fabrics", "Complete Barcode & Label Compliance"],
    relatedCategory: "textiles",
  },
];

export default function IndustriesPage() {
  return (
    <div className="w-full bg-apex-white dark:bg-zinc-950 py-12 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Industrial Sectors
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-apex-dark dark:text-white mt-4 tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-base text-apex-grey dark:text-gray-300 mt-3 leading-relaxed">
            Customized procurement frameworks engineered to meet the technical standards, regulatory compliance, and packaging requirements of global industries.
          </p>
        </div>

        {/* Sectors List */}
        <div className="space-y-24">
          {INDUSTRY_SECTORS.map((sector, idx) => {
            const relatedProds = PRODUCTS_DATA.filter((p) => p.category === sector.relatedCategory);

            return (
              <div
                key={sector.id}
                id={sector.id}
                className="bg-apex-surface dark:bg-zinc-900 rounded-4xl p-8 sm:p-12 border border-apex-border dark:border-apex-borderDark shadow-apex-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Text Col */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-apex-purple bg-apex-purple-light px-3.5 py-1 rounded-full">
                    Sector #{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-apex-dark dark:text-white tracking-tight">
                    {sector.name}
                  </h2>
                  <p className="text-sm text-apex-grey dark:text-gray-300 leading-relaxed font-normal">
                    {sector.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-white">
                      Key Standards & Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {sector.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-apex-grey dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-apex-purple shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Products Pill */}
                  <div className="pt-4 border-t border-gray-200 dark:border-zinc-800">
                    <span className="text-xs font-semibold text-gray-500 block mb-3">Featured Sourced Products:</span>
                    <div className="flex flex-wrap gap-2">
                      {relatedProds.map((rp) => (
                        <Link
                          key={rp.id}
                          href={`/products?id=${rp.id}`}
                          className="text-xs font-medium bg-white dark:bg-zinc-800 text-apex-dark dark:text-white border border-apex-border dark:border-zinc-700 px-3 py-1.5 rounded-full hover:border-apex-purple hover:text-apex-purple transition-colors flex items-center gap-1"
                        >
                          <span>{rp.name}</span>
                          <ArrowUpRight className="w-3 h-3 text-apex-purple" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
