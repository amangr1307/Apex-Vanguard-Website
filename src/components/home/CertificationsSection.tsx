"use client";

import React from "react";
import { CERTIFICATIONS_DATA } from "@/lib/data";
import { ShieldCheck, Award, FileCheck, CheckCircle2, Sprout, Globe2 } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FileCheck: <FileCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    Award: <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    Sprout: <Sprout className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    Globe2: <Globe2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60 font-sans border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/80 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800">
            Trust & Statutory Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Government Registered Certifications & Compliance
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Apex Vanguard Global maintains full statutory authorization from Indian government trade authorities and international food & quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 group-hover:scale-110 transition-transform">
                  {iconMap[cert.icon] || <ShieldCheck className="w-6 h-6 text-sky-500" />}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  {cert.status}
                </span>
              </div>

              <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 block mb-1">
                {cert.code}
              </span>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {cert.name}
              </h3>

              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                Issuing Body: {cert.authority}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-900 pt-3">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
