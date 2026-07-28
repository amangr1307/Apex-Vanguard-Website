import React from "react";
import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { CustomSourcingBanner } from "@/components/home/CustomSourcingBanner";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { GlobalReachMap } from "@/components/home/GlobalReachMap";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Apex Vanguard Global | International Trade & Global Sourcing Partner",
  description:
    "Premier international trading house in India connecting global buyers with audited manufacturers for agricultural commodities, structural steel, marble, copper, textiles, and polymers.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Product Categories */}
      <CategorySection />

      {/* 3. "Can't Find the Product You're Looking For?" Dedicated Banner */}
      <CustomSourcingBanner />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Industries We Serve */}
      <IndustriesGrid />

      {/* 6. Global Reach Map & Live Trade Statistics */}
      <GlobalReachMap />

      {/* 7. Certifications & Statutory Compliance Showcase */}
      <CertificationsSection />

      {/* 8. Customer Inquiry CTA */}
      <CTASection />
    </main>
  );
}
