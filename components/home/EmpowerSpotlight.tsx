'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';

export default function EmpowerSpotlight() {
  const { language } = useApp();
  const isEs = language === 'es';

  return (
    <section className="section-spacing-md bg-[#F8FAFC] overflow-hidden">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[380px] sm:h-[440px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000"
                alt="EmpowerEd parent therapist support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Side White Box Card */}
          <div className="lg:col-span-6">
            <div className="surface-card p-8 sm:p-10 md:p-12 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#9C1D38]/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="inline-block badge-purple text-fluid-sm font-semibold">
                {isEs ? 'Programa Educativo Especializado' : 'Specialized Education Program'}
              </div>

              <h2 className="text-fluid-h2 font-extrabold text-[#1E293B] tracking-tight">
                Empower!
              </h2>

              <p className="text-slate-600 text-fluid-body">
                {isEs
                  ? '¡Descubra cómo nuestros programas Empower pueden transformar el futuro de su estudiante! En Vice Versa Speech and Language Services, nuestros programas EmpowerEd y Empower U están diseñados para equipar a su estudiante con las habilidades esenciales necesarias para el éxito académico y la independencia diaria. Ya sea que su estudiante necesite apoyo en su viaje educativo o desee generar confianza en las tareas de la vida diaria, nuestros programas están aquí para guiarlo en cada paso del camino.'
                  : 'Discover how our Empower programs can transform your learner’s future! At Vice Versa Speech and Language Services, our EmpowerEd and Empower U programs are designed to equip your learner with the essential skills needed for academic success and everyday independence. Whether your learner needs support in their educational journey or wants to build confidence in daily life tasks, our programs are here to guide them every step of the way. Don’t miss out on this incredible opportunity to empower your learner to thrive—click the button below to learn more and see how EmpowerEd and Empower U can make a difference in their lives!'}
              </p>

              <div>
                <Link
                  href="/empower"
                  className="inline-block bg-[#9C1D38] hover:bg-[#7A1429] text-white px-8 py-3.5 rounded-xl text-fluid-button font-bold tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  {isEs ? 'Comenzar' : 'Get Started'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
