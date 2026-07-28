"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Send, CheckCircle2, Globe, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneNumber = "919876543210";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
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
            Global Trade Support
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Contact Apex Vanguard Global Desk
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Connect directly with our trade specialists, sourcing auditors, or logistics coordinators.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & WhatsApp Callout */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white">Headquarters & Contacts</h2>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold text-sm mb-0.5">Global Trade Headquarters</strong>
                    <span>Apex Vanguard Global Tower, Pollachi Main Road, Coimbatore, Tamil Nadu 641001, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold text-sm mb-0.5">Live WhatsApp Trade Line</strong>
                    <span>+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold text-sm mb-0.5">Official Trade Email</strong>
                    <span>trade@apexvanguard.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold text-sm mb-0.5">Operating Hours</strong>
                    <span>Mon - Sat: 08:30 AM - 07:30 PM (IST / UTC +5:30)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    "Hello Apex Vanguard Global, I would like to inquire about international trade sourcing."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Live WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-64 relative bg-slate-900">
              <iframe
                title="Apex Vanguard Global Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.456!2d77.0!3d10.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8380!2sPollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter opacity-80 contrast-125"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 rounded-3xl bg-slate-900 border border-sky-500/50 text-center space-y-4 shadow-2xl">
                <CheckCircle2 className="w-16 h-16 text-sky-400 mx-auto" />
                <h2 className="text-2xl font-bold text-white">Message Sent Successfully!</h2>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Thank you for reaching out to Apex Vanguard Global. Our team will review your inquiry and respond within 12 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                  Send a Direct Message to Trade Desk
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      placeholder="alexander@globaltrade.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourcing Partnership Inquiry / Shipment Status"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">
                      Your Message / Detailed Inquiry *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Provide details about your trade query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-white border border-slate-800 text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    ⚡ Guaranteed response within 12 business hours.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs transition-colors shadow-lg shadow-sky-600/20 flex items-center gap-2"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
