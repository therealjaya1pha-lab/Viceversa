'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import { useApp } from '@/context/AppContext';
import { Sparkles, GraduationCap, CheckCircle2, Target, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function EmpowerPage() {
  const { language, openBookingWithService } = useApp();
  const isEs = language === 'es';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Banner */}
        <div className="bg-[#9C1D38] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full text-red-100">
              {isEs ? 'Programas Educativos y de Vida' : 'Academic & Life Empowerment'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif">
              EmpowerEd & Empower U
            </h1>
            <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto">
              {isEs
                ? 'Equipando a los estudiantes con las habilidades necesarias para el éxito académico y la independencia en la vida diaria.'
                : 'Equipping learners with essential skills for academic success and everyday independence.'}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EmpowerEd Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-red-100 shadow-md space-y-6 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#9C1D38] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold text-[#2B2B2B] font-serif">EmpowerEd</h2>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {isEs
                    ? 'EmpowerEd está diseñado para brindar apoyo académico integral a estudiantes que enfrentan desafíos en lectura, escritura, atención y procesamiento del lenguaje.'
                    : 'EmpowerEd is tailored for students needing targeted educational support in reading, writing, comprehension, executive function, and study habits.'}
                </p>

                <ul className="space-y-2 text-xs text-gray-700 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span>{isEs ? 'Coaching de Función Ejecutiva' : 'Executive Function & Time Management'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span>{isEs ? 'Comprensión Lectora y Escritura' : 'Reading Comprehension & Narrative Writing'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span>{isEs ? 'Preparación para Clases y Exámenes' : 'Classroom Readiness & Test Strategies'}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => openBookingWithService('EmpowerEd Program')}
                  className="w-full bg-[#9C1D38] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#7A1429]"
                >
                  {isEs ? 'Inscribirse en EmpowerEd' : 'Enroll in EmpowerEd'}
                </button>
              </div>
            </div>

            {/* Empower U Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-100 shadow-md space-y-6 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5A52A3] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold text-[#2B2B2B] font-serif">Empower U</h2>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {isEs
                    ? 'Empower U se enfoca en el desarrollo de la autonomía en la vida cotidiana, interacción social pragmática y confianza para niños y adolescentes.'
                    : 'Empower U focuses on practical daily life independence, social pragmatics, communication confidence, and peer interaction mastery.'}
                </p>

                <ul className="space-y-2 text-xs text-gray-700 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5A52A3]" />
                    <span>{isEs ? 'Habilidades de Vida Diaria' : 'Daily Living & Autonomy Skills'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5A52A3]" />
                    <span>{isEs ? 'Comunicación Social y Pragmática' : 'Social Communication & Peer Interaction'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5A52A3]" />
                    <span>{isEs ? 'Autodefensa y Confianza' : 'Self-Advocacy & Personal Confidence'}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => openBookingWithService('Empower U Program')}
                  className="w-full bg-[#C8C5F4] text-[#2B2B2B] py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#B5B1EF]"
                >
                  {isEs ? 'Inscribirse en Empower U' : 'Enroll in Empower U'}
                </button>
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
