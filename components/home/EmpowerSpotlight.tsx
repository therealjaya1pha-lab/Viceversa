'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';

export default function EmpowerSpotlight() {
  const { language } = useApp();
  const isEs = language === 'es';

  return (
    <section className="py-20 bg-[#EAEAEE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl border border-gray-100 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B2B2B] font-serif tracking-tight">
                Empower!
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {isEs
                  ? '¡Descubra cómo nuestros programas Empower pueden transformar el futuro de su estudiante! En Vice Versa Speech and Language Services, nuestros programas EmpowerEd y Empower U están diseñados para equipar a su estudiante con las habilidades esenciales necesarias para el éxito académico y la independencia diaria. Ya sea que su estudiante necesite apoyo en su viaje educativo o desee generar confianza en las tareas de la vida diaria, nuestros programas están aquí para guiarlo en cada paso del camino.'
                  : 'Discover how our Empower programs can transform your learner’s future! At Vice Versa Speech and Language Services, our EmpowerEd and Empower U programs are designed to equip your learner with the essential skills needed for academic success and everyday independence. Whether your learner needs support in their educational journey or wants to build confidence in daily life tasks, our programs are here to guide them every step of the way. Don’t miss out on this incredible opportunity to empower your learner to thrive—click the button below to learn more and see how EmpowerEd and Empower U can make a difference in their lives!'}
              </p>

              <div>
                <Link
                  href="/empower"
                  className="inline-block bg-[#B85C6E] hover:bg-[#A34A5C] text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
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
