'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function ScheduleBanner() {
  const { openBookingWithService, language } = useApp();
  const isEs = language === 'es';

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#1E293B] via-[#2D121B] to-[#1E293B] border-y border-white/10 text-white text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,29,56,0.15)_0,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-script tracking-wide text-white leading-tight drop-shadow-sm">
          {isEs ? '¡AGENDE UNA CITA HOY!' : 'SCHEDULE AN APPOINTMENT TODAY!'}
        </h2>

        <p className="text-base sm:text-lg font-medium text-slate-200/90">
          Hablamos español, consulte con nosotros para solicitar una cita.
        </p>

        <div className="pt-2">
          <button
            onClick={() => openBookingWithService()}
            className="bg-white hover:bg-slate-50 text-[#9C1D38] px-9 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
          >
            {isEs ? 'CONTÁCTENOS' : 'CONTACT US'}
          </button>
        </div>
      </div>
    </section>
  );
}
