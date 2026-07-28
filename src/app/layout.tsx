import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Apex Vanguard Global | Premium Global Sourcing & Export Partner",
  description:
    "Connecting global buyers with verified Indian manufacturers across Food Products, Construction Materials, Industrial Supplies, and Textiles.",
  keywords: [
    "Global Sourcing",
    "Indian Manufacturers",
    "Export Sourcing",
    "Food Exports",
    "Construction Materials Export",
    "Industrial Sourcing India",
    "Textile Exporters India",
    "Apex Vanguard Global",
  ],
  authors: [{ name: "Apex Vanguard Global" }],
  openGraph: {
    title: "Apex Vanguard Global | Premium Global Sourcing",
    description:
      "Connecting global buyers with verified Indian manufacturers across Food Products, Construction Materials, Industrial Materials, and Textiles.",
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
  twitter: {
    card: "summary_large_image",
    title: "Apex Vanguard Global | Premium Global Sourcing",
    description:
      "Connecting global buyers with verified Indian manufacturers across Food, Construction, Industrial & Textiles.",
    images: ["https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-apex-purple selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
