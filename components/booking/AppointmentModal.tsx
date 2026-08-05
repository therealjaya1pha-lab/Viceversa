'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';

export default function AppointmentModal() {
  const { isBookingOpen, setIsBookingOpen, selectedServiceForBooking, language } = useApp();
  const isEs = language === 'es';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    service: 'Speech and Language Evaluation',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    insurance: 'Medicaid',
    languagePref: isEs ? 'Spanish' : 'English',
    notes: '',
  });

  const activeService = selectedServiceForBooking || formData.service;

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(
      isEs
        ? '¡Solicitud enviada con éxito! Nos comunicaremos con usted en 24 horas.'
        : 'Appointment request received! Our team will contact you within 24 hours.'
    );
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setIsBookingOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative">
        {/* Header Bar */}
        <div className="bg-[#9C1D38] text-white p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h2 className="text-xl font-bold font-serif">
                {isEs ? 'Solicitar Cita de Evaluación' : 'Schedule an Appointment'}
              </h2>
            </div>
            <p className="text-xs text-red-100 mt-1">
              {isEs
                ? 'Hablamos español, consulte con nosotros para solicitar una cita.'
                : 'Pediatric Speech, Language & Feeding Therapy in Irving, TX'}
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">
                {isEs ? '¡Solicitud Recibida!' : 'Appointment Requested!'}
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                {isEs
                  ? `Gracias ${formData.parentName}. Hemos recibido la solicitud para ${formData.childName}. Nuestro equipo de Vice Versa se pondrá en contacto al ${formData.phone} pronto.`
                  : `Thank you ${formData.parentName}. We received your appointment request for ${formData.childName}. Our intake coordinator will reach out to ${formData.phone} shortly.`}
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-left max-w-md mx-auto text-xs space-y-1 text-gray-700">
                <div><strong>{isEs ? 'Servicio:' : 'Service:'}</strong> {formData.service}</div>
                <div><strong>{isEs ? 'Horario Preferido:' : 'Preferred Time:'}</strong> {formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})</div>
                <div><strong>{isEs ? 'Idioma Preferido:' : 'Language:'}</strong> {formData.languagePref}</div>
              </div>
              <button
                onClick={resetAndClose}
                className="bg-[#9C1D38] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#7A1429] transition-colors"
              >
                {isEs ? 'Cerrar y Volver al Sitio' : 'Done & Return to Site'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Nombre del Padre / Tutor *' : 'Parent / Guardian Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Deborah Smith"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none"
                  />
                </div>

                {/* Child Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Nombre del Niño(a) *' : "Child's Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder="Leo"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Teléfono de Contacto *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(469) 320-1700"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Correo Electrónico *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none"
                  />
                </div>

                {/* Child Age */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Edad del Niño(a) *' : "Child's Age *"}
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none bg-white"
                  >
                    <option value="">{isEs ? 'Seleccione la edad' : 'Select age group'}</option>
                    <option value="0-12 months">0 – 12 months (Infant)</option>
                    <option value="1-3 years">1 – 3 years (Toddler)</option>
                    <option value="4-6 years">4 – 6 years (Preschool/Kinder)</option>
                    <option value="7-12 years">7 – 12 years (Elementary)</option>
                    <option value="13+ years">13+ years (Adolescent)</option>
                  </select>
                </div>

                {/* Service Requested */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Servicio Solicitado *' : 'Therapy Service Requested *'}
                  </label>
                  <select
                    value={activeService}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none bg-white font-medium text-gray-800"
                  >
                    <option value="Comprehensive Evaluation">Speech & Language Diagnostic Evaluation</option>
                    <option value="Speech Sound Therapy">Speech Sound / Articulation Therapy</option>
                    <option value="Feeding & Swallowing Therapy">Feeding & Swallowing Therapy (SOS & AEIOU Certified)</option>
                    <option value="Language Delay Therapy">Receptive & Expressive Language Therapy</option>
                    <option value="Orton-Gillingham Reading">Orton-Gillingham Multi-Sensory Reading</option>
                    <option value="EmpowerEd & Empower U">EmpowerEd & Empower U Educational Program</option>
                    <option value="Language of Learning Nannies">LOLN - Nanny & Caregiver Communication Coaching</option>
                    <option value="AAC Device Assessment">AAC (Augmentative Communication) Evaluation</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Fecha Preferida' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none"
                  />
                </div>

                {/* Insurance Carrier */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {isEs ? 'Seguro Médico / Método de Pago' : 'Insurance Carrier / Payment'}
                  </label>
                  <select
                    value={formData.insurance}
                    onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none bg-white"
                  >
                    <option value="Medicaid / Traditional">Medicaid (Texas)</option>
                    <option value="Superior HealthPlan">Superior HealthPlan</option>
                    <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                    <option value="Aetna">Aetna</option>
                    <option value="Cigna">Cigna</option>
                    <option value="UnitedHealthcare">UnitedHealthcare</option>
                    <option value="Private Pay / Out of Pocket">Private Pay / Self-Pay</option>
                    <option value="Other">Other / Unsure (Verify for me)</option>
                  </select>
                </div>
              </div>

              {/* Language Preference */}
              <div className="bg-red-50/60 p-3 rounded-lg border border-red-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#9C1D38]">
                  {isEs ? '¿Prefiere la consulta en Español?' : 'Do you prefer consultation in Spanish?'}
                </span>
                <div className="flex space-x-3 text-xs font-bold">
                  <label className="flex items-center space-x-1 cursor-pointer">
                    <input
                      type="radio"
                      name="langPref"
                      checked={formData.languagePref === 'Spanish'}
                      onChange={() => setFormData({ ...formData, languagePref: 'Spanish' })}
                      className="text-[#9C1D38] focus:ring-[#9C1D38]"
                    />
                    <span>Sí / Spanish</span>
                  </label>
                  <label className="flex items-center space-x-1 cursor-pointer">
                    <input
                      type="radio"
                      name="langPref"
                      checked={formData.languagePref === 'English'}
                      onChange={() => setFormData({ ...formData, languagePref: 'English' })}
                      className="text-[#9C1D38] focus:ring-[#9C1D38]"
                    />
                    <span>English</span>
                  </label>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  {isEs ? 'Detalles o Preocupaciones de Comunicación/Alimentación' : 'Child Concerns / Notes'}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    isEs
                      ? 'Describa brevemente lo que le preocupa sobre el habla, lenguaje o alimentación de su hijo(a)...'
                      : 'Briefly describe any speech delay, picky eating, or reading concerns...'
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#9C1D38] hover:bg-[#7A1429] text-white py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg mt-2"
              >
                {isEs ? 'ENVIAR SOLICITUD DE CITA' : 'SUBMIT APPOINTMENT REQUEST'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
