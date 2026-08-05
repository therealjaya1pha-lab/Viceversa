import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import BlogClientView from '@/components/blog/BlogClientView';
import { getAllPosts, getFeaturedPost } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pediatric Therapy Blog & Clinical Articles | Vice Versa Irving TX',
  description: 'Expert clinical insights, speech milestone guides, SOS/AEIOU feeding therapy advice, and Orton-Gillingham reading tips from Vice Versa Speech and Language Services in Irving, TX.',
  openGraph: {
    title: 'Pediatric Speech & Feeding Therapy Blog | Vice Versa Irving TX',
    description: 'Practical guides and clinical insights for parents navigating speech delays, feeding difficulties, and reading challenges.',
    type: 'website',
  },
};

export default function BlogFeedPage() {
  const posts = getAllPosts();
  const featuredPost = getFeaturedPost();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Blog Banner */}
        <div className="bg-[#9C1D38] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full text-red-100">
              Guías Clínicas y Recursos para Padres
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif">
              Blog de Desarrollo Infantil y Terapias
            </h1>
            <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto">
              Artículos educativos escritos por nuestras patólogas del habla certificadas y especialistas en alimentación en Irving, Texas.
            </p>
          </div>
        </div>

        {/* Interactive Client Search & Feed */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BlogClientView posts={posts} featuredPost={featuredPost} />
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
