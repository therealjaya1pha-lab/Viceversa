'use client';

import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import EmpowerSpotlight from '@/components/home/EmpowerSpotlight';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import ServicesOverview from '@/components/home/ServicesOverview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <IntroSection />
        <ServicesOverview />
        <EmpowerSpotlight />
        <TestimonialsSection />
        <ScheduleBanner />
      </main>
      <Footer />
      <AppointmentModal />
      <SymptomScreenerModal />
      <ParentAssistant />
    </div>
  );
}
