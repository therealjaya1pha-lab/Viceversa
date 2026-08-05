'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function ScheduleBanner() {
  const { openBookingWithService, language } = useApp();
  const isEs = language === 'es';

  return (
    <section className="py-16 md:py-20 bg-[#111111] text-white text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-script tracking-wide text-white leading-tight">
          {isEs ? '¡AGENDE UNA CITA HOY!' : 'SCHEDULE AN APPOINTMENT TODAY!'}
        </h2>

        <p className="text-base sm:text-lg font-medium text-gray-300">
          Hablamos español, consulte con nosotros para solicitar una cita.
        </p>

        <div className="pt-2">
          <button
            onClick={() => openBookingWithService()}
            className="bg-white hover:bg-gray-100 text-[#2B2B2B] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isEs ? 'CONTÁCTENOS' : 'CONTACT US'}
          </button>
        </div>
      </div>
    </section>
  );
}
