"use client";

import Link from "next/link";
import { Globe, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-apex-dark text-white pt-20 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-zinc-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-apex-purple flex items-center justify-center text-white shadow-lg shadow-apex-purple/30">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                APEX <span className="text-apex-purple">VANGUARD</span> GLOBAL
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Connecting international buyers with verified top-tier Indian manufacturers across Food Products, Construction Materials, Industrial Supplies, and Textiles.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-3.5 py-2 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4 text-apex-purple" />
              <span>100% ISO & Export Compliance Verified</span>
            </div>
          </div>

          {/* Products Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-5">Products</h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li><Link href="/products?category=food" className="hover:text-apex-purple transition-colors">Food & Agricultural</Link></li>
              <li><Link href="/products?category=construction" className="hover:text-apex-purple transition-colors">Construction Materials</Link></li>
              <li><Link href="/products?category=industrial" className="hover:text-apex-purple transition-colors">Industrial Raw Materials</Link></li>
              <li><Link href="/products?category=textiles" className="hover:text-apex-purple transition-colors">Textiles & Fabrics</Link></li>
              <li><Link href="/products" className="text-apex-purple font-medium flex items-center gap-1 hover:underline pt-1">Explore All Products <ArrowUpRight className="w-3.5 h-3.5" /></Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li><Link href="/about" className="hover:text-apex-purple transition-colors">About Us</Link></li>
              <li><Link href="/global-sourcing" className="hover:text-apex-purple transition-colors">Global Sourcing Model</Link></li>
              <li><Link href="/become-supplier" className="hover:text-apex-purple transition-colors">Become a Supplier</Link></li>
              <li><Link href="/request-product" className="hover:text-apex-purple transition-colors">Request Unlisted Product</Link></li>
              <li><Link href="/contact" className="hover:text-apex-purple transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-5">Newsletter</h4>
            <p className="text-xs text-zinc-400 mb-4">
              Get monthly updates on export market intelligence and new verified supplier catalogs.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter work email..."
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-apex-purple transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-apex-purple hover:bg-apex-purple-hover text-white text-xs font-semibold py-2.5 rounded-xl transition-all shadow-md shadow-apex-purple/20"
              >
                Subscribe Updates
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright & admin link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Apex Vanguard Global. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="hover:text-zinc-300 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Terms of Export</Link>
            <Link href="/admin" className="text-zinc-400 hover:text-apex-purple transition-colors flex items-center gap-1 font-medium">
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
