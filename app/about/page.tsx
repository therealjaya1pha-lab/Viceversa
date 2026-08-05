'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutOwner from '@/components/about/AboutOwner';
import TeamSection from '@/components/about/TeamSection';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import { useApp } from '@/context/AppContext';

export default function AboutPage() {
  const { language } = useApp();
  const isEs = language === 'es';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* About Hero Image Banner Matching Image 2 */}
        <div className="relative h-64 md:h-80 w-full bg-[#2B2B2B] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600"
            alt="Vice Versa Compassionate Speech Therapy Care"
            fill
            priority
            className="object-cover opacity-45"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="layout-container pb-8">
              <span className="text-red-300 text-fluid-caption font-bold uppercase tracking-widest bg-red-950/60 px-3 py-1 rounded-full border border-red-800">
                {isEs ? 'Sobre Vice Versa' : 'About Vice Versa'}
              </span>
              <h1 className="text-fluid-h1 font-extrabold text-white font-serif-brand mt-2">
                {isEs ? 'Nuestra Historia y Equipo Clínico' : 'Our Story & Clinical Team'}
              </h1>
            </div>
          </div>
        </div>

        {/* Main About Content */}
        <div className="layout-container section-spacing-md space-y-16">
          <AboutOwner />
          <TeamSection />
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
