'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';

export default function IntroSection() {
  const { language } = useApp();
  const isEs = language === 'es';

  return (
    <section className="section-spacing-md bg-white overflow-hidden">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-fluid-h2 font-extrabold text-[#9C1D38]">
              {isEs
                ? 'Vice Versa es una práctica privada dedicada a brindar terapia de habla, lenguaje y alimentación de la más alta calidad, junto con servicios diagnósticos integrales.'
                : 'Vice Versa is a private practice dedicated to delivering the highest quality speech, language, and feeding therapy, along with comprehensive diagnostic services.'}
            </h2>

            <div className="space-y-4 text-fluid-body text-slate-700">
              <p>
                {isEs
                  ? 'Nos enorgullecemos de fomentar un ambiente familiar para dar la bienvenida a nuestros jóvenes clientes y pasar tiempo trabajando en estrecha colaboración con los padres para ayudar a promover la comunicación de su hijo pequeño en el hogar y en la comunidad.'
                  : 'We pride ourselves in nurturing a family friendly environment to welcome our young clients and spend time working closely with parents to help promote their young child’s communication at home and within the community.'}
              </p>
              <p>
                {isEs
                  ? 'Ofrecemos evaluación y tratamiento para una variedad de trastornos del habla y lenguaje infantil. Las intervenciones se personalizan para mejorar los resultados terapéuticos de cada niño mientras se divierten. También brindamos el programa de lectura multisensorial Orton-Gillingham y el programa educativo EmpowerEd.'
                  : 'We offer evaluation and treatment for a range of childhood speech and language disorders. Interventions are individualized to improve therapy outcomes for each child while having fun. We also provide Orton-Gillingham multi-sensory reading program, and the EmpowerEd-educational program.'}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block bg-[#9C1D38] hover:bg-[#7A1429] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                {isEs ? 'MÁS SOBRE NOSOTROS' : 'READ MORE ABOUT US'}
              </Link>
            </div>
          </div>

          {/* Right Image Column with Gradient Frame Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset Background Accent Box */}
              <div className="absolute top-6 left-6 -bottom-6 -right-6 bg-gradient-to-tr from-[#9C1D38]/15 via-[#C8C5F4]/30 to-[#FDF2F4] rounded-2xl z-0 border border-purple-accent/30" />
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                  alt="Therapist with young client at Vice Versa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
