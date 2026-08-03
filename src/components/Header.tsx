"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight, ShieldCheck, Globe } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Become Supplier", href: "/become-supplier" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 border-b border-apex-border/80 dark:border-apex-borderDark/80 shadow-apex-soft"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-apex-purple flex items-center justify-center text-white shadow-md shadow-apex-purple/30 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-apex-dark dark:text-white leading-tight whitespace-nowrap">
                APEX <span className="text-apex-purple">VANGUARD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase font-extrabold text-gray-500 dark:text-gray-400 tracking-[0.25em] pl-[0.25em] leading-none mt-0.5 whitespace-nowrap">
                GLOBAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm sm:text-[15px] font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-apex-purple font-bold"
                      : "text-apex-dark/80 dark:text-gray-300 hover:text-apex-purple dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-apex-purple rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full text-apex-dark dark:text-white bg-apex-surface dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-4.5 h-4.5 text-yellow-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-apex-dark" />
              )}
            </button>

            {/* Request Quote Button */}
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-apex-purple hover:bg-apex-purple-hover text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-apex-purple/25 hover:shadow-apex-purple/40 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full text-apex-dark dark:text-white bg-apex-surface dark:bg-zinc-800"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-apex-dark" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-apex-dark dark:text-white bg-apex-surface dark:bg-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-apex-border dark:border-apex-borderDark px-4 pt-4 pb-6 mt-2"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-apex-purple-light text-apex-purple font-semibold"
                      : "text-apex-dark dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100 dark:border-zinc-800 flex flex-col gap-2">
                <Link
                  href="/request-product"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-semibold py-2.5 px-4 rounded-full border border-apex-border dark:border-zinc-700 text-apex-dark dark:text-white"
                >
                  Request Product
                </Link>
                <Link
                  href="/request-quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-semibold py-2.5 px-4 rounded-full bg-apex-purple text-white shadow-md shadow-apex-purple/20"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
