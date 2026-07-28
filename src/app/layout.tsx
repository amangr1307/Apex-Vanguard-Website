import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Apex Vanguard Global | Premium Global Sourcing & International Trade Partner",
  description:
    "Connecting global buyers with verified Indian manufacturers across Food Products, Construction Steel, Industrial Materials, Metals, Textiles, and Polymers.",
  keywords: [
    "Global Sourcing",
    "Indian Manufacturers",
    "Export Sourcing",
    "Food Exports",
    "Construction Materials Export",
    "Industrial Sourcing India",
    "Textile Exporters India",
    "Metals Export",
    "Apex Vanguard Global",
  ],
  authors: [{ name: "Apex Vanguard Global" }],
  openGraph: {
    title: "Apex Vanguard Global | Premium Global Sourcing",
    description:
      "Connecting global buyers with verified Indian manufacturers across Food Products, Construction Materials, Industrial Materials, Metals, Textiles, and Polymers.",
    url: "https://apexvanguardglobal.com",
    siteName: "Apex Vanguard Global",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Apex Vanguard Global Sourcing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-slate-100 font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CurrencyProvider>
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
            <WhatsAppButton />
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
