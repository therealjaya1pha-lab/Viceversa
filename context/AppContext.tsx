'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  isScreenerOpen: boolean;
  setIsScreenerOpen: (open: boolean) => void;
  selectedServiceForBooking: string | null;
  openBookingWithService: (serviceName?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScreenerOpen, setIsScreenerOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | null>(null);

  const openBookingWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    } else {
      setSelectedServiceForBooking(null);
    }
    setIsBookingOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isBookingOpen,
        setIsBookingOpen,
        isScreenerOpen,
        setIsScreenerOpen,
        selectedServiceForBooking,
        openBookingWithService,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
