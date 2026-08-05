'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Calendar, PhoneCall, CheckCircle2, Sparkles } from 'lucide-react';

interface ArticleCTAProps {
  category: string;
}

export default function ArticleCTA({ category }: ArticleCTAProps) {
  const { language, openBookingWithService, setIsScreenerOpen } = useApp();
  const isEs = language === 'es';

  return (
    <div className="bg-[#9C1D38] text-white rounded-2xl p-8 shadow-xl space-y-6">
      <div className="space-y-2 text-center sm:text-left">
        <span className="text-[11px] font-bold uppercase tracking-widest bg-white/20 text-red-100 px-3 py-1 rounded-full">
          {isEs ? 'Atención Clínica Profesional en Irving, TX' : 'Pediatric Care in Irving, TX'}
        </span>
        <h3 className="text-2xl font-bold font-serif">
          {isEs
            ? '¿Tiene preguntas sobre la comunicación o alimentación de su hijo(a)?'
            : 'Have Questions About Your Child’s Development?'}
        </h3>
        <p className="text-xs sm:text-sm text-red-100 max-w-xl">
          {isEs
            ? 'En Vice Versa Speech and Language Services ofrecemos evaluaciones diagnósticas completas y terapia personalizada. Aceptamos Texas Medicaid y la mayoría de los seguros.'
            : 'Our certified clinicians provide comprehensive evaluations, AEIOU feeding therapy, and Orton-Gillingham reading programs.'}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <button
          onClick={() => openBookingWithService(category)}
          className="w-full sm:w-auto bg-white text-[#9C1D38] hover:bg-red-50 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
        >
          <Calendar className="w-4 h-4" />
          <span>{isEs ? 'SOLICITAR EVALUACIÓN' : 'SCHEDULE EVALUATION'}</span>
        </button>

        <button
          onClick={() => setIsScreenerOpen(true)}
          className="w-full sm:w-auto bg-red-900/60 hover:bg-red-900 text-white border border-red-400 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{isEs ? 'EVALUADOR RÁPIDO 1 MIN' : 'TAKE 1-MIN SCREENER'}</span>
        </button>
      </div>
    </div>
  );
}
