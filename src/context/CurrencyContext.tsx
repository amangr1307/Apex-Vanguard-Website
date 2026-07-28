"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "USD" | "EUR" | "AED" | "INR";

export interface CurrencyDetails {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateToUSD: number; // 1 USD in target currency
}

export const CURRENCIES: Record<CurrencyCode, CurrencyDetails> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar", rateToUSD: 1.0 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rateToUSD: 0.92 },
  AED: { code: "AED", symbol: "AED", name: "UAE Dirham", rateToUSD: 3.67 },
  INR: { code: "INR", symbol: "₹", name: "Indian Rupee", rateToUSD: 83.2 },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (amountInUSD: number) => string;
  currentCurrencyDetails: CurrencyDetails;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    const saved = localStorage.getItem("avg_currency") as CurrencyCode;
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code);
    localStorage.setItem("avg_currency", code);
  };

  const currentCurrencyDetails = CURRENCIES[currency];

  const formatPrice = (amountInUSD: number): string => {
    const converted = amountInUSD * currentCurrencyDetails.rateToUSD;
    if (currency === "INR") {
      return `${currentCurrencyDetails.symbol}${Math.round(converted).toLocaleString("en-IN")}`;
    }
    return `${currentCurrencyDetails.symbol}${converted.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currentCurrencyDetails,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
