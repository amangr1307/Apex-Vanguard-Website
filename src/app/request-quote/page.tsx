"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";

function RequestQuoteFormContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    product: initialProduct,
    quantity: "",
    packaging: "",
    destinationPort: "",
    incoterm: "FOB",
    message: "",
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
        setFormData({
          companyName: "",
          country: "",
          product: "",
          quantity: "",
          packaging: "",
          destinationPort: "",
          incoterm: "FOB",
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
    <div className="bg-apex-surface dark:bg-zinc-900 p-8 sm:p-12 rounded-4xl border border-apex-border dark:border-apex-borderDark shadow-xl">
      {success ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-apex-dark dark:text-white">RFQ Successfully Dispatched</h3>
          <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-400 max-w-md mx-auto">
            Thank you. An export trade specialist has been assigned to your quotation request. Check your inbox for our official Proforma Quote.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 text-xs font-bold text-apex-purple underline"
          >
            Request another quotation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                Company / Buyer Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Global Import Corp Ltd"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                Buyer Country *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. United States / UAE / Germany"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                Product Required *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Cold Pressed Virgin Coconut Oil"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                Order Quantity & Target Unit *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 1 x 40ft Reefer Container"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                Preferred Packaging *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 210L HDPE Drums"
                value={formData.packaging}
                onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                Destination Port *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jebel Ali / Port of Hamburg"
                value={formData.destinationPort}
                onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                Incoterms 2020 *
              </label>
              <select
                value={formData.incoterm}
                onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
              >
                <option value="FOB">FOB (Free On Board)</option>
                <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                <option value="CFR">CFR (Cost & Freight)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
              Additional Notes / Payment Terms Preferred (LC / TT)
            </label>
            <textarea
              rows={4}
              placeholder="Specify target delivery timeline, target price per unit, LC at sight preferences..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-apex-purple hover:bg-apex-purple-hover text-white font-bold text-sm transition-all shadow-xl shadow-apex-purple/30 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Generating Quotation Request...</span>
                </>
              ) : (
                <>
                  <span>Dispatch RFQ to Sourcing Desk</span>
                  <ArrowUpRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <div className="w-full bg-apex-white dark:bg-zinc-950 py-12 sm:py-20 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Institutional RFQ Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-apex-dark dark:text-white tracking-tight">
            Request Official Quotation
          </h1>
          <p className="text-sm sm:text-base text-apex-grey dark:text-gray-300 max-w-xl mx-auto">
            Receive a transparent direct-factory quote complete with lead time, packaging details, and maritime freight estimates within 12 hours.
          </p>
        </div>

        <Suspense fallback={
          <div className="text-center py-12 text-apex-grey font-medium">Loading Quotation Form...</div>
        }>
          <RequestQuoteFormContent />
        </Suspense>
      </div>
    </div>
  );
}
