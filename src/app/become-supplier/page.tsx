"use client";

import React, { useState } from "react";
import { Building2, Factory, ShieldCheck, CheckCircle2, Send, Phone, Mail } from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
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
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Banner */}
      <section className="py-16 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Manufacturer Onboarding Portal
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Become a Registered Supplier
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Are you a high-capacity Indian manufacturer or agricultural producer? Partner with Apex Vanguard Global to export your products to 35+ international markets.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="p-10 rounded-3xl bg-slate-900 border border-emerald-500/50 text-center space-y-4 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Supplier Application Received!</h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Thank you for submitting your factory details. Our vendor auditing team will review your registration, verify your GST/IEC credentials, and contact your team for a plant audit.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              Submit Another Manufacturer Application
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
              Manufacturer & Factory Registration Form
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Company / Factory Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pollachi Coconut Exports Pvt Ltd"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Contact Person Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar (Director)"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Corporate Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="export@yourcompany.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Products Offered / Manufactured *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mature Husked Coconuts, Cold-Pressed Coconut Oil, TMT Rebars, Cotton Yarns"
                  value={formData.products}
                  onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Monthly Production / Supply Capacity *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 10 x 40ft Containers / Month"
                  value={formData.productionCapacity}
                  onChange={(e) => setFormData({ ...formData, productionCapacity: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Quality Certifications Held (ISO, APEDA, FSSAI, CE) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ISO 9001, APEDA, FSSAI Central License"
                  value={formData.certifications}
                  onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Factory & Registered Office Address *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Complete factory address, district, state, and pin code"
                  value={formData.factoryAddress}
                  onChange={(e) => setFormData({ ...formData, factoryAddress: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Company Website / Catalog Link (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://www.yourcompany.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                🔒 Your factory information is kept strictly confidential under NDA.
              </span>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-colors shadow-lg shadow-emerald-600/20 flex items-center gap-2"
              >
                {loading ? "Submitting Application..." : "Submit Supplier Application"}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
