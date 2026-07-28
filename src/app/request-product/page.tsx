"use client";

import { useState } from "react";
import { Search, Upload, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";

export default function RequestProductPage() {
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    packaging: "",
    destinationCountry: "",
    targetPrice: "",
    additionalRequirements: "",
    referenceImageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
        setFormData({
          productName: "",
          quantity: "",
          packaging: "",
          destinationCountry: "",
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
    <div className="w-full bg-apex-white dark:bg-zinc-950 py-12 sm:py-20 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Custom Sourcing Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-apex-dark dark:text-white tracking-tight">
            Request an Unlisted Product
          </h1>
          <p className="text-sm sm:text-base text-apex-grey dark:text-gray-300 max-w-xl mx-auto">
            Can&apos;t find your exact product in our main catalog? Submit your custom specifications and target price for a feasibility report.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-apex-surface dark:bg-zinc-900 p-8 sm:p-12 rounded-4xl border border-apex-border dark:border-apex-borderDark shadow-xl">
          {success ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-apex-dark dark:text-white">Custom Request Received</h3>
              <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-400 max-w-md mx-auto">
                Our sourcing intelligence team has received your request and will provide factory options within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-4 text-xs font-bold text-apex-purple underline"
              >
                Submit another product request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                  Product Name / Technical Designation *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Organic Moringa Powder Grade-A"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Required Quantity & Units *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 50 Metric Tons or 2 x 40ft FCL"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Packaging Requirements *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 25kg Kraft Paper Bags on Pallets"
                    value={formData.packaging}
                    onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Destination Country & Port *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Port of Rotterdam, Netherlands"
                    value={formData.destinationCountry}
                    onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Target Price (USD / Unit)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $1,200 / MT FOB"
                    value={formData.targetPrice}
                    onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                  Additional Specifications & Quality Standards
                </label>
                <textarea
                  rows={4}
                  placeholder="Mention purity %, grade specs, lab certification requirements..."
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                  Reference Spec Image / Drawing URL (Optional)
                </label>
                <div className="relative">
                  <Upload className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-apex-grey" />
                  <input
                    type="url"
                    placeholder="https://example.com/drawing.pdf or image link"
                    value={formData.referenceImageUrl}
                    onChange={(e) => setFormData({ ...formData, referenceImageUrl: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>
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
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Sourcing Inquiry</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
