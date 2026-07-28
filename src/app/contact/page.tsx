"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Linkedin, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-apex-white dark:bg-zinc-950 py-12 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3.5 py-1.5 rounded-full">
            Global Trade Desk
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-apex-dark dark:text-white mt-4 tracking-tight">
            Contact Apex Vanguard Global
          </h1>
          <p className="text-base text-apex-grey dark:text-gray-300 mt-3 leading-relaxed">
            Our international procurement team operates across time zones. Reach out via email, phone, WhatsApp, or schedule an in-person factory visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-apex-surface dark:bg-zinc-900 p-8 rounded-3xl border border-apex-border dark:border-apex-borderDark shadow-apex-soft space-y-6">
              <h3 className="text-xl font-bold text-apex-dark dark:text-white pb-4 border-b border-gray-200 dark:border-zinc-800">
                Corporate Headquarters
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-apex-purple/10 text-apex-purple flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Registered Office</span>
                  <p className="text-sm font-semibold text-apex-dark dark:text-white mt-1 leading-relaxed">
                    Apex Vanguard Global Tower, Level 8, World Trade Center Complex, Bangalore, Karnataka - 560055, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-apex-purple/10 text-apex-purple flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Official Trade Email</span>
                  <a href="mailto:trade@apexvanguardglobal.com" className="text-sm font-semibold text-apex-purple hover:underline mt-1 block">
                    trade@apexvanguardglobal.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Direct WhatsApp Desk</span>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-500 hover:underline mt-1 block">
                    +91 98765 43210 (24/7 Priority Desk)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-apex-purple/10 text-apex-purple flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Working Hours</span>
                  <p className="text-xs text-apex-grey dark:text-gray-300 mt-1">
                    Mon - Sat: 08:00 AM - 08:00 PM (IST / UTC +5:30)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 flex items-center gap-4 text-xs font-bold">
                <span className="text-gray-400">Socials:</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-apex-purple hover:underline flex items-center gap-1">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-apex-border dark:border-zinc-800 shadow-md">
              <iframe
                title="Apex Vanguard Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.65345719391!2d77.55325831482223!3d13.00030589083707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84a7a8d54d%3A0xb35a0f8eb2198064!2sWorld%20Trade%20Center!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-apex-surface dark:bg-zinc-900 p-8 sm:p-12 rounded-4xl border border-apex-border dark:border-apex-borderDark shadow-xl">
            <h3 className="text-2xl font-extrabold text-apex-dark dark:text-white mb-2">
              Send Direct Message
            </h3>
            <p className="text-xs text-apex-grey dark:text-gray-400 mb-8">
              Fill in your contact details below and our trade response officer will get back to you within 2 hours.
            </p>

            {success ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-apex-dark dark:text-white">Message Delivered</h3>
                <p className="text-xs sm:text-sm text-apex-grey dark:text-gray-400 max-w-md mx-auto">
                  Thank you for contacting Apex Vanguard Global. Our team has received your message and will respond promptly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 text-xs font-bold text-apex-purple underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. david@globaltraders.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sourcing Inquiry for Virgin Coconut Oil"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-apex-dark dark:text-gray-200 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details about your inquiry, company requirements, or desired meeting time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-apex-border dark:border-zinc-700 rounded-xl px-4 py-3 text-xs text-apex-dark dark:text-white focus:outline-none focus:border-apex-purple"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-apex-purple hover:bg-apex-purple-hover text-white font-bold text-sm transition-all shadow-xl shadow-apex-purple/30 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message Now</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
