'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function TestimonialsSection() {
  const { language } = useApp();
  const isEs = language === 'es';

  const reviews = [
    {
      name: 'Maria G.',
      location: 'Irving, TX',
      text: isEs
        ? 'Deborah y su equipo cambiaron la vida de mi hijo. Cuando empezamos, Leo casi no hablaba. Ahora se comunica con confianza y disfruta venir a terapia. ¡Hablamos español y nos atendieron en nuestro idioma!'
        : 'Deborah and her team transformed my son Leo’s communication. When we started, he barely spoke. Now he expresses himself with confidence. Being able to communicate in Spanish made our family feel so welcome.',
      rating: 5,
      tag: isEs ? 'Terapia de Habla' : 'Speech Therapy Parent',
    },
    {
      name: 'David & Sarah M.',
      location: 'Coppell, TX',
      text: isEs
        ? 'Ayesha Ali es maravillosa con la terapia de alimentación sensorial (AEIOU/SOS). Mi hija solía llorar con cualquier textura nueva. El enfoque tan cariñoso de Vice Versa ha sido un verdadero milagro.'
        : 'Ayesha Ali is incredible with sensory feeding therapy. Our daughter used to gag and cry at new food textures. Vice Versa’s compassionate approach made all the difference.',
      rating: 5,
      tag: isEs ? 'Terapia de Alimentación' : 'Feeding Therapy Parent',
    },
    {
      name: 'Jessica R.',
      location: 'Las Colinas, TX',
      text: isEs
        ? 'El programa de lectura multisensorial Orton-Gillingham ha ayudado a mi hija en primer grado a avanzar enormemente en lectura. ¡Recomiendo 100% Vice Versa!'
        : 'The Orton-Gillingham reading program helped my 1st grader leap forward in reading and confidence. The staff is so dedicated!',
      rating: 5,
      tag: 'Orton-Gillingham Parent',
    },
  ];

  return (
    <section className="section-spacing-md bg-white border-t border-slate-100">
      <div className="layout-container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-burgundy inline-block text-fluid-sm font-semibold">
            {isEs ? 'Testimonios de Familias' : 'Family Testimonials'}
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-[#1E293B]">
            {isEs ? 'Lo Que Dicen Nuestras Familias' : 'Trusted by North Texas Families'}
          </h2>
          <p className="text-fluid-sub text-slate-600">
            {isEs
              ? 'Conozca las experiencias de padres que confían en el equipo de Vice Versa.'
              : 'Real stories from parents who experienced compassionate, personalized therapy.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="surface-card surface-card-hover p-8 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-rose-200/70 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-fluid-body text-slate-700 italic">
                  &quot;{r.text}&quot;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#1E293B] text-fluid-sm">{r.name}</h4>
                  <p className="text-fluid-sm text-slate-500 font-medium">{r.location}</p>
                </div>
                <span className="text-fluid-sm font-bold text-[#9C1D38] bg-[#FDF2F4] border border-[#F4C5CE] px-2.5 py-1 rounded-full">
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
