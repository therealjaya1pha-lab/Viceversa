'use client';

import React from 'react';
import Link from 'next/link';
import { Volume2, MessageSquare, UtensilsCrossed, BookOpen, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ServicesOverview() {
  const { language, openBookingWithService } = useApp();
  const isEs = language === 'es';

  const services = [
    {
      title: isEs ? 'Trastornos del Habla y Articulación' : 'Speech Sound & Articulation',
      description: isEs
        ? 'Tratamiento para claridad de articulación, inteligibilidad y patrones fonológicos.'
        : 'Therapy to improve sound production, clarity of speech, and phonological awareness.',
      icon: Volume2,
      tag: isEs ? 'Evaluación y Terapia' : 'Evaluation & Treatment',
    },
    {
      title: isEs ? 'Terapia de Alimentación Sensorial' : 'Feeding & Swallowing (SOS / AEIOU)',
      description: isEs
        ? 'Intervención especializada para aversiones sensoriales a alimentos y disfagia.'
        : 'Specialized therapy for picky eating, oral motor delays, and sensory food aversion.',
      icon: UtensilsCrossed,
      tag: 'SOS & AEIOU Certified',
    },
    {
      title: isEs ? 'Retraso del Lenguaje Receptivo y Expresivo' : 'Receptive & Expressive Language',
      description: isEs
        ? 'Promoción de vocabulario, estructuración de frases y comprensión auditiva.'
        : 'Building vocabulary, sentence structure, comprehension, and expressive communication.',
      icon: MessageSquare,
      tag: isEs ? 'Intervención Temprana' : 'Early Intervention',
    },
    {
      title: isEs ? 'Lectura Multisensorial Orton-Gillingham' : 'Orton-Gillingham Reading Program',
      description: isEs
        ? 'Estrategia fonética multisensorial estructurada para dislexia y lectura.'
        : 'Structured multi-sensory phonics & reading program tailored for young learners.',
      icon: BookOpen,
      tag: 'Multi-Sensory Phonics',
    },
    {
      title: isEs ? 'Evaluación y Dispositivos AAC' : 'AAC Augmentative Communication',
      description: isEs
        ? 'Sistemas de comunicación alternativa para niños no verbales o con habla limitada.'
        : 'High-tech & low-tech AAC device evaluations to give every child a unique voice.',
      icon: Cpu,
      tag: 'High & Low Tech AAC',
    },
    {
      title: isEs ? 'Programas Educativos EmpowerEd' : 'EmpowerEd & Empower U',
      description: isEs
        ? 'Habilidades de función ejecutiva, autonomía diaria y éxito escolar.'
        : 'Executive function coaching, daily life independence, and academic advocacy.',
      icon: Sparkles,
      tag: 'Academic & Life Skills',
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-burgundy inline-block">
            {isEs ? 'Atención Clínica Especializada' : 'Specialized Clinical Care'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">
            {isEs ? 'Servicios Destacados de Terapia Infantil' : 'Comprehensive Diagnostic & Therapy Services'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isEs
              ? 'Ofrecemos programas individualizados y basados en evidencia para potenciar la comunicación de su hijo(a).'
              : 'Empowering children with tailored speech, language, feeding, and educational support.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="surface-card surface-card-hover p-8 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] text-[#9C1D38] flex items-center justify-center group-hover:bg-[#9C1D38] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#9C1D38] bg-[#FDF2F4] border border-[#F4C5CE] px-2.5 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#9C1D38] transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openBookingWithService(s.title)}
                    className="text-xs font-bold uppercase tracking-wider text-[#9C1D38] hover:text-[#7A1429] flex items-center space-x-1 group/btn"
                  >
                    <span>{isEs ? 'Agendar Evaluación' : 'Schedule Evaluation'}</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    href="/services"
                    className="text-xs text-slate-500 hover:text-slate-900 font-medium"
                  >
                    {isEs ? 'Más info' : 'Details →'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
