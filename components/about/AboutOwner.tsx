'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { Award, GraduationCap, MapPin, HeartHandshake } from 'lucide-react';

export default function AboutOwner() {
  const { language } = useApp();
  const isEs = language === 'es';

  return (
    <div className="space-y-12">
      {/* Red Quote Banner Matching Image 2 */}
      <div className="bg-[#9C1D38] text-white py-12 px-6 rounded-2xl text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-script tracking-wide text-white leading-tight">
          &quot;{isEs ? 'EN VICE VERSA BRINDAMOS ATENCIÓN COMPASIVA.' : 'AT VICE VERSA WE PROVIDE COMPASSIONATE CARE.'}&quot;
        </h1>
      </div>

      {/* About The Owner Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-script text-[#9C1D38] font-bold tracking-wide">
            {isEs ? 'Sobre la Propietaria' : 'ABOUT THE OWNER'}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Owner Photo Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#9C1D38] shadow-md max-w-xs w-full h-[360px]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Deborah Modé - Owner & Founder of Vice Versa Speech and Language Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="text-xl font-bold text-[#2B2B2B]">Deborah Modé</h3>
                <p className="text-xs font-bold text-[#9C1D38] tracking-widest uppercase mt-0.5">
                  OWNER & FOUNDER, VICE VERSA SPEECH
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                  <span className="text-[10px] bg-red-50 text-[#9C1D38] px-2 py-0.5 rounded font-bold">
                    MS, CCC-SLP
                  </span>
                  <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-bold">
                    Licensed TX, CA, MA
                  </span>
                  <span className="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-bold">
                    BCBA Candidate (UNT)
                  </span>
                </div>
              </div>
            </div>

            {/* Owner Bios Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                {isEs
                  ? 'Deborah Modé es la propietaria y fundadora de Vice Versa Speech and Language Services, quien brinda terapia del habla para niños desde 2005. Ofrece el más alto nivel de dedicación y calidad de servicio a los clientes. Su misión es servir a sus clientes y brindar apoyo a sus familias para trabajar en equipo y lograr sus objetivos.'
                  : 'Deborah Modé is the owner and founder of Vice Versa Speech and Language Services who has been providing speech therapy for children since 2005. She provides the highest level of dedication and quality of service to the clients. Her mission is to serve her clients and provide support to their families in order to work as a team to achieve their goals.'}
              </p>

              <p>
                {isEs
                  ? 'Ha estado practicando pediatría desde el inicio de su carrera en múltiples entornos, incluida la atención hospitalaria ambulatoria, servicios a domicilio, entorno escolar y práctica privada, trabajando con una variedad de trastornos congénitos y adquiridos.'
                  : 'She has been practicing pediatrics since the start of her career in multiple settings including, outpatient hospital care, in-home services, school setting, and private practice working with a variety of congenital and acquired disorders.'}
              </p>

              <p>
                {isEs
                  ? 'Deborah posee una Maestría en Ciencias en Patología del Habla y Lenguaje de Worcester State University, así como una Maestría en Ciencias en Trastornos del Espectro Autista de Elms College. Cuenta con licencia de los estados de Texas, California y Massachusetts y está certificada por la Asociación Americana del Habla, Lenguaje y Audición (ASHA). Actualmente está inscrita en la University of North Texas estudiando para obtener su certificación como Analista de Conducta Certificada por la Junta (BCBA).'
                  : 'Deborah holds a Masters of Science in Speech-Language Pathology from Worcester State University as well as a Masters of Science in Autism Spectrum Disorders from Elms College. She is licensed by the state of Texas, California, and the state of Massachusetts and is certified by the American Speech-Language and Hearing Association. She is currently enrolled at the University of North Texas studying to obtain her certification to be a Board Certified Behavior Analyst.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
                  <GraduationCap className="w-4 h-4 text-[#9C1D38]" />
                  <span>Worcester State & Elms</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
                  <Award className="w-4 h-4 text-[#9C1D38]" />
                  <span>ASHA Certified SLP</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
                  <HeartHandshake className="w-4 h-4 text-[#9C1D38]" />
                  <span>20+ Yrs Pediatric Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
