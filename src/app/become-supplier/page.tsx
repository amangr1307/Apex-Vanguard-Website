"use client";

import { useState } from "react";
import { ShieldCheck, Building2, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";

export default function BecomeSupplierPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    products: "",
    productionCapacity: "",
    certifications: "",
    factoryAddress: "",
    contactPerson: "",
    phone: "",
    email: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/supplier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          companyName: "",
          products: "",
          productionCapacity: "",
          certifications: "",
          factoryAddress: "",
          contactPerson: "",
          phone: "",
          email: "",
          website: "",
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Supplier Onboarding Portal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-apex-dark dark:text-white tracking-tight">
            Become an Accredited Supplier
          </h1>
          <p className="text-sm sm:text-base text-apex-grey dark:text-gray-300 max-w-2xl mx-auto">
            Are you an Indian manufacturer producing export-grade products? Partner with Apex Vanguard Global to supply high-volume overseas buyers.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-apex-surface dark:bg-zinc-900 p-8 sm:p-12 rounded-4xl border border-apex-border dark:border-apex-borderDark shadow-xl">
          {success ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-apex-dark dark:text-white">Registration Received</h3>
              <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-400 max-w-md mx-auto">
                Thank you. Our supplier verification team will review your factory credentials and contact you within 48 business hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-4 text-xs font-bold text-apex-purple underline"
              >
                Submit another factory listing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Granites & Minerals Pvt Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Products Manufactured *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Polished Marble Slabs, TMT Rebars, VCO"
                    value={formData.products}
                    onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Monthly Production Capacity *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 500 Metric Tons / Month"
                    value={formData.productionCapacity}
                    onChange={(e) => setFormData({ ...formData, productionCapacity: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Certifications Held *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ISO 9001, APEDA, FSSAI, CE, GMP"
                    value={formData.certifications}
                    onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                  Factory & Office Address *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Full physical location of manufacturing plant..."
                  value={formData.factoryAddress}
                  onChange={(e) => setFormData({ ...formData, factoryAddress: e.target.value })}
                  className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name & Designation"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sales@factory.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                  Company Website (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://www.yourfactory.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
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
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Supplier Application</span>
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
