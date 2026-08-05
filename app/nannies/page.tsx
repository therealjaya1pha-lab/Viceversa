'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import { useApp } from '@/context/AppContext';
import { Sparkles, HeartHandshake, BookOpen, CheckCircle2, Award, Phone } from 'lucide-react';

export default function NanniesPage() {
  const { language, openBookingWithService } = useApp();
  const isEs = language === 'es';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Banner with LOLN Purple Accent */}
        <div className="bg-[#C8C5F4] text-[#2B2B2B] py-14 px-4 border-b border-[#B5B1EF]">
          <div className="max-w-7xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/70 px-3.5 py-1 rounded-full text-[#5A52A3] border border-[#5A52A3]/20">
              LOLN • Language of Learning Nannies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif">
              {isEs ? 'Capacitación y Coaching de Niñeras (LOLN)' : 'Language of Learning Nannies (LOLN)'}
            </h1>
            <p className="text-sm sm:text-base text-gray-800 max-w-2xl mx-auto">
              {isEs
                ? 'Capacitando a niñeras y cuidadoras con técnicas de facilitación del habla, lenguaje y desarrollo temprano en el hogar.'
                : 'Empowering nannies & caregivers with specialized speech enrichment, feeding support, and early language techniques.'}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9C1D38] bg-red-50 px-3 py-1 rounded-full">
                {isEs ? 'Enriquecimiento en el Hogar' : 'In-Home Enrichment'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2B2B] font-serif">
                {isEs
                  ? 'Transformando el Tiempo de Cuidado en Oportunidades de Aprendizaje'
                  : 'Transforming Everyday Care into Language Learning Opportunities'}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {isEs
                  ? 'En Vice Versa Speech and Language Services reconocemos que las niñeras y cuidadoras pasan horas cruciales con los niños durante las etapas más receptivas del desarrollo cerebral. Nuestro programa LOLN (Language of Learning Nannies) brinda capacitación práctica en estrategias del habla, lectura multisensorial y rutinas de alimentación para aplicar en casa.'
                  : 'At Vice Versa, we recognize that nannies spend foundational hours with young children during peak language acquisition windows. Our LOLN program trains caregivers directly on speech modeling, reading routines, and feeding strategies tailored to your child.'}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#9C1D38] shrink-0 mt-0.5" />
                  <div>
                    <strong>{isEs ? 'Modelado de Habla y Lenguaje:' : 'Speech Modeling Techniques:'}</strong>{' '}
                    {isEs
                      ? 'Estrategias de expansión de oraciones, tiempo de espera y juego interactivo.'
                      : 'Sentence expansion, wait-time strategies, and interactive play routines.'}
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#9C1D38] shrink-0 mt-0.5" />
                  <div>
                    <strong>{isEs ? 'Rutinas de Alimentación Positivas:' : 'Positive Feeding Practices:'}</strong>{' '}
                    {isEs
                      ? 'Implementación de pautas sensoriales AEIOU / SOS sin presión a la hora de comer.'
                      : 'Applying AEIOU & SOS sensory principles without mealtime friction.'}
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#9C1D38] shrink-0 mt-0.5" />
                  <div>
                    <strong>{isEs ? 'Lectura Multisensorial:' : 'Multi-Sensory Book Reading:'}</strong>{' '}
                    {isEs
                      ? 'Técnicas de lectura dialogada y fomento de vocabulario.'
                      : 'Dialogic reading methods to expand expressive vocabulary.'}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openBookingWithService('Language of Learning Nannies')}
                  className="bg-[#2B2B2B] hover:bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  {isEs ? 'CONSULTAR SOBRE EL PROGRAMA LOLN' : 'INQUIRE ABOUT LOLN PROGRAM'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[420px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000"
                  alt="Language of Learning Nannies caregiving support"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        <ScheduleBanner />
      </main>
      <Footer />
      <AppointmentModal />
      <SymptomScreenerModal />
      <ParentAssistant />
    </div>
  );
}
