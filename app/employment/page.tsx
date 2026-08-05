'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import { useApp } from '@/context/AppContext';
import { Briefcase, CheckCircle2, Send, FileCheck } from 'lucide-react';
import { toast } from 'sonner';

export default function EmploymentPage() {
  const { language } = useApp();
  const isEs = language === 'es';

  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Speech-Language Pathologist (CCC-SLP)',
    licenseState: 'Texas',
    experienceYears: '3-5 years',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    toast.success(
      isEs
        ? '¡Solicitud de empleo enviada con éxito! Deborah Modé y el equipo de Vice Versa revisarán su perfil.'
        : 'Application submitted successfully! Deborah Modé and the Vice Versa team will review your credentials.'
    );
  };

  const positions = [
    { title: 'Speech-Language Pathologist (CCC-SLP)', type: 'Full-Time / Part-Time', loc: 'Irving, TX Clinic' },
    { title: 'Speech-Language Pathology Assistant (SLPA)', type: 'Full-Time', loc: 'Irving, TX Clinic' },
    { title: 'AEIOU / SOS Feeding Specialist', type: 'Clinical Specialist', loc: 'Irving, TX Clinic' },
    { title: 'Bilingual Clinical Administrative Assistant', type: 'Full-Time', loc: 'Irving, TX Clinic' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Banner */}
        <div className="bg-[#9C1D38] text-white py-14 px-4">
          <div className="layout-container text-center space-y-3">
            <span className="text-fluid-caption font-bold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full text-red-100">
              {isEs ? 'Únase a Nuestro Equipo' : 'Careers at Vice Versa'}
            </span>
            <h1 className="text-fluid-h1 font-extrabold font-serif-brand">
              {isEs ? 'Oportunidades de Empleo en Terapia Infantil' : 'Join Our Clinical & Administrative Team'}
            </h1>
            <p className="text-fluid-sub text-red-100 max-w-2xl mx-auto">
              {isEs
                ? 'Buscamos patólogos del habla, asistentes y personal dedicado a brindar una atención compasiva y de alta calidad.'
                : 'We are expanding our Irving, TX private practice. Work alongside experienced pediatric clinicians.'}
            </p>
          </div>
        </div>

        {/* Positions Grid & Application Form */}
        <div className="layout-container section-spacing-md space-y-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2B2B2B] font-serif text-center">
              {isEs ? 'Vacantes Actuales' : 'Open Positions'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((p, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-[#2B2B2B] text-base">{p.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{p.type} • {p.loc}</p>
                  </div>
                  <span className="text-[10px] bg-red-50 text-[#9C1D38] font-bold px-2.5 py-1 rounded-full">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-200 max-w-3xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <h3 className="text-2xl font-bold text-[#2B2B2B] font-serif">
                {isEs ? 'Enviar Solicitud de Empleo' : 'Submit Career Inquiry'}
              </h3>
              <p className="text-xs text-gray-600">
                {isEs
                  ? 'Complete sus datos y nuestro equipo administrativo se pondrá en contacto.'
                  : 'Interested clinicians and administrative professionals can apply directly below.'}
              </p>
            </div>

            {applied ? (
              <div className="text-center py-8 space-y-3">
                <FileCheck className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-gray-900 font-serif">
                  {isEs ? '¡Solicitud Recibida!' : 'Application Submitted!'}
                </h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  {isEs
                    ? `Gracias ${form.name}. Deborah Modé y nuestro equipo revisarán su información.`
                    : `Thank you ${form.name}. We look forward to reviewing your experience for the ${form.position} role.`}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Nombre Completo *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Correo Electrónico *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Teléfono *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(469) 320-1700"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {isEs ? 'Posición Deseada *' : 'Desired Position *'}
                    </label>
                    <select
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38] bg-white"
                    >
                      <option value="Speech-Language Pathologist (CCC-SLP)">Speech-Language Pathologist (CCC-SLP)</option>
                      <option value="Speech-Language Pathology Assistant (SLPA)">Speech-Language Pathology Assistant (SLPA)</option>
                      <option value="AEIOU / SOS Feeding Specialist">AEIOU / SOS Feeding Specialist</option>
                      <option value="Bilingual Clinical Administrative Assistant">Bilingual Clinical Administrative Assistant</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {isEs ? 'Resumen de Experiencia y Licencia' : 'Summary of Credentials & Background'}
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder={
                      isEs
                        ? 'Mencione su estado de licencia (Texas, ASHA), certificaciones (AEIOU, SOS) y años de experiencia en pediatría...'
                        : 'Include state licenses (Texas, ASHA), certifications (AEIOU, SOS), and pediatric experience...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#9C1D38] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9C1D38] hover:bg-[#7A1429] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  {isEs ? 'ENVIAR SOLICITUD DE EMPLEO' : 'SUBMIT CAREER APPLICATION'}
                </button>
              </form>
            )}
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
