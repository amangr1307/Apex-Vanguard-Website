"use client";

import React, { useState, useEffect } from "react";
import {
  PackagePlus,
  FileText,
  Users,
  MessageSquare,
  Package,
  Plus,
  CheckCircle,
  Clock,
  Filter,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/lib/data";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    "productRequests" | "quotes" | "suppliers" | "contacts" | "productManager"
  >("productRequests");

  const [productRequests, setProductRequests] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [suppliers, setSuppliers] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // New Product Modal State
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<ProductItem>>({
    name: "",
    category: "food",
    shortDescription: "",
    fullDescription: "",
    moq: "1 x 20ft Container",
    countryOfOrigin: "India",
    deliveryTime: "14 Days",
    imageUrl: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80",
    specifications: ["Standard Grade A Export Specification"],
    packagingOptions: ["Master Export Cartons"],
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [pRes, qRes, sRes, cRes] = await Promise.all([
        fetch("/api/request-product").then((r) => r.json()),
        fetch("/api/quote").then((r) => r.json()),
        fetch("/api/supplier").then((r) => r.json()),
        fetch("/api/contact").then((r) => r.json()),
      ]);

      if (pRes.success) setProductRequests(pRes.data);
      if (qRes.success) setQuotes(qRes.data);
      if (sRes.success) setSuppliers(sRes.data);
      if (cRes.success) setContacts(cRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header Bar */}
      <section className="py-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Apex Vanguard Global Command Console
              </span>
            </div>
            <h1 className="text-3xl font-black text-white mt-1">Admin Trade Dashboard</h1>
          </div>

          <button
            onClick={fetchData}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors border border-slate-700 shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh All Submissions</span>
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* KPI Overview Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400">Custom Product Requests</span>
              <div className="text-3xl font-black text-emerald-400 mt-1">{productRequests.length}</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400">
              <PackagePlus className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400">Formal RFQ Quotes</span>
              <div className="text-3xl font-black text-sky-400 mt-1">{quotes.length}</div>
            </div>
            <div className="p-3 rounded-xl bg-sky-950 text-sky-400">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400">Supplier Applications</span>
              <div className="text-3xl font-black text-indigo-400 mt-1">{suppliers.length}</div>
            </div>
            <div className="p-3 rounded-xl bg-indigo-950 text-indigo-400">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400">Contact Messages</span>
              <div className="text-3xl font-black text-amber-400 mt-1">{contacts.length}</div>
            </div>
            <div className="p-3 rounded-xl bg-amber-950 text-amber-400">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-900 pb-3">
          <button
            onClick={() => setActiveTab("productRequests")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "productRequests"
                ? "bg-emerald-600 text-white"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800"
            }`}
          >
            Product Requests ({productRequests.length})
          </button>

          <button
            onClick={() => setActiveTab("quotes")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "quotes"
                ? "bg-sky-600 text-white"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800"
            }`}
          >
            RFQs & Quotes ({quotes.length})
          </button>

          <button
            onClick={() => setActiveTab("suppliers")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "suppliers"
                ? "bg-indigo-600 text-white"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800"
            }`}
          >
            Supplier Applications ({suppliers.length})
          </button>

          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "contacts"
                ? "bg-amber-600 text-white"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800"
            }`}
          >
            Contact Messages ({contacts.length})
          </button>

          <button
            onClick={() => setActiveTab("productManager")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "productManager"
                ? "bg-purple-600 text-white"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800"
            }`}
          >
            Product Manager ({PRODUCTS_DATA.length})
          </button>
        </div>

        {/* Tab 1: Product Requests (Custom Sourcing RFQs) */}
        {activeTab === "productRequests" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Custom Product Sourcing Requests</h3>
            {productRequests.length === 0 ? (
              <div className="p-8 bg-slate-900 rounded-2xl text-center text-xs text-slate-400">
                No custom sourcing requests submitted yet.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-bold uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-4">Product Required</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4">Destination</th>
                      <th className="p-4">Target Price</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {productRequests.map((req) => (
                      <tr key={req.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-bold text-white">{req.productName}</td>
                        <td className="p-4">{req.quantity}</td>
                        <td className="p-4 text-sky-400">{req.destinationCountry}</td>
                        <td className="p-4">{req.targetPrice || "N/A"}</td>
                        <td className="p-4 text-slate-400">{new Date(req.createdAt).toLocaleDateString()}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 font-bold text-[10px] border border-emerald-800">
                            {req.status || "NEW"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Quote Requests */}
        {activeTab === "quotes" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Formal RFQ Submissions</h3>
            {quotes.length === 0 ? (
              <div className="p-8 bg-slate-900 rounded-2xl text-center text-xs text-slate-400">
                No RFQs submitted yet.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-bold uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-4">Company</th>
                      <th className="p-4">Country</th>
                      <th className="p-4">Product</th>
                      <th className="p-4">Incoterm</th>
                      <th className="p-4">Port</th>
                      <th className="p-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {quotes.map((q) => (
                      <tr key={q.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-bold text-white">{q.companyName}</td>
                        <td className="p-4">{q.country}</td>
                        <td className="p-4 text-sky-400">{q.product}</td>
                        <td className="p-4 font-bold text-emerald-400">{q.incoterm}</td>
                        <td className="p-4">{q.destinationPort}</td>
                        <td className="p-4 text-slate-400">{new Date(q.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Supplier Applications */}
        {activeTab === "suppliers" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Registered Manufacturer Applications</h3>
            {suppliers.length === 0 ? (
              <div className="p-8 bg-slate-900 rounded-2xl text-center text-xs text-slate-400">
                No supplier applications submitted yet.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-bold uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-4">Company</th>
                      <th className="p-4">Products Offered</th>
                      <th className="p-4">Capacity</th>
                      <th className="p-4">Certifications</th>
                      <th className="p-4">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {suppliers.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-bold text-white">{s.companyName}</td>
                        <td className="p-4 text-sky-400">{s.products}</td>
                        <td className="p-4">{s.productionCapacity}</td>
                        <td className="p-4 font-mono">{s.certifications}</td>
                        <td className="p-4 text-slate-400">{s.email} | {s.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Contact Messages */}
        {activeTab === "contacts" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">General Contact Inquiries</h3>
            {contacts.length === 0 ? (
              <div className="p-8 bg-slate-900 rounded-2xl text-center text-xs text-slate-400">
                No contact messages yet.
              </div>
            ) : (
              <div className="space-y-3">
                {contacts.map((c) => (
                  <div key={c.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="font-bold text-white">{c.name} ({c.email})</span>
                      <span>{new Date(c.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h4 className="font-bold text-sky-400">{c.subject || "General Inquiry"}</h4>
                    <p className="text-slate-300 leading-relaxed">{c.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Product Manager */}
        {activeTab === "productManager" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Active Product Catalog ({PRODUCTS_DATA.length})</h3>
              <button
                onClick={() => setIsAddProductOpen(true)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Product</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS_DATA.map((prod) => (
                <div key={prod.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                  <span className="text-[10px] font-bold uppercase text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                    {prod.categoryName}
                  </span>
                  <h4 className="text-base font-bold text-white">{prod.name}</h4>
                  <p className="text-slate-400 line-clamp-2">{prod.shortDescription}</p>
                  <div className="pt-2 border-t border-slate-800 flex justify-between text-slate-300">
                    <span>MOQ: {prod.moq}</span>
                    <span className="font-bold text-emerald-400">{prod.countryOfOrigin}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
