"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Send,
  FileText,
  CheckCircle2,
  Linkedin,
} from "lucide-react";
import { CERTIFICATIONS_DATA } from "@/lib/data";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900">
      {/* Certifications Trust Strip */}
      <div className="border-b border-slate-900 bg-slate-900/60 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <div>
              <h4 className="text-sm font-bold text-white">Govt Registered & Certified Exporter</h4>
              <p className="text-xs text-slate-400">Complying with DGFT, APEDA, FSSAI, MSME & GST statutory standards</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {CERTIFICATIONS_DATA.map((cert) => (
              <span
                key={cert.id}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-semibold text-slate-200 border border-slate-800"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                {cert.name.split(" ")[0]} ({cert.status})
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Story */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl">
                AV
              </div>
              <span className="text-xl font-black text-white tracking-tight">APEX VANGUARD GLOBAL</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              Apex Vanguard Global is a premier international trading house & global sourcing enterprise headquartered in India. We connect international buyers with audited manufacturers across food products, construction steel, natural stone, industrial metals, textiles, and polymers.
            </p>
            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-sky-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:trade@apexvanguard.com"
                className="p-2 rounded-lg bg-slate-900 hover:bg-sky-600 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Trading Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/services#export-services" className="hover:text-sky-400 transition-colors">Export Services</Link></li>
              <li><Link href="/services#import-services" className="hover:text-sky-400 transition-colors">Import Facilitation</Link></li>
              <li><Link href="/services#global-sourcing" className="hover:text-sky-400 transition-colors">Custom Global Sourcing</Link></li>
              <li><Link href="/services#oem-private-label" className="hover:text-sky-400 transition-colors">OEM & Private Labeling</Link></li>
              <li><Link href="/services#quality-inspection" className="hover:text-sky-400 transition-colors">Quality Pre-Shipment Inspection</Link></li>
              <li><Link href="/services#logistics-coordination" className="hover:text-sky-400 transition-colors">Ocean & Air Logistics</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product Portfolios</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/products?category=food" className="hover:text-sky-400 transition-colors">Food & Agricultural Products</Link></li>
              <li><Link href="/products?category=construction" className="hover:text-sky-400 transition-colors">Construction Steel & Stones</Link></li>
              <li><Link href="/products?category=industrial" className="hover:text-sky-400 transition-colors">Industrial Materials</Link></li>
              <li><Link href="/products?category=metals" className="hover:text-sky-400 transition-colors">Metals & Alloys</Link></li>
              <li><Link href="/products?category=textiles" className="hover:text-sky-400 transition-colors">Textiles & Yarns</Link></li>
              <li><Link href="/products?category=plastics" className="hover:text-sky-400 transition-colors">Plastics & Polymers</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Trade Desk & Newsletter</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Global Trade Hub, Chennai & Pollachi, Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>trade@apexvanguard.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+91 98765 43210</span>
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="pt-2">
              <label className="text-[11px] font-semibold text-slate-300 block mb-1.5">
                Subscribe for Market Intelligence
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 text-white border border-slate-800 focus:outline-none focus:border-sky-500"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1">✓ Subscribed to trade intelligence.</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Apex Vanguard Global. All Rights Reserved. International Trade Portal.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="hover:text-slate-300 transition-colors">Incoterms Guide</Link>
            <Link href="/request-product" className="hover:text-slate-300 transition-colors">Request Any Product</Link>
            <Link href="/become-supplier" className="hover:text-slate-300 transition-colors">Become a Supplier</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
