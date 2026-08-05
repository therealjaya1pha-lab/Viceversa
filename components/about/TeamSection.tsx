'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { Award, GraduationCap, UtensilsCrossed, Languages, ShieldCheck } from 'lucide-react';

export default function TeamSection() {
  const { language, openBookingWithService } = useApp();
  const isEs = language === 'es';

  return (
    <div className="space-y-12">
      <div className="text-center pt-8">
        <h2 className="text-4xl sm:text-5xl font-script text-[#9C1D38] font-bold tracking-wide">
          {isEs ? 'Conozca a Nuestro Equipo' : 'MEET THE TEAM'}
        </h2>
        <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
          {isEs
            ? 'Nuestro equipo interdisciplinario apasionado de especialistas dedicados al desarrollo infantil.'
            : 'Our compassionate, experienced team of speech-language pathologists and administration.'}
        </p>
      </div>

      <div className="space-y-12">
        {/* Team Member 1: Ayesha Ali */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 order-2 lg:order-1 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                {isEs
                  ? 'Ayesha Ali se graduó de la Universidad de Texas en Dallas en diciembre de 2020 con una Licenciatura en Ciencias en Patología del Habla y Lenguaje y Desarrollo Infantil. Trabajó como Terapeuta de Conducta durante un año antes de continuar sus estudios. Se graduó de Texas Woman’s University con una Maestría en Ciencias en Patología del Habla y Lenguaje en agosto de 2023. Cuenta con licencia del estado de Texas y está certificada por la Asociación Americana del Habla, Lenguaje y Audición.'
                  : 'Ayesha Ali graduated from the University of Texas at Dallas in December 2020 with a Bachelor of Science degree in Speech-Language Pathology and Child Learning and Development. She worked as a Behavior Therapist for a year before she continued her education. She graduated from Texas Woman’s University with a Master of Science in Speech-Language Pathology in August 2023. She is licensed by the state of Texas and is certified by the American Speech-Language and Hearing Association.'}
              </p>

              <p>
                {isEs
                  ? 'Tiene experiencia trabajando en diversos entornos, incluidos centros de ABA, hospitales, escuelas y guarderías. Durante su experiencia clínica, administró terapia del habla, lenguaje y alimentación a grupos desde la primera infancia hasta geriatría. Desarrolló un interés especial en la terapia de alimentación, especialmente para niños con aversiones sensoriales, para ayudar a ampliar su paladar alimentario. Es una terapeuta de alimentación certificada en AEIOU y tiene experiencia con técnicas de alimentación SOS. Ayesha está profundamente comprometida con garantizar que todas las personas tengan voz.'
                  : 'She has experience working with people in a variety of settings, including ABA facilities, hospitals, schools, and daycares. During her clinical experience, she administered speech, language, and feeding therapy to groups ranging from early childhood to geriatrics in a variety of clinical, educational, and medical settings. She developed a special interest in feeding therapy, particularly for children with sensory aversions, to help increase their food palate. She is a certified and trained AEIOU feeding therapist and has experience with SOS feeding techniques. Ayesha is deeply committed to ensuring that people of all backgrounds have a voice in whatever way they can express it, whether through verbal speech, or an AAC.'}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center space-x-1 text-xs font-bold bg-[#9C1D38]/10 text-[#9C1D38] px-3 py-1 rounded-full">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>AEIOU & SOS Certified Feeding Therapist</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-bold bg-blue-50 text-blue-800 px-3 py-1 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>UT Dallas & Texas Woman’s Univ</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#9C1D38] shadow-md max-w-xs w-full h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="Ayesha Ali - Speech-Language Pathologist at Vice Versa"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="text-xl font-bold text-[#2B2B2B]">Ayesha Ali</h3>
                <p className="text-xs font-bold text-[#9C1D38] tracking-widest uppercase mt-0.5">
                  SPEECH-LANGUAGE PATHOLOGIST
                </p>
                <button
                  onClick={() => openBookingWithService('Feeding & Swallowing Therapy')}
                  className="mt-3 text-xs bg-[#9C1D38] text-white px-4 py-1.5 rounded-full font-bold hover:bg-[#7A1429]"
                >
                  {isEs ? 'Agendar con Ayesha' : 'Book Feeding Evaluation'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dotted Divider Line matching screenshot */}
        <div className="border-t-2 border-dotted border-[#9C1D38]/40 my-8" />

        {/* Team Member 2: Dana Beranger */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#9C1D38] shadow-md max-w-xs w-full h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                  alt="Dana Beranger - Speech-Language Pathologist at Vice Versa"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="text-xl font-bold text-[#2B2B2B]">Dana Beranger</h3>
                <p className="text-xs font-bold text-[#9C1D38] tracking-widest uppercase mt-0.5">
                  SPEECH-LANGUAGE PATHOLOGIST
                </p>
                <button
                  onClick={() => openBookingWithService('Receptive & Expressive Language')}
                  className="mt-3 text-xs bg-[#9C1D38] text-white px-4 py-1.5 rounded-full font-bold hover:bg-[#7A1429]"
                >
                  {isEs ? 'Agendar con Dana' : 'Book Language Evaluation'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                {isEs
                  ? 'Dana Beranger obtuvo su Licenciatura en Artes de Binghamton University en 2018. Continuó sus estudios y obtuvo una Maestría en el Arte de la Enseñanza en 2020 de Relay Graduate School of Education. Pasó 3 años como maestra de Educación Especial Primaria antes de obtener su Maestría en Artes en Ciencias Comunicativas y Trastornos de Hampton University en 2024. Cuenta con licencia del estado de Texas y está certificada por ASHA.'
                  : 'Dana Beranger graduated with her Bachelor of Arts degree from Binghamton University in 2018. She continued to pursue her education and obtained a Master in the Art of Teaching degree in 2020 from Relay Graduate School of Education. She has spent 3 years as an Elementary Special Education teacher prior to earning her Master of Arts in Communicative Science and Disorders from Hampton University in 2024. She is licensed by the state of Texas and is certified by the American Speech-Language and Hearing Association.'}
              </p>

              <p>
                {isEs
                  ? 'Dana tiene experiencia brindando terapia en poblaciones pediátricas y geriátricas en clínicas, rehabilitación ambulatoria, preescolar, primaria y secundaria. Ha realizado investigaciones sobre la mejor manera de atender a las poblaciones pediátricas bilingües. Le gusta construir relaciones positivas con las familias y trabajar con la población con autismo utilizando un enfoque colaborativo centrado en la familia.'
                  : 'Dana has experience providing therapy in both pediatric and geriatric populations. She has provided services in clinics, outpatient rehabilitation, preschool, elementary and middle school settings. Dana has experience working with a diverse population and has completed research in how to best serve bilingual pediatric populations. She enjoys building positive relationships with families and working with the autism population using a family centered collaborative approach.'}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center space-x-1 text-xs font-bold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Bilingual Pediatrics & Autism Specialist</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-bold bg-[#9C1D38]/10 text-[#9C1D38] px-3 py-1 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Binghamton & Hampton University</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dotted Divider Line matching screenshot */}
        <div className="border-t-2 border-dotted border-[#9C1D38]/40 my-8" />

        {/* Team Member 3: Ana Vega */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 order-2 lg:order-1 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                {isEs
                  ? 'Ana Vega es una asistente médica certificada a nivel nacional y además está certificada como técnica en farmacia.'
                  : 'Ana Vega is a national certified medical assistant and is additionally certified as a pharmacy technician.'}
              </p>

              <p>
                {isEs
                  ? 'Ana demostró e instruyó un programa de asistente médico utilizando una variedad de habilidades y técnicas de enseñanza para acomodar a una población estudiantil diversa. Ana diseñó, administró y calificó exámenes para evaluar el logro de los objetivos del curso. Participó en la composición y desarrollo del plan de estudios del curso para mantenerse al día con los estándares de la industria. Impartió clases sobre ley y ética médica, terminología médica, farmacología, anatomía y fisiología humana, software de computadora, facturación médica y seguro médico.'
                  : 'Ana demonstrated and instructed a medical assistant program using a variety of teaching skills and techniques to accommodate a diverse student population. Exams were designed, administered, and graded to evaluate achievement of course objectives by Ana. She participated in the composition and development of the course curriculum in order to stay abreast of industry standards. Ana taught classes on medical law and ethics, medical terminology, pharmacology, human anatomy and physiology, computer software, medical invoicing, and medical insurance to medical assistant students.'}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center space-x-1 text-xs font-bold bg-purple-50 text-purple-900 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Certified Medical Assistant & Insurance Specialist</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#9C1D38] shadow-md max-w-xs w-full h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                  alt="Ana Vega - Office Manager at Vice Versa"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="text-xl font-bold text-[#2B2B2B]">Ana Vega</h3>
                <p className="text-xs font-bold text-[#9C1D38] tracking-widest uppercase mt-0.5">
                  OFFICE MANAGER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
