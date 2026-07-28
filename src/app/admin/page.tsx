"use client";

import { useState } from "react";
import { PRODUCTS_DATA, ProductItem } from "@/lib/data";
import {
  LayoutDashboard,
  Package,
  Layers,
  FileText,
  Building2,
  HelpCircle,
  Mail,
  Plus,
  Trash2,
  Edit,
  Upload,
  CheckCircle,
  Search,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "quotes" | "suppliers" | "requests" | "contacts">("overview");
  const [productsList, setProductsList] = useState<ProductItem[]>(PRODUCTS_DATA);
  const [newProductModal, setNewProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "food",
    categoryName: "Food Products",
    shortDescription: "",
    moq: "",
    deliveryTime: "",
    countryOfOrigin: "India",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const item: ProductItem = {
      id: `prod-${Date.now()}`,
      name: newProduct.name,
      slug: newProduct.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      category: newProduct.category as any,
      categoryName: newProduct.category === "food" ? "Food Products" : newProduct.category === "construction" ? "Construction Materials" : newProduct.category === "industrial" ? "Industrial Materials" : "Textiles",
      shortDescription: newProduct.shortDescription,
      fullDescription: newProduct.shortDescription,
      specifications: ["Standard Grade Export Quality", "ISO Certified Production"],
      applications: ["Commercial & Industrial Export"],
      availableSizes: ["Standard Sizes"],
      packagingOptions: ["Export Packaging"],
      countryOfOrigin: newProduct.countryOfOrigin,
      moq: newProduct.moq,
      deliveryTime: newProduct.deliveryTime,
      imageUrl: newProduct.imageUrl,
    };

    setProductsList([item, ...productsList]);
    setNewProductModal(false);
    setNewProduct({
      name: "",
      category: "food",
      categoryName: "Food Products",
      shortDescription: "",
      moq: "",
      deliveryTime: "",
      countryOfOrigin: "India",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    });
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProductsList(productsList.filter((p) => p.id !== id));
    }
  };

  // Mock lead counts
  const mockQuotes = [
    { id: "q-1", company: "Al-Futtaim Group", country: "UAE", product: "Virgin Coconut Oil", qty: "5,000 Litres", incoterm: "CIF Jebel Ali", date: "Today" },
    { id: "q-2", company: "Bavaria Build GmbH", country: "Germany", product: "Indian Marble Slabs", qty: "2 x 20ft Containers", incoterm: "FOB Mundra", date: "Yesterday" },
  ];

  const mockSuppliers = [
    { id: "s-1", company: "Sri Lakshmi Coconut Mills", products: "Virgin Coconut Oil", capacity: "200 MT/Mo", certs: "APEDA, ISO", phone: "+91 98765 11111" },
    { id: "s-2", company: "Rajasthan Stone Processing Ltd", products: "Polished Marble", capacity: "50,000 Sqm/Mo", certs: "ISO 9001", phone: "+91 98765 22222" },
  ];

  const mockRequests = [
    { id: "r-1", item: "Organic Turmeric Finger Grade A", qty: "20 MT", destination: "Rotterdam, Netherlands", targetPrice: "$1,800/MT" },
  ];

  return (
    <div className="w-full bg-apex-surface dark:bg-zinc-950 min-h-screen py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-apex-purple font-bold bg-apex-purple-light px-3 py-1 rounded-full">
              Apex Executive Portal
            </span>
            <h1 className="text-3xl font-extrabold text-apex-dark dark:text-white mt-2">
              Admin Dashboard
            </h1>
          </div>

          <button
            onClick={() => setNewProductModal(true)}
            className="inline-flex items-center gap-2 bg-apex-purple hover:bg-apex-purple-hover text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-md shadow-apex-purple/30"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Export Product</span>
          </button>
        </div>

        {/* Dashboard Nav Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-apex-border dark:border-apex-borderDark">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "products", label: "Products Catalog", icon: Package },
            { id: "quotes", label: "Quote Requests (2)", icon: FileText },
            { id: "suppliers", label: "Supplier Registrations (2)", icon: Building2 },
            { id: "requests", label: "Product Inquiries (1)", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-apex-purple text-white shadow-sm"
                    : "bg-white dark:bg-zinc-900 text-apex-dark dark:text-gray-300 border border-apex-border dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-apex-border dark:border-zinc-800 shadow-sm">
                <span className="text-xs text-gray-400 font-semibold block">Total Catalog Products</span>
                <span className="text-3xl font-black text-apex-dark dark:text-white mt-2 block">{productsList.length}</span>
                <span className="text-[11px] text-emerald-500 font-medium mt-1 block">Active across 4 Sectors</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-apex-border dark:border-zinc-800 shadow-sm">
                <span className="text-xs text-gray-400 font-semibold block">RFQ Lead Volume</span>
                <span className="text-3xl font-black text-apex-purple mt-2 block">28</span>
                <span className="text-[11px] text-gray-400 mt-1 block">12 Pending Proforma Quotes</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-sm">
                <span className="text-xs text-gray-400 font-semibold block">Accredited Suppliers</span>
                <span className="text-3xl font-black text-apex-dark dark:text-white mt-2 block">45</span>
                <span className="text-[11px] text-emerald-500 font-medium mt-1 block">ISO / APEDA Verified</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-sm">
                <span className="text-xs text-gray-400 font-semibold block">Export Destination Countries</span>
                <span className="text-3xl font-black text-apex-dark dark:text-white mt-2 block">28</span>
                <span className="text-[11px] text-gray-400 mt-1 block">USA, EU, UAE, SE Asia</span>
              </div>
            </div>

            {/* Recent Quotes Table */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-apex-border dark:border-zinc-800 shadow-sm">
              <h3 className="text-lg font-bold text-apex-dark dark:text-white mb-4">Recent Incoming RFQs</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-zinc-800 text-gray-400 uppercase font-semibold">
                      <th className="pb-3">Company</th>
                      <th className="pb-3">Country</th>
                      <th className="pb-3">Product</th>
                      <th className="pb-3">Quantity</th>
                      <th className="pb-3">Incoterm</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-zinc-800 text-apex-dark dark:text-white">
                    {mockQuotes.map((q) => (
                      <tr key={q.id}>
                        <td className="py-3.5 font-bold">{q.company}</td>
                        <td className="py-3.5">{q.country}</td>
                        <td className="py-3.5 text-apex-purple font-medium">{q.product}</td>
                        <td className="py-3.5">{q.qty}</td>
                        <td className="py-3.5">{q.incoterm}</td>
                        <td className="py-3.5">
                          <span className="bg-amber-500/10 text-amber-500 font-bold px-2.5 py-1 rounded-full text-[10px]">
                            NEW RFQ
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS CATALOG */}
        {activeTab === "products" && (
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-apex-border dark:border-zinc-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-apex-dark dark:text-white">Active Product Inventory</h3>
              <span className="text-xs text-gray-400 font-medium">{productsList.length} Items Listed</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsList.map((p) => (
                <div
                  key={p.id}
                  className="bg-apex-surface dark:bg-zinc-800/80 p-5 rounded-2xl border border-apex-border dark:border-zinc-800 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase text-apex-purple bg-apex-purple-light px-2.5 py-0.5 rounded-full">
                      {p.categoryName}
                    </span>
                    <h4 className="text-base font-bold text-apex-dark dark:text-white">{p.name}</h4>
                    <p className="text-xs text-apex-grey dark:text-gray-400 line-clamp-2">{p.shortDescription}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-zinc-700 flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-medium">MOQ: {p.moq}</span>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="text-red-500 hover:text-red-600 p-1.5 rounded-lg bg-red-500/10 transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: QUOTE REQUESTS */}
        {activeTab === "quotes" && (
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-apex-border dark:border-zinc-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-apex-dark dark:text-white">Incoming RFQ Leads</h3>
            <div className="space-y-4">
              {mockQuotes.map((q) => (
                <div key={q.id} className="bg-apex-surface dark:bg-zinc-800/80 p-5 rounded-2xl border border-zinc-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-apex-dark dark:text-white">{q.company} ({q.country})</h4>
                    <p className="text-xs text-apex-purple font-semibold mt-1">Requested: {q.product} • Quantity: {q.qty}</p>
                    <p className="text-[11px] text-gray-400 mt-1">Incoterm: {q.incoterm}</p>
                  </div>
                  <button onClick={() => alert(`Proforma Quote generator opened for ${q.company}`)} className="bg-apex-purple text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-apex-purple-hover">
                    Generate Proforma Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SUPPLIER REGISTRATIONS */}
        {activeTab === "suppliers" && (
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-apex-border dark:border-zinc-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-apex-dark dark:text-white">Registered Indian Factories</h3>
            <div className="space-y-4">
              {mockSuppliers.map((s) => (
                <div key={s.id} className="bg-apex-surface dark:bg-zinc-800/80 p-5 rounded-2xl border border-zinc-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-apex-dark dark:text-white">{s.company}</h4>
                    <p className="text-xs text-apex-grey dark:text-gray-300 mt-1">Products: {s.products} | Capacity: {s.capacity}</p>
                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full mt-2 inline-block">
                      Certs: {s.certs}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{s.phone}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: UNLISTED PRODUCT REQUESTS */}
        {activeTab === "requests" && (
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-apex-border dark:border-zinc-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-apex-dark dark:text-white">Custom Product Inquiries</h3>
            {mockRequests.map((r) => (
              <div key={r.id} className="bg-apex-surface dark:bg-zinc-800/80 p-5 rounded-2xl border border-zinc-800">
                <h4 className="text-sm font-bold text-apex-dark dark:text-white">{r.item}</h4>
                <p className="text-xs text-apex-grey dark:text-gray-300 mt-1">Qty: {r.qty} | Destination: {r.destination} | Target: {r.targetPrice}</p>
              </div>
            ))}
          </div>
        )}

        {/* ADD PRODUCT MODAL */}
        {newProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl max-w-lg w-full border border-apex-border dark:border-zinc-800 shadow-2xl">
              <h3 className="text-xl font-bold text-apex-dark dark:text-white mb-4">Add New Export Product</h3>
              <form onSubmit={handleAddProduct} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Product Name</label>
                  <input
                    type="text"
                    required
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full bg-apex-surface dark:bg-zinc-800 border p-3 rounded-xl text-apex-dark dark:text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-apex-surface dark:bg-zinc-800 border p-3 rounded-xl text-apex-dark dark:text-white"
                  >
                    <option value="food">Food Products</option>
                    <option value="construction">Construction Materials</option>
                    <option value="industrial">Industrial Materials</option>
                    <option value="textiles">Textiles</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Short Description</label>
                  <input
                    type="text"
                    required
                    value={newProduct.shortDescription}
                    onChange={(e) => setNewProduct({ ...newProduct, shortDescription: e.target.value })}
                    className="w-full bg-apex-surface dark:bg-zinc-800 border p-3 rounded-xl text-apex-dark dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1">MOQ</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 10 Metric Tons"
                      value={newProduct.moq}
                      onChange={(e) => setNewProduct({ ...newProduct, moq: e.target.value })}
                      className="w-full bg-apex-surface dark:bg-zinc-800 border p-3 rounded-xl text-apex-dark dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Delivery Lead Time</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 10-15 Days"
                      value={newProduct.deliveryTime}
                      onChange={(e) => setNewProduct({ ...newProduct, deliveryTime: e.target.value })}
                      className="w-full bg-apex-surface dark:bg-zinc-800 border p-3 rounded-xl text-apex-dark dark:text-white"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setNewProductModal(false)}
                    className="px-5 py-2.5 rounded-full border text-gray-400 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-apex-purple text-white font-bold"
                  >
                    Save Product to Catalog
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
