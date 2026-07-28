"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, FileText, Globe, Ship, ShieldCheck } from "lucide-react";

function RequestQuoteContent() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    product: prefilledProduct,
    quantity: "",
    packaging: "",
    destinationPort: "",
    incoterm: "FOB",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          companyName: "",
          country: "",
          product: "",
          quantity: "",
          packaging: "",
          destinationPort: "",
          incoterm: "FOB",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Banner */}
      <section className="py-16 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800">
            Professional RFQ Desk
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Request a Formal Quotation (RFQ)
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Submit your order parameters to receive a comprehensive Proforma Invoice with Incoterms 2020 pricing, ocean freight schedules, and payment terms.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="p-10 rounded-3xl bg-slate-900 border border-sky-500/50 text-center space-y-4 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-sky-400 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Quotation Request Received!</h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Our international trade desk is preparing your formal RFQ response. You will receive an official Proforma Invoice via email within 12-24 business hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              Submit Another RFQ
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
              International Trade Quotation Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Company / Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al-Futtaim Trading LLC"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Buyer Country *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. United Arab Emirates / Germany / USA"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Product Required *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mature Husked Coconut / TMT Rebars / Copper Cathodes"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Order Quantity & Units *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1 x 40ft Container / 50 Metric Tons"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Packaging Preference *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. PP Mesh Bags / Jumbo Bulk Bags / Cartons"
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Incoterm Selection 2020 *
                </label>
                <select
                  value={formData.incoterm}
                  onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                >
                  <option value="FOB">FOB (Free On Board - Indian Port)</option>
                  <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                  <option value="CFR">CFR (Cost & Freight)</option>
                  <option value="EXW">EXW (Ex-Works Factory Door)</option>
                  <option value="DDP">DDP (Delivered Duty Paid)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Destination Port & Country *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jebel Ali Port, Dubai / Port of Rotterdam"
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="procurement@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Phone / WhatsApp Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Special Notes / Delivery Timeline (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify target delivery date, preferred vessel line, or payment term preferences (LC/TT)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                ✓ Guaranteed response within 12-24 business hours.
              </span>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs transition-colors shadow-lg shadow-sky-600/20 flex items-center gap-2"
              >
                {loading ? "Generating RFQ..." : "Submit Quotation Request"}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white p-20 text-center">Loading RFQ Form...</div>}>
      <RequestQuoteContent />
    </Suspense>
  );
}
