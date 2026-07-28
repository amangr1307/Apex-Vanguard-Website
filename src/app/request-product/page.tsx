"use client";

import React, { useState } from "react";
import { PackagePlus, Send, CheckCircle2, ShieldCheck, Globe, HelpCircle } from "lucide-react";

export default function RequestProductPage() {
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    destinationCountry: "",
    packaging: "",
    targetPrice: "",
    additionalRequirements: "",
    referenceImageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/request-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          productName: "",
          quantity: "",
          destinationCountry: "",
          packaging: "",
          targetPrice: "",
          additionalRequirements: "",
          referenceImageUrl: "",
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
      {/* Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Bespoke Procurement & Custom Sourcing
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Can’t Find the Product You’re Looking For?
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Apex Vanguard Global sources products directly from audited manufacturers across India based on your exact requirements, dimensions, or custom formulations.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="p-10 rounded-3xl bg-slate-900 border border-emerald-500/50 text-center space-y-4 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Custom Product Request Submitted!</h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Our sourcing team is matching your specifications with our verified manufacturer network. You will receive a technical proposal and Proforma quotation within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              Submit Another Product Sourcing Request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <PackagePlus className="w-6 h-6 text-emerald-400" />
                Custom Product RFQ Form
              </h3>
              <span className="text-xs font-semibold text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
                100% Confidential
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Product Name or Raw Material Required *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cold Rolled Stainless Steel 316L Sheets, Organic Sesame Seeds, Custom uPVC Conduit"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Required Order Quantity & Units *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 25 Metric Tons / 2 x 40ft Containers"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Destination Country & Sea/Airport *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jebel Ali Port, Dubai, UAE"
                  value={formData.destinationCountry}
                  onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Packaging Requirement *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 25kg PP Woven Bags on Pallets / OEM Private Label Retail Pouches"
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Target Price USD (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. $1,200 / Metric Ton CIF"
                  value={formData.targetPrice}
                  onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Detailed Specifications & Technical Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide precise dimensions, grade parameters, chemical purity, moisture allowance, or tolerance levels..."
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Reference Image or Engineering Blueprint URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://drive.google.com/your-spec-sheet-url"
                  value={formData.referenceImageUrl}
                  onChange={(e) => setFormData({ ...formData, referenceImageUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Apex Vanguard Global guarantees NDA confidentiality.
              </span>

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold text-xs transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
              >
                {loading ? "Submitting Request..." : "Submit Product Sourcing Request"}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
