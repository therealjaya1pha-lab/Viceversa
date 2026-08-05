'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import { useApp } from '@/context/AppContext';
import { Volume2, UtensilsCrossed, MessageSquare, BookOpen, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const { language, openBookingWithService, setIsScreenerOpen } = useApp();
  const isEs = language === 'es';

  const [activeTab, setActiveTab] = useState<'all' | 'speech' | 'feeding' | 'reading' | 'empower'>('all');

  const detailedServices = [
    {
      id: 'speech-sound',
      category: 'speech',
      title: isEs ? 'Trastornos del Habla y Articulación' : 'Speech Sound & Articulation Disorders',
      tag: isEs ? 'Evaluación y Terapia' : 'Evaluation & Direct Therapy',
      summary: isEs
        ? 'Evaluación y tratamiento individualizado para mejorar la precisión de los sonidos del habla, la inteligibilidad y la pronunciación.'
        : 'Comprehensive diagnostic testing and weekly individualized therapy to correct articulation errors, phonological patterns, and motor speech delays.',
      points: [
        isEs ? 'Corrección de sonidos difíciles (R, S, L, Z, TH, CH)' : 'Targeted correction for stubborn sound errors (R, S, L, Z, TH, CH)',
        isEs ? 'Tratamiento de apraxia del habla infantil (CAS)' : 'Childhood Apraxia of Speech (CAS) motor planning protocols',
        isEs ? 'Inteligibilidad en la escuela y el hogar' : 'Enhancing functional clarity for family and teachers',
      ],
      icon: Volume2,
      clinician: 'Deborah Modé, MS, CCC-SLP & Team',
    },
    {
      id: 'feeding-therapy',
      category: 'feeding',
      title: isEs ? 'Terapia de Alimentación Sensorial (AEIOU y SOS)' : 'Sensory Feeding & Swallowing Therapy (AEIOU & SOS)',
      tag: 'AEIOU & SOS Certified',
      summary: isEs
        ? 'Intervención clínica especializada para niños con aversión a texturas de alimentos, comedores selectivos y dificultades motoras orales.'
        : 'Evidence-based sensory and motor feeding therapy designed for picky eaters, food texture aversion, swallowing difficulty, and tube-transitioning.',
      points: [
        isEs ? 'Terapeutas certificadas en metodologías AEIOU y SOS' : 'AEIOU Feeding Approach & SOS Sequential Oral Sensory Certified',
        isEs ? 'Reducción de ansiedad a la hora de comer en familia' : 'Desensitizing food anxiety and building a diverse food palette',
        isEs ? 'Mejora del tono motor oral, masticación y deglución' : 'Strengthening oral motor chewing, biting, and swallowing safety',
      ],
      icon: UtensilsCrossed,
      clinician: 'Ayesha Ali, MS, CCC-SLP (AEIOU Specialist)',
    },
    {
      id: 'language-delay',
      category: 'speech',
      title: isEs ? 'Retraso del Lenguaje Receptivo y Expresivo' : 'Receptive & Expressive Language Delays',
      tag: isEs ? 'Intervención Temprana' : 'Early & School-Age Language',
      summary: isEs
        ? 'Desarrollo de habilidades de lenguaje verbal, estructuración de oraciones, vocabulario y comprensión auditiva.'
        : 'Assessing and building language milestones from late talkers to school-age narrative and comprehension struggles.',
      points: [
        isEs ? 'Ampliación de vocabulario y combinación de palabras' : 'Early vocabulary expansion & 2-3 word sentence building',
        isEs ? 'Comprensión de instrucciones complejas y preguntas' : 'Improving auditory processing & multi-step direction following',
        isEs ? 'Habilidades bilingües en inglés y español' : 'Bilingual language facilitation for English & Spanish speakers',
      ],
      icon: MessageSquare,
      clinician: 'Dana Beranger, MA, CCC-SLP (Bilingual Specialist)',
    },
    {
      id: 'orton-gillingham',
      category: 'reading',
      title: isEs ? 'Programa de Lectura Multisensorial Orton-Gillingham' : 'Orton-Gillingham Multi-Sensory Reading Program',
      tag: 'Dyslexia & Phonics',
      summary: isEs
        ? 'Enfoque estructurado, explícito y multisensorial diseñado para enseñar habilidades de lectura, decodificación y escritura a niños.'
        : 'Structured, explicit, and multi-sensory phonics program specifically crafted for children with reading delays, dyslexia, and decoding challenges.',
      points: [
        isEs ? 'Conciencia fonológica y reconocimiento de letras/sonidos' : 'Phonemic awareness & systematic letter-sound association',
        isEs ? 'Estrategias multisensoriales táctiles y visuales' : 'Visual, auditory, and kinesthetic multi-sensory techniques',
        isEs ? 'Fluidez en lectura y comprensión de lectura' : 'Building reading fluency and text comprehension confidence',
      ],
      icon: BookOpen,
      clinician: 'Vice Versa Reading Specialists',
    },
    {
      id: 'aac-devices',
      category: 'speech',
      title: isEs ? 'Evaluación y Dispositivos de Comunicación AAC' : 'AAC Augmentative & Alternative Communication',
      tag: 'High & Low Tech AAC',
      summary: isEs
        ? 'Evaluación y selección de sistemas de comunicación alternativa (tabletas de voz, tableros de símbolos) para dar voz a cada niño.'
        : 'Evaluating, implementing, and coaching families on augmentative communication devices (SGDs, AAC apps, communication boards) for non-verbal children.',
      points: [
        isEs ? 'Evaluación diagnóstica para financiamiento de seguros' : 'Diagnostic trial evaluations for Medicaid & insurance funding',
        isEs ? 'Capacitación interactiva para padres y cuidadores' : 'Parent & caregiver training to integrate AAC into daily routines',
        isEs ? 'Modelado en vivo durante las sesiones de terapia' : 'Live modeling and functional vocabulary customization',
      ],
      icon: Cpu,
      clinician: 'Deborah Modé & Ayesha Ali',
    },
    {
      id: 'empower-program',
      category: 'empower',
      title: isEs ? 'Programas Educativos EmpowerEd y Empower U' : 'EmpowerEd & Empower U Educational Programs',
      tag: 'Academic & Life Mastery',
      summary: isEs
        ? 'Programas diseñados para equipar al estudiante con habilidades de función ejecutiva, independencia académica y autonomía en la vida diaria.'
        : 'Tailored programs equipping learners with executive function coaching, educational advocacy, organization, and everyday independent living skills.',
      points: [
        isEs ? 'Coaching de organización y atención escolar' : 'School independence & executive function skill building',
        isEs ? 'Autonomía en tareas cotidianas y autodefensa' : 'Daily life task mastery & confidence building',
        isEs ? 'Apoyo a familias en reuniones educativas (IEP)' : 'Family guidance for educational goals and school success',
      ],
      icon: Sparkles,
      clinician: 'Empower Program Specialists',
    },
  ];

  const filteredServices =
    activeTab === 'all'
      ? detailedServices
      : detailedServices.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Banner */}
        <div className="bg-[#9C1D38] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full text-red-100">
              {isEs ? 'Catálogo de Servicios Clínicos' : 'Pediatric Clinical Services'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif">
              {isEs ? 'Servicios de Habla, Lenguaje y Alimentación' : 'Speech, Language & Feeding Therapies'}
            </h1>
            <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto">
              {isEs
                ? 'Ofrecemos evaluaciones diagnósticas y planes de tratamiento individualizados para cada etapa del desarrollo infantil.'
                : 'Empowering children in Irving, TX with evidence-based, highly individualized clinical therapies.'}
            </p>
          </div>
        </div>

        {/* Services Main Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 pb-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#9C1D38] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isEs ? 'Todos los Servicios' : 'All Services'}
            </button>
            <button
              onClick={() => setActiveTab('speech')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'speech'
                  ? 'bg-[#9C1D38] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isEs ? 'Habla y Lenguaje' : 'Speech & Language'}
            </button>
            <button
              onClick={() => setActiveTab('feeding')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'feeding'
                  ? 'bg-[#9C1D38] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isEs ? 'Terapia de Alimentación (AEIOU/SOS)' : 'Feeding & Swallowing'}
            </button>
            <button
              onClick={() => setActiveTab('reading')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'reading'
                  ? 'bg-[#9C1D38] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isEs ? 'Lectura Orton-Gillingham' : 'Orton-Gillingham Reading'}
            </button>
            <button
              onClick={() => setActiveTab('empower')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'empower'
                  ? 'bg-[#9C1D38] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isEs ? 'Programas Empower' : 'EmpowerEd & Empower U'}
            </button>
          </div>

          {/* Screener Banner Prompt */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900 text-base">
                {isEs ? '¿No está seguro de qué servicio necesita su hijo(a)?' : 'Unsure which therapy your child needs?'}
              </h4>
              <p className="text-xs text-amber-800">
                {isEs
                  ? 'Pruebe nuestro evaluador rápido de hitos para recibir una recomendación inmediata.'
                  : 'Use our 1-minute interactive milestone screener to get tailored guidance.'}
              </p>
            </div>
            <button
              onClick={() => setIsScreenerOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-sm"
            >
              {isEs ? 'INICIAR EVALUADOR RÁPIDO' : 'START QUICK SCREENER'}
            </button>
          </div>

          {/* Services List */}
          <div className="space-y-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#9C1D38] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-[#9C1D38] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                          {service.tag}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-[#2B2B2B] font-serif">{service.title}</h2>

                      <p className="text-sm text-gray-700 leading-relaxed">{service.summary}</p>

                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                          {isEs ? 'Aspectos Clave del Programa:' : 'Key Therapy Components:'}
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {service.points.map((pt, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <CheckCircle2 className="w-4 h-4 text-[#9C1D38] shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-gray-50 p-6 rounded-xl border border-gray-200/80 space-y-4">
                      <div className="text-xs space-y-1">
                        <span className="text-gray-500 uppercase font-bold text-[10px] tracking-wider">
                          {isEs ? 'Especialistas a Cargo:' : 'Clinical Lead:'}
                        </span>
                        <p className="font-bold text-[#2B2B2B]">{service.clinician}</p>
                      </div>

                      <div className="text-xs text-gray-600 space-y-1">
                        <span className="text-gray-500 uppercase font-bold text-[10px] tracking-wider">
                          {isEs ? 'Modalidades:' : 'Modality:'}
                        </span>
                        <p>{isEs ? 'En clínica (Irving, TX) y teleterapia' : 'In-Clinic (Irving, TX) & Teletherapy'}</p>
                      </div>

                      <button
                        onClick={() => openBookingWithService(service.title)}
                        className="w-full bg-[#9C1D38] hover:bg-[#7A1429] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center space-x-1"
                      >
                        <span>{isEs ? 'AGENDAR EVALUACIÓN' : 'BOOK THIS EVALUATION'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
