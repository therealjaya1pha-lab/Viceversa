'use client';

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, AlertCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function SymptomScreenerModal() {
  const { isScreenerOpen, setIsScreenerOpen, openBookingWithService, language } = useApp();
  const isEs = language === 'es';

  const [ageGroup, setAgeGroup] = useState<'1-2' | '2-3' | '3-5' | '6+'>('2-3');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  if (!isScreenerOpen) return null;

  const milestones = {
    '1-2': [
      { id: 'm1', label: isEs ? 'Dice menos de 10-20 palabras' : 'Uses fewer than 10-20 clear words' },
      { id: 'm2', label: isEs ? 'No responde cuando se le llama por su nombre' : 'Does not respond consistently to name' },
      { id: 'm3', label: isEs ? 'Rechaza texturas sólidas o purés (Comida muy melindrosa)' : 'Refuses solid textures or purées (Extreme picky eating)' },
      { id: 'm4', label: isEs ? 'No señala objetos para pedir ayuda o mostrar algo' : 'Does not point to objects to request help' },
    ],
    '2-3': [
      { id: 'm5', label: isEs ? 'No junta 2 palabras ("quiero agua", "dame pan")' : 'Not combining 2 words together ("want water", "more milk")' },
      { id: 'm6', label: isEs ? 'La familia comprende menos del 50% de lo que dice' : 'Family understands less than 50% of child speech' },
      { id: 'm7', label: isEs ? 'Llora o se ahoga con ciertas texturas de comida' : 'Gags or cries when trying new food textures' },
      { id: 'm8', label: isEs ? 'Dificultad para seguir instrucciones simples' : 'Has difficulty following 1-step directions' },
    ],
    '3-5': [
      { id: 'm9', label: isEs ? 'Desconocidos no entienden su pronunciación' : 'Unfamiliar listeners struggle to understand child' },
      { id: 'm10', label: isEs ? 'Trabalenguas, tartamudez o repetición de sonidos' : 'Stutters or repeats sounds frequently' },
      { id: 'm11', label: isEs ? 'Come solo de 3 a 5 alimentos específicos' : 'Eats fewer than 5 specific foods (Sensory aversion)' },
      { id: 'm12', label: isEs ? 'Le cuesta relacionarse con otros niños de su edad' : 'Struggles with turn-taking and play with peers' },
    ],
    '6+': [
      { id: 'm13', label: isEs ? 'Dificultad para pronunciar R, S, L, Z, TH' : 'Trouble pronouncing R, S, L, Z, TH speech sounds' },
      { id: 'm14', label: isEs ? 'Dificultad para leer, decodificar palabras o rimas' : 'Struggles with reading, rhyming, or phonics (Orton-Gillingham)' },
      { id: 'm15', label: isEs ? 'Dificultad con habilidades de vida e independencia (Empower U)' : 'Needs help with organization & life independence (Empower U)' },
      { id: 'm16', label: isEs ? 'Dificultad para estructurar oraciones completas en la escuela' : 'Struggles with complex sentence structures in school' },
    ],
  };

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentList = milestones[ageGroup];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#86172E] via-[#9C1D38] to-[#7A1429] text-white p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-10 shadow-md">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            <h2 className="text-xl font-bold font-heading">
              {isEs ? 'Evaluador Rápido de Desarrollo' : 'Child Milestone Screener'}
            </h2>
          </div>
          <button
            onClick={() => setIsScreenerOpen(false)}
            className="p-1 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {!completed ? (
            <>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  {isEs ? '1. Seleccione el grupo de edad de su hijo(a):' : "1. Select your child's age:"}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['1-2', '2-3', '3-5', '6+'] as const).map((ag) => (
                    <button
                      key={ag}
                      type="button"
                      onClick={() => setAgeGroup(ag)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                        ageGroup === ag
                          ? 'bg-[#9C1D38] text-white border-[#9C1D38] shadow-sm'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {ag} {isEs ? 'años' : 'yrs'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  {isEs
                    ? '2. Marque si nota alguna de estas señales:'
                    : '2. Check any signs or concerns you observe:'}
                </label>
                <div className="space-y-2.5">
                  {currentList.map((item) => {
                    const isChecked = selectedSymptoms.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleSymptom(item.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                          isChecked
                            ? 'bg-red-50/70 border-[#9C1D38] shadow-sm'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center mt-0.5 shrink-0 ${
                            isChecked
                              ? 'bg-[#9C1D38] border-[#9C1D38] text-white'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCompleted(true)}
                className="w-full bg-[#9C1D38] hover:bg-[#7A1429] text-white py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>{isEs ? 'VER RECOMENDACIÓN' : 'SEE RECOMMENDATION'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="space-y-6 animate-in zoom-in-95">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-900 space-y-2">
                <div className="flex items-center space-x-2 text-amber-800 font-bold text-base">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>
                    {selectedSymptoms.length > 0
                      ? isEs
                        ? `Se identificaron ${selectedSymptoms.length} área(s) de atención`
                        : `Identified ${selectedSymptoms.length} priority area(s)`
                      : isEs
                      ? 'No se seleccionaron señales de alerta'
                      : 'No critical concerns flagged'}
                  </span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {selectedSymptoms.length > 0
                    ? isEs
                      ? 'La intervención temprana marca una diferencia transformadora. Los patólogos del habla de Vice Versa recomiendan una evaluación diagnóstica personalizada.'
                      : 'Early intervention makes a lifelong difference. Vice Versa speech-language pathologists recommend a comprehensive pediatric evaluation.'
                    : isEs
                    ? 'Incluso sin señales graves, si tiene dudas sobre el lenguaje o la alimentación de su hijo(a), una consulta preventiva siempre proporciona tranquilidad.'
                    : 'Even without critical signs, if you have any questions regarding your child’s speech, language, or feeding, a preventative consultation offers peace of mind.'}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  {isEs ? 'Servicios Recomendados para su Hijo(a):' : 'Recommended Services:'}
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span className="font-semibold">
                      {isEs ? 'Evaluación Diagnóstica Completa del Habla y Lenguaje' : 'Comprehensive Speech & Language Evaluation'}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span className="font-semibold">
                      {isEs ? 'Terapia de Alimentación Sensorial AEIOU / SOS' : 'AEIOU / SOS Sensory Feeding Therapy'}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span className="font-semibold">
                      {isEs ? 'Programa Educativo EmpowerEd' : 'EmpowerEd Educational Program'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setIsScreenerOpen(false);
                    openBookingWithService('Comprehensive Evaluation');
                  }}
                  className="flex-1 bg-[#9C1D38] hover:bg-[#7A1429] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center"
                >
                  {isEs ? 'AGENDAR EVALUACIÓN AHORA' : 'SCHEDULE EVALUATION NOW'}
                </button>
                <button
                  onClick={() => {
                    setCompleted(false);
                    setSelectedSymptoms([]);
                  }}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-bold text-xs hover:bg-gray-50"
                >
                  {isEs ? 'Reiniciar' : 'Start Over'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
