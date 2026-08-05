'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import MultiStepContactForm from '@/components/contact/MultiStepContactForm';
import { useApp } from '@/context/AppContext';
import { Phone, Mail, MapPin, Printer, Clock, Globe, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const { language, openBookingWithService, setIsScreenerOpen } = useApp();
  const isEs = language === 'es';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Banner */}
        <div className="bg-[#9C1D38] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full text-red-100">
              {isEs ? 'Contacto e Instalaciones' : 'Contact & Location'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif">
              {isEs ? 'Comuníquese con Vice Versa' : 'Get in Touch with Vice Versa'}
            </h1>
            <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto">
              {isEs
                ? 'Estamos aquí para guiarle. Llámenos, envíenos un correo o programe su cita en línea.'
                : 'We look forward to serving your family at our Irving, Texas pediatric clinic.'}
            </p>
          </div>
        </div>

        {/* Contact Info & Interactive Multi-Step Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-6">
                <h2 className="text-2xl font-bold text-[#2B2B2B] font-serif">
                  {isEs ? 'Información de la Clínica' : 'Clinic Contact Info'}
                </h2>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#9C1D38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B2B2B]">{isEs ? 'Dirección' : 'Address:'}</strong>
                      <span>6230 N Belt Line Rd Ste 300<br />Irving, TX 75063</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#9C1D38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B2B2B]">{isEs ? 'Teléfono Directo' : 'Phone:'}</strong>
                      <a href="tel:4693201700" className="hover:underline text-[#9C1D38] font-bold">
                        469-320-1700
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Printer className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B2B2B]">{isEs ? 'Fax Medico' : 'Fax:'}</strong>
                      <span>469-320-1732</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[#9C1D38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B2B2B]">{isEs ? 'Correo Electrónico' : 'Email:'}</strong>
                      <a href="mailto:info@viceversaspeech.com" className="hover:underline text-[#9C1D38] font-medium">
                        info@viceversaspeech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#9C1D38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B2B2B]">{isEs ? 'Horario de Atención' : 'Business Hours:'}</strong>
                      <span className="text-xs">
                        Mon – Thu: 8:00 AM – 6:00 PM<br />
                        Fri – Sun: Closed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button
                    onClick={() => openBookingWithService()}
                    className="w-full bg-[#9C1D38] hover:bg-[#7A1429] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    {isEs ? 'SOLICITAR CITA EN LÍNEA' : 'REQUEST APPOINTMENT ONLINE'}
                  </button>

                  <button
                    onClick={() => setIsScreenerOpen(true)}
                    className="w-full bg-amber-50 text-amber-900 border border-amber-200 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-amber-100 transition-colors flex items-center justify-center space-x-1"
                  >
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>{isEs ? 'EVALUADOR RÁPIDO DE SÍNTOMAS' : 'TAKE MILESTONE SCREENER'}</span>
                  </button>
                </div>
              </div>

              {/* Spanish Language Notice */}
              <div className="bg-red-50/70 border border-red-200 rounded-xl p-5 text-xs text-red-900 space-y-1">
                <h4 className="font-bold text-[#9C1D38] text-sm">¡Hablamos español!</h4>
                <p>
                  Atendemos a familias hispanohablantes en Texas. Nuestro personal administrativo y terapeutas brindan evaluaciones y consultas completas en español.
                </p>
              </div>
            </div>

            {/* Interactive Multi-Step Contact Form */}
            <div className="lg:col-span-7 space-y-4">
              <MultiStepContactForm />
            </div>
          </div>

          {/* Google Maps Location */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-md">
            <h3 className="text-lg font-bold text-[#2B2B2B] font-serif mb-3 px-2">
              {isEs ? 'Ubicación de la Clínica en Irving, TX' : 'Irving, TX Practice Location'}
            </h3>
            <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 relative bg-gray-100">
              <iframe
                title="Vice Versa Speech and Language Services Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.675076591345!2d-96.9535!3d32.9332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c297594df5811%3A0x6b45a6c38b8158d6!2s6230%20N%20Belt%20Line%20Rd%20Ste%20300%2C%20Irving%2C%20TX%2075063!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <SymptomScreenerModal />
      <ParentAssistant />
    </div>
  );
}
