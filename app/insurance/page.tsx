'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, FileText, CheckCircle2, HelpCircle, PhoneCall, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

export default function InsurancePage() {
  const { language, openBookingWithService } = useApp();
  const isEs = language === 'es';

  const [verifySubmitted, setVerifySubmitted] = useState(false);
  const [verifyForm, setVerifyForm] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childDob: '',
    carrier: 'Medicaid (Texas)',
    memberId: '',
    groupNumber: '',
  });

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVerifySubmitted(true);
    toast.success(
      isEs
        ? '¡Solicitud de verificación enviada! Ana Vega verificará sus beneficios de seguro.'
        : 'Insurance verification request submitted! Ana Vega will verify your coverage details.'
    );
  };

  const providers = [
    { name: 'Texas Medicaid', type: 'State Program', desc: 'Full coverage for eligible pediatric speech & feeding therapy.' },
    { name: 'Superior HealthPlan', type: 'Medicaid Managed Care', desc: 'In-network provider for pediatric speech evaluation & therapy.' },
    { name: 'Blue Cross Blue Shield (BCBS)', type: 'Commercial & PPO', desc: 'In-network benefits for comprehensive speech-language disorders.' },
    { name: 'Aetna', type: 'Commercial & Choice POS', desc: 'Coverage for speech, language, and swallowing evaluations.' },
    { name: 'Cigna', type: 'Commercial Healthcare', desc: 'Direct billing for covered developmental speech & feeding plans.' },
    { name: 'UnitedHealthcare', type: 'Choice & Commercial', desc: 'Pre-authorization and therapy plan coverage.' },
    { name: 'Private Pay / Self-Pay', type: 'Flexible Options', desc: 'Competitive self-pay rates, HSA/FSA accepted with itemized superbills.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Insurance Page Banner */}
        <div className="bg-[#9C1D38] text-white py-14 px-4">
          <div className="layout-container text-center space-y-3">
            <span className="text-fluid-caption font-bold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full text-red-100">
              {isEs ? 'Cobertura y Seguros Medicos' : 'Insurance & Billing'}
            </span>
            <h1 className="text-fluid-h1 font-extrabold font-serif-brand">
              {isEs ? 'Seguros Aceptados y Verificación de Beneficios' : 'Accepted Insurance & Coverage Assistance'}
            </h1>
            <p className="text-fluid-sub text-red-100 max-w-2xl mx-auto">
              {isEs
                ? 'Trabajamos directamente con su proveedor de seguro médico para maximizar sus beneficios y simplificar la atención de su hijo(a).'
                : 'We work directly with major health insurance carriers and Texas Medicaid to make quality therapy accessible.'}
            </p>
          </div>
        </div>

        {/* Accepted Providers Grid */}
        <div className="layout-container section-spacing-md space-y-16">
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B] font-serif">
                {isEs ? 'Planes de Seguro In-Network y Aceptados' : 'In-Network Insurance Partners'}
              </h2>
              <p className="text-sm text-gray-600">
                {isEs
                  ? 'Si su seguro no aparece en la lista, contáctenos. Ana Vega revisará su plan específico.'
                  : 'If your provider is not listed below, please contact our office for customized verification.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providers.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:border-[#9C1D38] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <ShieldCheck className="w-6 h-6 text-[#9C1D38]" />
                      <span className="text-[10px] font-bold text-[#9C1D38] bg-red-50 px-2.5 py-0.5 rounded-full">
                        {p.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2B2B2B] font-serif">{p.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-semibold flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isEs ? 'Verificación Gratuita' : 'Free Verification'}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Verification Form */}
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9C1D38] bg-red-100/60 px-3 py-1 rounded-full">
                  {isEs ? 'Servicio Sin Costo' : 'Free Benefit Check'}
                </span>
                <h3 className="text-2xl font-bold text-[#2B2B2B] font-serif">
                  {isEs ? 'Verifique la Cobertura de su Hijo(a)' : 'Check Your Child’s Coverage Online'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {isEs
                    ? 'Complete este formulario y nuestra Administradora de Oficina, Ana Vega, se comunicará con su aseguradora para verificar la cobertura de evaluaciones y terapias.'
                    : 'Fill out your insurance details below. Our Office Manager, Ana Vega, will verify your copays, deductibles, and authorization requirements.'}
                </p>

                <div className="space-y-2 pt-2 text-xs text-gray-700 font-medium">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span>{isEs ? 'Confirmación en 24 horas hábiles' : 'Response within 24 business hours'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C1D38]" />
                    <span>{isEs ? 'Asistencia con referencias del pediatra' : 'PCP referral guidance included'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                {verifySubmitted ? (
                  <div className="text-center py-6 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-gray-900 font-serif">
                      {isEs ? '¡Verificación en Proceso!' : 'Verification Request Received!'}
                    </h4>
                    <p className="text-xs text-gray-600 max-w-sm mx-auto">
                      {isEs
                        ? `Gracias ${verifyForm.parentName}. Ana Vega revisará el seguro ${verifyForm.carrier} para ${verifyForm.childName} y se comunicará al ${verifyForm.phone}.`
                        : `Thank you ${verifyForm.parentName}. Ana Vega will review ${verifyForm.carrier} policy details for ${verifyForm.childName} and contact you at ${verifyForm.phone}.`}
                    </p>
                    <button
                      onClick={() => setVerifySubmitted(false)}
                      className="text-xs font-bold text-[#9C1D38] hover:underline pt-2"
                    >
                      {isEs ? 'Enviar otra verificación' : 'Submit another check'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVerifySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          {isEs ? 'Nombre del Padre' : 'Parent Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={verifyForm.parentName}
                          onChange={(e) => setVerifyForm({ ...verifyForm, parentName: e.target.value })}
                          placeholder="Parent Full Name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          {isEs ? 'Teléfono *' : 'Phone *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={verifyForm.phone}
                          onChange={(e) => setVerifyForm({ ...verifyForm, phone: e.target.value })}
                          placeholder="(469) 320-1700"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          {isEs ? 'Nombre del Niño(a) *' : "Child's Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={verifyForm.childName}
                          onChange={(e) => setVerifyForm({ ...verifyForm, childName: e.target.value })}
                          placeholder="Child Name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          {isEs ? 'Compañía de Seguro *' : 'Insurance Carrier *'}
                        </label>
                        <select
                          value={verifyForm.carrier}
                          onChange={(e) => setVerifyForm({ ...verifyForm, carrier: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#9C1D38] bg-white"
                        >
                          <option value="Medicaid (Texas)">Medicaid (Texas)</option>
                          <option value="Superior HealthPlan">Superior HealthPlan</option>
                          <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                          <option value="Aetna">Aetna</option>
                          <option value="Cigna">Cigna</option>
                          <option value="UnitedHealthcare">UnitedHealthcare</option>
                          <option value="Other">Other Insurance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          {isEs ? 'ID del Miembro' : 'Member ID / Policy #' }
                        </label>
                        <input
                          type="text"
                          value={verifyForm.memberId}
                          onChange={(e) => setVerifyForm({ ...verifyForm, memberId: e.target.value })}
                          placeholder="ID Number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          {isEs ? 'Número de Grupo' : 'Group Number'}
                        </label>
                        <input
                          type="text"
                          value={verifyForm.groupNumber}
                          onChange={(e) => setVerifyForm({ ...verifyForm, groupNumber: e.target.value })}
                          placeholder="Group #"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#9C1D38] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#7A1429] transition-colors"
                    >
                      {isEs ? 'SOLICITAR VERIFICACIÓN DE SEGURO' : 'VERIFY MY INSURANCE BENEFITS'}
                    </button>
                  </form>
                )}
              </div>
            </div>
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
