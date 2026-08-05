'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function HeroSlider() {
  const { language, openBookingWithService } = useApp();
  const isEs = language === 'es';

  const slides = [
    {
      title: isEs ? 'Servicios de Habla y Lenguaje' : 'Speech and Language Services',
      subtitle: isEs
        ? 'Evaluación y tratamiento compasivo e individualizado para niños'
        : 'Compassionate, individualized evaluation & therapy for children in Irving, TX',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1600',
      tag: isEs ? 'Clínica Especializada' : 'Specialized Pediatric Practice',
    },
    {
      title: isEs ? 'Terapia de Alimentación Sensorial' : 'Pediatric Feeding & Swallowing',
      subtitle: isEs
        ? 'Terapeutas certificadas en metodologías AEIOU y SOS'
        : 'Certified AEIOU & SOS feeding specialists for sensory food aversion',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1600',
      tag: isEs ? 'Especialistas AEIOU y SOS' : 'AEIOU & SOS Certified',
    },
    {
      title: isEs ? 'Programas EmpowerEd y Empower U' : 'EmpowerEd & Empower U Programs',
      subtitle: isEs
        ? 'Equipando a los estudiantes con habilidades académicas e independencia'
        : 'Equipping learners with essential skills for academic success & daily independence',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600',
      tag: isEs ? 'Éxito Académico' : 'Academic & Life Mastery',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[520px] md:h-[620px] bg-[#1A1A1A] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Floating Hero Content Box (Mirrors screenshot design) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-2xl shadow-2xl max-w-2xl w-full text-center border border-white/60 transform transition-all animate-in fade-in zoom-in-95">
          <div className="inline-flex items-center space-x-1.5 bg-[#9C1D38]/10 text-[#9C1D38] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9C1D38]" />
            <span>{slides[current].tag}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B2B2B] tracking-tight font-serif leading-tight mb-3">
            {slides[current].title}
          </h1>

          <p className="text-sm sm:text-base text-gray-700 font-medium mb-8 max-w-lg mx-auto">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto bg-white border-2 border-[#9C1D38] text-[#9C1D38] hover:bg-red-50 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow"
            >
              {isEs ? 'NUESTROS SERVICIOS' : 'OUR SERVICES'}
            </Link>
            <button
              onClick={() => openBookingWithService()}
              className="w-full sm:w-auto bg-[#9C1D38] hover:bg-[#7A1429] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              {isEs ? 'CONTÁCTENOS' : 'CONTACT US'}
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/30 hover:bg-white/60 text-white hover:text-[#2B2B2B] backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/30 hover:bg-white/60 text-white hover:text-[#2B2B2B] backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? 'bg-[#9C1D38] w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
